---
title: "색상과 톤 조정"
slug: "texture-studio-color-adjustment"
category: "사용 가이드"
description: "색조 지정·색조 이동과 진하기·밝기·대비·감마로 의상과 헤어의 색상을 조정합니다."
order: 46
version: "3.5.0"
parent: "texture-studio"
---

Mesh·UV 선택과 미리보기·저장 방법은 [Texture Studio 가이드](../texture-studio/)에서 확인할 수 있습니다.

## [1] 원하는 색 지정하기

1. Mesh와 편집할 UV 영역을 선택합니다.
2. <strong>색조 지정</strong>을 선택합니다.
3. 색상 팔레트에서 색을 고르거나 <strong>HEX</strong>에 색상 코드를 입력하고 Enter를 누릅니다. 
   1. <strong>최근 사용 색상</strong>을 다시 선택할 수도 있습니다.
4. Scene에서 결과를 보며 톤을 조정합니다. 예시의 지정 색상은 `#57AAB8`입니다.

<strong>의상 예시</strong>

<div class="doc-media-grid doc-media-grid-2">
  <figure><figcaption>변경 전</figcaption><img src="{{BASE_PATH}}/media/texture-studio/outfit-before.webp" alt="색상 변경 전의 베이지 의상" width="1905" height="1065" loading="lazy" /></figure>
  <figure><figcaption>색조 지정 후</figcaption><img src="{{BASE_PATH}}/media/texture-studio/outfit-color.webp" alt="청록색으로 바꾼 의상과 색조 지정 UI" width="1905" height="1065" loading="lazy" /></figure>
</div>

<strong>헤어 예시 — 여러 Mesh 함께 조정</strong>

<div class="doc-media-grid doc-media-grid-2">
  <figure><figcaption>변경 전</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-before-closeup.webp" alt="색상 변경 전의 밝은 분홍색 헤어" width="1905" height="1065" loading="lazy" /></figure>
  <figure><figcaption>색조 지정 후</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-color-closeup.webp" alt="앞머리와 옆머리, 트윈테일을 청록색으로 함께 바꾼 화면" width="1905" height="1065" loading="lazy" /></figure>
</div>

### Texture 보기와 Material 미리 보기
- <strong>Texture 보기</strong>: Material 보정 전의 Texture 색상을 표시합니다.
- <strong>Material 미리 보기</strong>: 지원하는 lilToon Main Texture의 색상 보정을 반영해 팔레트와 UV 화면을 표시합니다. Scene의 조명·그림자·반사·발광·투명도는 반영하지 않습니다.
- <strong>Texture HEX / 보정 HEX</strong>: 선택한 기준점의 보정 전·후 색상 코드를 표시합니다.
- <strong>Texture에서 기준점 다시 선택</strong>: 팔레트 표시의 기준 UV를 바꿉니다. 편집할 UV 선택 영역은 바뀌지 않습니다.

<img src="{{BASE_PATH}}/media/texture-studio/material-preview.webp" alt="Material 미리 보기의 Texture HEX, 보정 HEX와 기준 UV 설정" width="399" height="665" loading="lazy" />


## [2] 기존 색조와 명암 보정하기

<strong>색조 이동</strong> 탭에서 슬라이더나 오른쪽 숫자 칸으로 값을 조정합니다. `0`은 보정하지 않은 상태입니다.

아래 예시는 각 항목별로 조정한 결과입니다.

| 항목 | 값을 내리면 | 값을 올리면 |
| --- | --- | --- |
| <strong>색조 이동 (°)</strong> | 색상환의 반대 방향으로 이동 | 색상환을 따라 색조 이동 |
| <strong>진하기</strong> | 채도가 낮아져 무채색에 가까워짐 | 기존 색이 더 선명해짐 |
| <strong>밝기</strong> | 전체적으로 어두워짐 | 전체적으로 밝아짐 |
| <strong>대비</strong> | 명암 차이가 줄어 부드러워짐 | 명암 차이가 커져 또렷해짐 |
| <strong>감마</strong> | 중간 톤이 밝아짐 | 중간 톤이 어두워짐 |

### 색조 이동 (°)

색상환을 따라 색조를 바꿉니다. 예시에서는 `+120°`로 설정해 연한 분홍색 헤어를 민트색으로 바꿨습니다.

<div class="doc-media-grid doc-media-grid-2">
  <figure><figcaption>변경 전 · 모든 값 0</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-shift-baseline-closeup.webp" alt="네 조절값과 색조 이동이 모두 0인 원본 분홍색 헤어" width="1905" height="1065" loading="lazy" /></figure>
  <figure><figcaption>색조 이동 +120°</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-hue-shift-closeup.webp" alt="색조 이동 +120° — 여러 헤어 Mesh 함께 조정" width="1905" height="1065" loading="lazy" /></figure>
</div>

### 진하기

색의 채도를 조정합니다. 예시에서는 `+70`으로 올려 분홍색을 더 선명하게 만들었습니다.

<div class="doc-media-grid doc-media-grid-2">
  <figure><figcaption>변경 전 · 모든 값 0</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-shift-baseline-closeup.webp" alt="네 조절값과 색조 이동이 모두 0인 원본 분홍색 헤어" width="1905" height="1065" loading="lazy" /></figure>
  <figure><figcaption>진하기 +70</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-intensity-closeup.webp" alt="진하기 +70 — 여러 헤어 Mesh 함께 조정" width="1905" height="1065" loading="lazy" /></figure>
</div>

### 밝기

선택 영역 전체를 밝게 또는 어둡게 만듭니다. 예시에서는 `-25`로 내려 밝은 부분과 그림자를 함께 어둡게 했습니다.

<div class="doc-media-grid doc-media-grid-2">
  <figure><figcaption>변경 전 · 모든 값 0</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-shift-baseline-closeup.webp" alt="네 조절값과 색조 이동이 모두 0인 원본 분홍색 헤어" width="1905" height="1065" loading="lazy" /></figure>
  <figure><figcaption>밝기 −25</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-brightness-closeup.webp" alt="밝기 −25 — 여러 헤어 Mesh 함께 조정" width="1905" height="1065" loading="lazy" /></figure>
</div>

### 대비

밝은 부분과 어두운 부분의 차이를 조정합니다. 예시에서는 `+60`으로 올려 머리카락의 명암 차이를 강조했습니다.

<div class="doc-media-grid doc-media-grid-2">
  <figure><figcaption>변경 전 · 모든 값 0</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-shift-baseline-closeup.webp" alt="네 조절값과 색조 이동이 모두 0인 원본 분홍색 헤어" width="1905" height="1065" loading="lazy" /></figure>
  <figure><figcaption>대비 +60</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-contrast-closeup.webp" alt="대비 +60 — 여러 헤어 Mesh 함께 조정" width="1905" height="1065" loading="lazy" /></figure>
</div>

### 감마

중간 톤의 밝기를 조정합니다. 양수는 어둡게, 음수는 밝게 만듭니다. 예시는 `+60`을 적용한 결과입니다.

<div class="doc-media-grid doc-media-grid-2">
  <figure><figcaption>변경 전 · 모든 값 0</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-shift-baseline-closeup.webp" alt="네 조절값과 색조 이동이 모두 0인 원본 분홍색 헤어" width="1905" height="1065" loading="lazy" /></figure>
  <figure><figcaption>감마 +60</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-gamma-closeup.webp" alt="감마 +60 — 여러 헤어 Mesh 함께 조정" width="1905" height="1065" loading="lazy" /></figure>
</div>
