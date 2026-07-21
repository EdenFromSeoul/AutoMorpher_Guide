from __future__ import annotations

import hashlib
import re
import shutil
import urllib.parse
import zipfile
from dataclasses import dataclass
from pathlib import Path, PurePosixPath


ROOT = Path(__file__).resolve().parents[1]
SOURCE_DIR = ROOT / "work" / "source"
CONTENT_DIR = ROOT / "content" / "ko"
MEDIA_DIR = ROOT / "public" / "media"
GITHUB_FILE_LIMIT = 100_000_000


@dataclass(frozen=True)
class PageSpec:
    title: str
    slug: str
    category: str
    description: str
    order: int
    source_hint: str


PAGES = [
    PageSpec(
        "Auto Fitting Mode",
        "auto-fitting",
        "사용 가이드",
        "의상을 대상 아바타에 맞게 자동 변형하는 전체 작업 흐름입니다.",
        20,
        "Auto Fitting Mode",
    ),
    PageSpec(
        "Manual Fitting Mode",
        "manual-fitting",
        "사용 가이드",
        "자동 변형과 본 수동 조정을 함께 사용하는 작업 흐름입니다.",
        30,
        "Manual Fitting Mode",
    ),
    PageSpec(
        "BlendShape 생성",
        "blendshape-generator",
        "기능 설명",
        "아바타의 BlendShape를 의상 Mesh에 생성하는 방법입니다.",
        40,
        "BlendShape 생성",
    ),
    PageSpec(
        "BlendShape Controller",
        "blendshape-controller",
        "기능 설명",
        "여러 Mesh의 BlendShape를 한곳에서 확인하고 조정합니다.",
        50,
        "BlendShape Controller",
    ),
    PageSpec(
        "Profile 생성 및 추가",
        "profiles",
        "기능 설명",
        "의상 대응 정보를 Profile로 생성하고 설치하는 방법입니다.",
        60,
        "Profile 생성 및 추가 방법",
    ),
    PageSpec(
        "파라미터 설명",
        "parameters",
        "참조",
        "기본 옵션과 고급 Fitting·Weighting 옵션을 설명합니다.",
        70,
        "파라미터 설명",
    ),
    PageSpec(
        "변형 품질을 높이는 팁",
        "quality-tips",
        "문제 해결",
        "가슴·발·신발·모자·장갑 등 변형 품질을 개선하는 방법입니다.",
        80,
        "변형 품질을 높이는 팁",
    ),
    PageSpec(
        "Q&A 및 오류 해결",
        "faq",
        "문제 해결",
        "사용 조건, 자주 묻는 질문과 대표적인 오류 해결 방법을 모았습니다.",
        90,
        "한국어 Q&A",
    ),
]


LINK_RE = re.compile(r"(!?\[[^\]]*\])\(([^)]+)\)")
HEADING_ID_RE = re.compile(r"\s*\{#[^}]+\}\s*$")


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
    if lines and lines[0].lstrip("# ").strip() in {
        "Auto Fitting Mode",
        "Manual Fitting Mode",
        "BlendShape 생성",
        "BlendShape Controller",
        "Profile 생성 및 추가 방법",
        "파라미터 설명",
        "변형 품질을 높이는 팁",
        "한국어 Q&A",
    }:
        lines = lines[1:]

    cleaned: list[str] = []
    for line in lines:
        if line.startswith("# "):
            line = "#" + line
        if re.match(r"^#\s+[—―─-]{8,}\s*$", line):
            cleaned.append("---")
            continue
        line = HEADING_ID_RE.sub("", line)
        line = line.replace("Eden AutoMorpher", "Auto Morpher")
        line = line.replace("Eden Auto Morpher", "Auto Morpher")
        line = line.replace("AutoMorpher", "Auto Morpher")
        line = line.replace(
            "https://discord.gg/DgquvzGHC8",
            "https://discord.com/invite/JFzDGrN2bF",
        )
        line = line.replace("Auto Morpher - Auto Fitting Mode", "Auto Morpher - Auto Fitting Mode")
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


def replace_known_links(target: str) -> str | None:
    decoded = urllib.parse.unquote(target)
    if "34c1bca8582e8120a636e54b3647dea8" in decoded:
        return "../parameters/"
    if "3511bca8582e80f98d48d477f12756c0" in decoded:
        return "../blendshape-controller/"
    if "3531bca8582e80c49002f7f138415995" in decoded:
        return "../quality-tips/"
    if "discord.gg/DgquvzGHC8" in decoded:
        return "https://discord.com/invite/JFzDGrN2bF"
    return None


def import_page(
    archive: zipfile.ZipFile,
    entry_name: str,
    spec: PageSpec,
    all_entries: dict[str, str],
) -> None:
    markdown = archive.read(entry_name).decode("utf-8-sig")
    base = str(PurePosixPath(entry_name).parent)

    def rewrite(match: re.Match[str]) -> str:
        label, raw_target = match.groups()
        raw_target = raw_target.strip("<>")
        replacement = replace_known_links(raw_target)
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
    (CONTENT_DIR / f"{spec.slug}.md").write_text(markdown, encoding="utf-8")


def main() -> None:
    guide_zip = SOURCE_DIR / "AutoMorpher_Guide_Korean.zip"
    qna_zip = SOURCE_DIR / "AutoMorpher_QnA_Korean.zip"
    if not guide_zip.exists() or not qna_zip.exists():
        raise SystemExit("Notion export ZIP files are missing from work/source.")

    CONTENT_DIR.mkdir(parents=True, exist_ok=True)
    MEDIA_DIR.mkdir(parents=True, exist_ok=True)
    for spec in PAGES:
        path = CONTENT_DIR / f"{spec.slug}.md"
        if path.exists():
            path.unlink()
    for path in MEDIA_DIR.iterdir():
        if path.is_file():
            path.unlink()

    archives = [zipfile.ZipFile(guide_zip), zipfile.ZipFile(qna_zip)]
    try:
        all_markdown: list[tuple[zipfile.ZipFile, str]] = []
        archive_entries: dict[int, dict[str, str]] = {}
        for archive in archives:
            entries = {
                normalize_entry_path(name).casefold(): name
                for name in archive.namelist()
                if not name.endswith("/")
            }
            archive_entries[id(archive)] = entries
            all_markdown.extend(
                (archive, name)
                for name in archive.namelist()
                if name.lower().endswith(".md")
            )

        for spec in PAGES:
            candidates = [
                (archive, name)
                for archive, name in all_markdown
                if spec.source_hint.casefold() in urllib.parse.unquote(name).casefold()
            ]
            if len(candidates) != 1:
                raise RuntimeError(
                    f"Expected one source for {spec.slug}, found {len(candidates)}"
                )
            archive, name = candidates[0]
            import_page(archive, name, spec, archive_entries[id(archive)])
    finally:
        for archive in archives:
            archive.close()

    print(
        f"Imported {len(PAGES)} pages and "
        f"{len(list(MEDIA_DIR.iterdir()))} unique media files."
    )


if __name__ == "__main__":
    main()
