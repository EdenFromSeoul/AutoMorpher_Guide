from __future__ import annotations

import hashlib
import re
import urllib.parse
import zipfile
from dataclasses import dataclass
from pathlib import Path, PurePosixPath


ROOT = Path(__file__).resolve().parents[1]
SOURCE_DIR = ROOT / "work" / "source"
CONTENT_ROOT = ROOT / "content"
MEDIA_DIR = ROOT / "public" / "media"
GITHUB_FILE_LIMIT = 100_000_000
ARCHIVE_NAME = "きせった (Kisetter) Guide.zip"


@dataclass(frozen=True)
class PageSpec:
    language: str
    source_folder: str
    title: str
    slug: str
    category: str
    description: str
    order: int
    source_hint: str


PAGES = [
    PageSpec("ko", "한국어", "Auto Fitting Mode", "auto-fitting", "사용 가이드", "의상을 대상 아바타에 맞게 자동 변형하는 전체 작업 흐름입니다.", 20, "Auto Fitting Mode"),
    PageSpec("ko", "한국어", "Manual Fitting Mode", "manual-fitting", "사용 가이드", "자동 변형과 본 수동 조정을 함께 사용하는 작업 흐름입니다.", 30, "Manual Fitting Mode"),
    PageSpec("ko", "한국어", "BlendShape 생성", "blendshape-generator", "기능 설명", "아바타의 BlendShape를 의상 Mesh에 생성하는 방법입니다.", 40, "BlendShape 생성"),
    PageSpec("ko", "한국어", "BlendShape Controller", "blendshape-controller", "기능 설명", "여러 Mesh의 BlendShape를 한곳에서 확인하고 조정합니다.", 50, "BlendShape Controller"),
    PageSpec("ko", "한국어", "Profile 생성 및 추가 방법", "profiles", "기능 설명", "의상 대응 정보를 Profile로 생성하고 설치하는 방법입니다.", 60, "Profile 생성 및 추가 방법"),
    PageSpec("ko", "한국어", "파라미터 설명", "parameters", "참조", "기본 옵션과 고급 Fitting·Weighting 옵션을 설명합니다.", 70, "파라미터 설명"),
    PageSpec("ko", "한국어", "변형 품질을 높이는 팁", "quality-tips", "문제 해결", "가슴·발·신발·모자·장갑 등 변형 품질을 개선하는 방법입니다.", 80, "변형 품질을 높이는 팁"),
    PageSpec("ja", "日本語", "Auto Fitting Mode", "auto-fitting", "使用ガイド", "衣装を対象アバターに合わせて自動変形する手順です。", 20, "Auto Fitting Mode"),
    PageSpec("ja", "日本語", "Manual Fitting Mode", "manual-fitting", "使用ガイド", "自動変形とボーンの手動調整を組み合わせる手順です。", 30, "Manual Fitting Mode"),
    PageSpec("ja", "日本語", "BlendShapeの作成", "blendshape-generator", "機能説明", "アバターのBlendShapeを衣装Meshに生成する方法です。", 40, "BlendShapeの作成"),
    PageSpec("ja", "日本語", "BlendShape Controller", "blendshape-controller", "機能説明", "複数のMeshのBlendShapeを一か所で確認・調整します。", 50, "BlendShape Controller"),
    PageSpec("ja", "日本語", "Profileの作成および追加方法", "profiles", "機能説明", "衣装対応情報をProfileとして作成・追加する方法です。", 60, "Profileの作成および追加方法"),
    PageSpec("ja", "日本語", "パラメータの説明", "parameters", "リファレンス", "基本オプションと高度なFitting・Weightingオプションを説明します。", 70, "パラメータの説明"),
    PageSpec("ja", "日本語", "変形品質を向上させるヒント", "quality-tips", "トラブルシューティング", "胸・足・靴・帽子・手袋などの変形品質を改善する方法です。", 80, "変形品質を向上させるヒント"),
    PageSpec("en", "English", "Auto Fitting Mode", "auto-fitting", "User Guide", "Complete workflow for automatically fitting an outfit to a target avatar.", 20, "Auto Fitting Mode"),
    PageSpec("en", "English", "Manual Fitting Mode", "manual-fitting", "User Guide", "Workflow combining automatic fitting with manual bone adjustments.", 30, "Manual Fitting Mode"),
    PageSpec("en", "English", "BlendShape Generator", "blendshape-generator", "Features", "Create outfit mesh BlendShapes from the avatar's BlendShapes.", 40, "BlendShape Generator"),
    PageSpec("en", "English", "BlendShape Controller", "blendshape-controller", "Features", "Review and adjust BlendShapes across multiple meshes in one place.", 50, "BlendShape Controller"),
    PageSpec("en", "English", "How to Create and Add a Profile", "profiles", "Features", "Create and install profiles containing outfit fitting information.", 60, "How to Create and Add a Profile"),
    PageSpec("en", "English", "Parameter Description", "parameters", "Reference", "Explanation of basic and advanced fitting and weighting options.", 70, "Parameter Description"),
    PageSpec("en", "English", "Tips for Improving Fit", "quality-tips", "Troubleshooting", "Improve fitting quality around the chest, feet, shoes, hats, and gloves.", 80, "Tips for Improving Fit"),
]


LINK_RE = re.compile(r"(!?\[[^\]]*\])\(([^)]+)\)")
HEADING_ID_RE = re.compile(r"\s*\{#[^}]+\}\s*$")
NOTION_PAGE_IDS = {
    "34c1bca8582e8120a636e54b3647dea8": "parameters",
    "3511bca8582e80f98d48d477f12756c0": "blendshape-controller",
    "3531bca8582e8066ac20d71cea30f8a6": "faq",
    "3531bca8582e8051b646e8e8363d6ef8": "faq",
    "3531bca8582e80dd802de0849c603257": "faq",
}


def normalize_entry_path(path: str) -> str:
    parts: list[str] = []
    for part in path.replace("\\", "/").split("/"):
        if not part or part == ".":
            continue
        if part == "..":
            if parts:
                parts.pop()
            continue
        parts.append(part)
    return "/".join(parts)


def frontmatter(spec: PageSpec) -> str:
    safe_description = spec.description.replace('"', '\\"')
    return (
        "---\n"
        f'title: "{spec.title}"\n'
        f'slug: "{spec.slug}"\n'
        f'category: "{spec.category}"\n'
        f'description: "{safe_description}"\n'
        f"order: {spec.order}\n"
        "---\n\n"
    )


def clean_markdown(text: str, spec: PageSpec) -> str:
    text = text.replace("\ufeff", "").replace("\r\n", "\n")
    lines = text.splitlines()
    if lines and lines[0].startswith("# "):
        lines = lines[1:]

    cleaned: list[str] = []
    for line in lines:
        if line.startswith("# "):
            line = "#" + line
        if re.match(r"^#\s+[—―─-]{8,}\s*$", line):
            cleaned.append("---")
            continue
        line = HEADING_ID_RE.sub("", line)
        line = line.replace("Eden AutoMorpher", "きせった (Kisetter)")
        line = line.replace("Eden Auto Morpher", "きせった (Kisetter)")
        line = line.replace("AutoMorpher", "きせった (Kisetter)")
        line = line.replace("Auto Morpher", "きせった (Kisetter)")
        line = line.replace(
            "https://discord.gg/DgquvzGHC8",
            "https://discord.com/invite/JFzDGrN2bF",
        )
        line = line.replace("Animator및", "Animator 및")
        line = line.replace("Componenet", "Component")
        line = line.replace("pipline Manager", "Pipeline Manager")
        line = line.replace("VRChat Upload시", "VRChat Upload 시")
        line = line.replace("Hierahcy상", "Hierarchy상")
        cleaned.append(line.rstrip())

    body = "\n".join(cleaned).strip() + "\n"
    body = re.sub(r"\n{4,}", "\n\n\n", body)
    return frontmatter(spec) + body


def media_url_for(data: bytes, suffix: str) -> tuple[str, Path]:
    digest = hashlib.sha256(data).hexdigest()[:16]
    suffix = suffix.lower() or ".bin"
    filename = f"{digest}{suffix}"
    return f"{{{{BASE_PATH}}}}/media/{filename}", MEDIA_DIR / filename


def replace_known_link(target: str) -> str | None:
    decoded = urllib.parse.unquote(target)
    for page_id, slug in NOTION_PAGE_IDS.items():
        if page_id in decoded:
            return f"../{slug}/"
    if "discord.gg/DgquvzGHC8" in decoded:
        return "https://discord.com/invite/JFzDGrN2bF"
    return None


def import_page(
    archive: zipfile.ZipFile,
    entry_name: str,
    spec: PageSpec,
    all_entries: dict[str, str],
    page_targets: dict[str, str],
) -> None:
    markdown = archive.read(entry_name).decode("utf-8-sig")
    base = str(PurePosixPath(entry_name).parent)

    def rewrite(match: re.Match[str]) -> str:
        label, raw_target = match.groups()
        raw_target = raw_target.strip("<>")
        replacement = replace_known_link(raw_target)
        if replacement:
            return f"{label}({replacement})"
        if re.match(r"^(https?://|mailto:|#)", raw_target):
            return match.group(0)

        target_without_fragment = raw_target.split("#", 1)[0]
        decoded_target = urllib.parse.unquote(target_without_fragment)
        resolved = normalize_entry_path(f"{base}/{decoded_target}")
        actual_entry = all_entries.get(resolved.casefold())
        if not actual_entry:
            return match.group(0)

        page_slug = page_targets.get(normalize_entry_path(actual_entry).casefold())
        if page_slug:
            return f"{label}(../{page_slug}/)"

        data = archive.read(actual_entry)
        suffix = Path(actual_entry).suffix.lower()
        web_url, destination = media_url_for(data, suffix)
        if suffix in {".mp4", ".webm", ".mov"} and len(data) > GITHUB_FILE_LIMIT:
            return (
                '!!! warning "영상 링크 준비 중"\n'
                "    이 단계의 원본 영상은 GitHub 파일 크기 제한을 초과하여 "
                "현재 배포본에서 제외되었습니다. YouTube 영상으로 교체될 예정입니다."
            )
        if not destination.exists():
            destination.write_bytes(data)

        if suffix in {".mp4", ".webm", ".mov"}:
            return (
                f'<video controls preload="metadata" src="{web_url}">'
                "이 브라우저는 동영상 재생을 지원하지 않습니다."
                "</video>"
            )
        return f"{label}({web_url})"

    markdown = LINK_RE.sub(rewrite, markdown)
    markdown = clean_markdown(markdown, spec)
    destination_dir = CONTENT_ROOT / spec.language
    destination_dir.mkdir(parents=True, exist_ok=True)
    (destination_dir / f"{spec.slug}.md").write_text(markdown, encoding="utf-8")


def find_source(markdown_entries: list[str], spec: PageSpec) -> str:
    folder_marker = f"/{spec.source_folder}/".casefold()
    candidates = [
        name
        for name in markdown_entries
        if folder_marker in urllib.parse.unquote(name).casefold()
        and spec.source_hint.casefold() in urllib.parse.unquote(name).casefold()
    ]
    if len(candidates) != 1:
        raise RuntimeError(
            f"Expected one source for {spec.language}/{spec.slug}, "
            f"found {len(candidates)}"
        )
    return candidates[0]


def main() -> None:
    archive_path = SOURCE_DIR / ARCHIVE_NAME
    if not archive_path.exists():
        raise SystemExit(f"Notion export ZIP is missing: {archive_path}")

    MEDIA_DIR.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(archive_path) as archive:
        all_entries = {
            normalize_entry_path(name).casefold(): name
            for name in archive.namelist()
            if not name.endswith("/")
        }
        markdown_entries = [
            name for name in archive.namelist() if name.lower().endswith(".md")
        ]
        sources = {spec: find_source(markdown_entries, spec) for spec in PAGES}
        page_targets = {
            normalize_entry_path(entry_name).casefold(): spec.slug
            for spec, entry_name in sources.items()
        }

        for spec, entry_name in sources.items():
            import_page(archive, entry_name, spec, all_entries, page_targets)

    print(
        f"Imported {len(PAGES)} localized pages and "
        f"{len(list(MEDIA_DIR.iterdir()))} total media files."
    )


if __name__ == "__main__":
    main()