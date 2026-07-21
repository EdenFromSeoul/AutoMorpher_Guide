# Auto Morpher Guide

Eden Labs의 **Auto Morpher 3.0.7 공식 가이드 사이트**입니다. 한국어 문서를 기준으로 구성하며, 일본어와 영어 경로는 번역이 준비될 때까지 한국어 문서를 표시합니다.

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
---
```

미디어 파일은 `public/media/`, 브랜드 이미지는 `public/assets/brand/`에 보관합니다. GitHub의 일반 저장소 단일 파일 제한을 고려해 미디어 파일 하나가 100MB를 넘지 않도록 합니다.

Notion 내보내기 ZIP을 다시 반영하려면 ZIP 파일을 `work/source/`에 두고 아래 명령을 실행합니다. `work/`는 Git에 포함되지 않습니다.

```bash
pnpm import:content
```

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
