# きせった (Kisetter) Guide

Eden Labs의 **きせった (Kisetter) 최신 버전 공식 가이드 사이트**입니다. 한국어 문서를 기준으로 구성하며, 일본어와 영어 경로는 번역이 준비될 때까지 한국어 문서를 표시합니다.

## 주요 기능

- 제품 소개와 빠른 시작을 제공하는 반응형 홈페이지
- 왼쪽 문서 내비게이션과 오른쪽 페이지 목차
- 전체 문서 검색 (`Ctrl/Cmd + K`)
- 라이트/다크 테마
- 이미지 확대와 코드 복사
- 브라우저 언어 감지 및 한국어·일본어·영어 경로
- GitHub Pages 정적 배포

## 로컬 실행

Node.js 22 이상과 pnpm 11을 사용합니다.

```bash
pnpm install
pnpm dev
```

홈의 **Mesh 편집 가이드**는 **Mesh Studio 가이드**로 연결됩니다. 한국어 미리보기 주소는 `http://localhost:3000/ko/docs/mesh-editing/`이며, `/ja/`와 `/en/`에서도 같은 문서를 확인할 수 있습니다. 개발 모드와 배포용 빌드 모두 홈·문서 메뉴·검색에서 접근할 수 있습니다. 이전 `manual-fitting` 문서는 비활성 상태로 보관합니다.

Windows에서 기본 개발 서버의 문서 경로가 404를 반환하면, 서버를 종료한 뒤 아래 명령으로 Webpack 개발 서버를 실행합니다. 이 PC에서만 접속할 수 있습니다.

```bash
node node_modules/next/dist/bin/next dev --webpack --hostname 127.0.0.1 --port 3000
```

정적 배포 결과는 다음 명령으로 `out/` 폴더에 생성됩니다.

```bash
pnpm build
```

## 문서 수정

한국어 문서는 `content/ko/*.md`에 있습니다. 각 파일의 frontmatter에는 다음 값을 사용합니다.

```yaml
---
title: "문서 제목"
slug: "url-slug"
category: "카테고리"
description: "문서 설명"
order: 10
# 하위 문서인 경우 상위 문서의 slug를 지정합니다.
# parent: "mesh-editing"
---
```

### Mesh Studio 가이드 원고

[Notion 편집 원고](https://app.notion.com/p/3e3350ff24be8064b9eeeedcbaa23367)를 읽어 `content/ko/mesh-editing.md`, `content/ja/mesh-editing.md`, `content/en/mesh-editing.md`에 반영합니다. 원본 Notion 페이지는 수정하지 않습니다. 페이지 상단의 편집 안내 상자와 집필용 개요는 사이트 본문에서 제외하며, UI 명칭은 Kisetter의 `Language_MeshEditor` 및 `Language_Kisetter` 언어 파일과 실제 사용 키를 기준으로 맞춥니다.

원고의 이미지 25개와 동영상 6개는 사용자가 제공한 `MeshStudio Guide.zip`에서 `public/media/mesh-studio/`로 가져왔습니다. 각 언어 문서는 동일한 미디어를 공유합니다. 문서별 frontmatter의 선택 항목 `version`으로 설명 기준 버전을 지정할 수 있으며, Mesh Studio 원고는 확인한 Unity UI의 `3.4.1`을 사용합니다. 지정하지 않은 문서는 기존 공통 버전을 표시합니다.

공통 준비·설정·저장은 `mesh-editing.md`에, 정점 편집·복원·뚫림 해소·밀착·릴랙스·Shrink의 상세 설명은 `mesh-editing-*.md` 하위 문서에 둡니다. 하위 문서는 `parent: "mesh-editing"`으로 왼쪽 메뉴에 묶이며, 상단에서 메인 가이드로 돌아갈 수 있습니다. 세 언어의 메인 문서와 하위 문서는 모두 정적 배포에 포함됩니다. 문서 이미지·영상의 크기는 화면 폭에 맞추되 원본 가로세로 비율을 유지합니다.

Notion 접근 시에는 `회사 업무 정리용 페이지` → `Kisetter 업무 문서` → `Mesh Studio 가이드 문서`의 실제 하위 페이지 관계를 다시 확인합니다. 이미지와 동영상도 원고에 포함되며, 사이트 반영 시 기존 미디어는 공유 base-path 설정을 사용하고 새 첨부 파일은 정적 미디어로 저장합니다. 배포는 사용 중인 호스팅의 기존 빌드·배포 절차로 진행하며, Mesh Studio 가이드용 추가 환경변수는 필요하지 않습니다.

미디어 파일은 `public/media/`, 브랜드 이미지는 `public/assets/brand/`에 보관합니다. GitHub의 일반 저장소 단일 파일 제한을 고려해 미디어 파일 하나가 100MB를 넘지 않도록 합니다.

한·영·일 통합 Notion 내보내기 ZIP을 다시 반영하려면 `きせった (Kisetter) Guide.zip` 파일을 `work/source/`에 두고 아래 명령을 실행합니다. `work/`는 Git에 포함되지 않습니다.

```bash
pnpm import:content
```

ZIP 안의 `한국어`, `日本語`, `English` 문서는 각각 `content/ko/`, `content/ja/`, `content/en/`에 반영됩니다. 번역본에 없는 보조 문서는 한국어 원문을 대신 표시합니다.

100MB를 넘는 영상은 가져오기 과정에서 제외되며 문서에 YouTube 교체 안내가 표시됩니다.

## 다국어 구조

지원 경로는 `/ko/`, `/ja/`, `/en/`입니다. 현재 `content/ja/` 또는 `content/en/`에 Markdown 문서가 없으면 한국어 원문을 자동으로 사용합니다. 번역본을 추가할 때는 한국어 문서와 동일한 `slug`와 파일 구성을 유지하세요.

첫 방문 시 브라우저 언어가 한국어면 `/ko/`, 일본어면 `/ja/`, 그 외 또는 감지 실패 시 `/en/`으로 이동합니다.

## GitHub Pages 배포

`main` 브랜치에 Push하면 `.github/workflows/deploy.yml`이 정적 사이트를 빌드해 GitHub Pages에 배포합니다.

저장소의 **Settings → Pages → Build and deployment → Source**를 **GitHub Actions**로 한 번 설정해야 합니다.

예상 주소:

<https://edenfromseoul.github.io/AutoMorpher_Guide/>

방문자는 정적 페이지를 읽기만 할 수 있으며, 문서 수정은 GitHub 저장소의 소스 변경과 배포를 통해서만 가능합니다.

## 외부 링크

- [Booth](https://edenlabs.booth.pm/items/7721082)
- [Discord](https://discord.com/invite/JFzDGrN2bF) — 문의는 Help 채널
- [Eden Labs X](https://x.com/EDEN_LABS_JP)
