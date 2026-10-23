---
title: "Texture Studio 가이드"
slug: "texture-studio"
category: "사용 가이드"
description: "원하는 영역을 선택해 자유롭게 색상을 편집하고 저장하는 방법을 안내합니다."
order: 45
version: "3.5.0"
---

<div class="guide-intro">
  <p>⚫ <strong>Texture Studio</strong>는 Unity에서 Mesh의 Texture 색상을 조정하고 Scene에서 결과를 확인하는 도구입니다.</p>
  <p>⚫ 편집할 Mesh와 UV 영역을 선택한 뒤 필요한 색상 편집 기능을 사용하고, 결과를 확인한 뒤 저장합니다.</p>
</div>

| 기능 | 할 수 있는 작업                                                 |
| --- |-----------------------------------------------------------|
| Mesh와 UV 선택 | Mesh 전체의 색을 바꾸거나 원하는 부분만 선택하여 색을 조정할 수 있습니다.              |
| [색조 지정 / 색조 이동](../texture-studio-color-adjustment/) | 의상이나 헤어를 원하는 색으로 바꾸고, 기존 색을 기준으로 더 밝거나 선명한 색감을 만들 수 있습니다. |
| [그라데이션](../texture-studio-gradient/) | 여러 색이 부드럽게 이어지는 효과를 만들 수 있습니다.                            |
| [색상 자동 조정](../texture-studio-auto-color/) | 서로 다른 파츠의 색감을 하나로 맞춰 통일감을 줄 수 있습니다.                       |
| 미리보기 / 편집 이력 | 수정 전후의 차이를 확인하고, 필요하면 이전 상태로 되돌릴 수 있습니다.                  |
| 저장 | 완성한 색상을 Texture와 Material로 저장해 아바타에 사용할 수 있습니다.           |

## [1] 편집 준비

1. <strong>きせった(Kisetter)</strong> 창 상단에서 <strong>Texture Studio (Early Access)</strong>를 엽니다.
2. <strong>편집 대상 Mesh</strong>에 의상·헤어 오브젝트 또는 부모 오브젝트를 지정하고 <strong>불러오기</strong>를 누릅니다. 가운데 드래그 영역에 Hierarchy의 Mesh를 직접 넣어도 됩니다.
3. 목록에서 <strong>Mesh 이름</strong>을 눌러 주 편집 대상을 선택합니다. 해당 행에 <strong>편집 중</strong>이 표시됩니다.
4. 오른쪽 <strong>Texture UV</strong>에서 편집할 Texture 탭을 선택합니다. 하나의 Texture를 여러 Material 슬롯이 공유하면 슬롯 이름이 함께 표시됩니다.

<img src="{{BASE_PATH}}/media/texture-studio/outfit-meshes.webp" alt="의상 Mesh를 선택한 Scene과 Texture Studio 화면" width="1905" height="1065" loading="lazy" />

## [2] 여러 Mesh와 UV 영역 선택

### 여러 헤어 Mesh 함께 조정하기

1. 함께 조정할 헤어 Mesh 중 하나의 이름을 눌러 주 편집 대상으로 지정합니다.
2. 나머지 헤어 Mesh의 <strong>추가</strong>를 누릅니다.
3. 추가한 행에 <strong>함께 조정</strong>이 표시되고, 오른쪽 제목에 추가한 Mesh 수가 표시되는지 확인합니다.

<img src="{{BASE_PATH}}/media/texture-studio/hair-setup-closeup.webp" alt="주 편집 Mesh와 나머지 헤어 Mesh가 함께 조정에 포함된 목록" width="1905" height="1065" loading="lazy" />

주 편집 Mesh를 바꾸면 <strong>함께 조정</strong> 대상이 해제되므로, 주 편집 대상을 먼저 정해 주세요.

<strong>On/Off의 눈 아이콘</strong>은 Mesh 오브젝트를 켜거나 끕니다. 

편집 대상은 Mesh 이름과 <strong>함께 조정</strong> 열에서 선택합니다.

### UV 선택 방법

UV는 Texture 위에 펼쳐진 Mesh의 연결된 조각입니다.

색상 조정은 선택한 UV 영역에 적용됩니다.

| 조작 | 동작 |
| --- | --- |
| Island 클릭 | 해당 조각을 선택하거나 해제합니다. |
| UV 위에서 드래그 | 박스 안의 영역을 선택합니다. |
| Shift / Ctrl을 누른 채 선택 | 선택에 추가 / 선택에서 제외합니다. |
| <strong>전체 선택</strong> | 편집 대상 Mesh와 Texture 슬롯 전체의 UV 영역을 선택합니다. |
| <strong>전체 해제</strong> | 편집 대상 Mesh와 Texture 슬롯 전체의 UV 선택을 해제합니다. |
| <strong>UV 표시</strong> | Texture 위의 UV 선을 표시합니다. |
| <strong>Mesh에 UV 시각화</strong> | Scene의 Mesh 위에 UV 선을 표시합니다. |

### 파츠별 선택과 색상 조정

하나의 Mesh 안에서도 UV 영역을 나누어 파츠마다 다른 색을 적용할 수 있습니다.

아래 예시는 앞머리를 파츠별로 조정한 예시입니다.

1. 앞머리 Mesh만 편집 대상으로 두고 <strong>전체 해제</strong>를 누릅니다.
2. 오른쪽 Texture UV에서 원하는 파츠의 Island를 선택합니다. <strong>Mesh에 UV 시각화</strong>를 켜면 Scene의 노란 선으로 선택 범위를 확인할 수 있습니다.
   - 혹은 Scene에서 원하는 파츠를 직접 마우스로 클릭하여 선택할 수도 있습니다.
3. <strong>색조 지정</strong>에서 색을 정합니다. 결과를 볼 때는 <strong>Mesh에 UV 시각화</strong>를 꺼 색상이 잘 보이게 합니다.
4. 다음 파츠로 넘어갈 때 <strong>전체 해제</strong>를 누르고 새 영역을 선택합니다. 이전에 적용한 색은 유지되며, 새로 선택한 영역을 따로 조정할 수 있습니다.

<div class="doc-media-grid doc-media-grid-2">
  <figure><figcaption>① 중앙 앞머리 · UV 선택</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-parts-center-selection-closeup.webp" alt="① 중앙 앞머리 · UV 선택" width="1905" height="1065" loading="lazy" /></figure>
  <figure><figcaption>① 중앙 앞머리 · 붉은색 적용</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-parts-center-color-closeup.webp" alt="① 중앙 앞머리 · 붉은색 적용" width="1905" height="1065" loading="lazy" /></figure>
</div>

<div class="doc-media-grid doc-media-grid-2">
  <figure><figcaption>② 양옆 앞머리 · UV 선택</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-parts-sides-selection-closeup.webp" alt="② 양옆 앞머리 · UV 선택" width="1905" height="1065" loading="lazy" /></figure>
  <figure><figcaption>② 양옆 앞머리 · 초록색 추가</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-parts-sides-color-closeup.webp" alt="② 양옆 앞머리 · 초록색 추가" width="1905" height="1065" loading="lazy" /></figure>
</div>

<div class="doc-media-grid doc-media-grid-2">
  <figure><figcaption>③ 짧게 휘어진 머리카락 · UV 선택</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-parts-strand-selection-closeup.webp" alt="③ 짧게 휘어진 머리카락 · UV 선택" width="1905" height="1065" loading="lazy" /></figure>
  <figure><figcaption>③ 짧게 휘어진 머리카락 · 금색 추가</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-parts-strand-color-closeup.webp" alt="③ 짧게 휘어진 머리카락 · 금색 추가" width="1905" height="1065" loading="lazy" /></figure>
</div>

### 예시: 눈동자만 조정하기

1. 눈동자가 포함된 Mesh를 주 편집 대상으로 선택합니다.
2. 눈동자가 있는 Texture 탭을 열고 <strong>전체 해제</strong>를 누릅니다.
3. 아래 예시처럼 양쪽 눈동자의 UV Island를 각각 클릭합니다. 선택한 두 영역만 노란 UV 선으로 표시되는지 확인합니다.
4. 색상을 조정하면 피부와 속눈썹을 유지하면서 눈동자만 바꿀 수 있습니다.

<img src="{{BASE_PATH}}/media/texture-studio/eyes-uv-selection.webp" alt="얼굴 Texture에서 양쪽 눈동자 UV만 선택한 화면" width="1905" height="1065" loading="lazy" />

<img src="{{BASE_PATH}}/media/texture-studio/eyes-color.webp" alt="눈동자 UV에 청록색을 적용한 결과와 변경되지 않은 얼굴 피부" width="1905" height="1065" loading="lazy" />

피부도 같은 방법으로 <strong>얼굴 피부 Island</strong>를 선택합니다. 아래는 색상 변경 전의 선택 화면입니다. 몸 피부가 별도 Mesh나 Texture에 있다면 해당 영역도 따로 조정합니다.

<img src="{{BASE_PATH}}/media/texture-studio/skin-uv-selection.webp" alt="얼굴 피부 UV만 선택하고 색조 이동을 연 화면" width="1905" height="1065" loading="lazy" />

## [3] 색상과 톤 조정

원하는 색을 지정하거나 기존 색조를 이동하고, 진하기·밝기·대비·감마를 조정합니다. 

아래는 의상을 베이지색에서 청록색으로 바꾼 예시입니다.

<div class="doc-media-grid doc-media-grid-2">
  <figure><figcaption>수정 전 · 베이지색 의상</figcaption><img src="{{BASE_PATH}}/media/texture-studio/outfit-before.webp" alt="수정 전 · 베이지색 의상" width="1905" height="1065" loading="lazy" /></figure>
  <figure><figcaption>수정 후 · 청록색 의상</figcaption><img src="{{BASE_PATH}}/media/texture-studio/outfit-color.webp" alt="수정 후 · 청록색 의상" width="1905" height="1065" loading="lazy" /></figure>
</div>

[사용 방법과 의상·헤어 예시 보기 →](../texture-studio-color-adjustment/)

## [4] 그라데이션 만들기

UV 위에 그린 선의 방향과 길이에 따라 그라데이션을 적용합니다.

아래는 헤어에 흰색·노랑·분홍 그라데이션을 적용한 예시입니다.

<div class="doc-media-grid doc-media-grid-2">
  <figure><figcaption>수정 전 · 밝은 분홍색 헤어</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-before.webp" alt="수정 전 · 밝은 분홍색 헤어" width="1905" height="1065" loading="lazy" /></figure>
  <figure><figcaption>수정 후 · 흰색·노랑·분홍 그라데이션</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-gradient.webp" alt="수정 후 · 흰색·노랑·분홍 그라데이션" width="1905" height="1065" loading="lazy" /></figure>
</div>

[사용 방법과 의상·헤어 예시 보기 →](../texture-studio-gradient/)

## [5] 색상 자동 조정

다른 Mesh에서 고른 참조 색상에 맞춰 선택 영역을 자동으로 조정합니다. 

아래는 소매를 참조해 의상 Texture를 밝게 맞춘 예시입니다.

<div class="doc-media-grid doc-media-grid-2">
  <figure><figcaption>수정 전 · 베이지색 의상</figcaption><img src="{{BASE_PATH}}/media/texture-studio/outfit-before.webp" alt="수정 전 · 베이지색 의상" width="1905" height="1065" loading="lazy" /></figure>
  <figure><figcaption>수정 후 · 소매 색상을 참조해 자동 조정</figcaption><img src="{{BASE_PATH}}/media/texture-studio/outfit-auto.webp" alt="수정 후 · 소매 색상을 참조해 자동 조정" width="1905" height="1065" loading="lazy" /></figure>
</div>

[사용 방법과 의상·헤어 예시 보기 →](../texture-studio-auto-color/)

## [6] 결과 확인과 되돌리기

### 원본과 비교하기

<strong>편집 결과 미리보기</strong>를 끄면 등록된 Mesh의 원래 상태를 표시합니다. 편집 내용은 유지되며 다시 켜면 결과로 돌아옵니다.

<img src="{{BASE_PATH}}/media/texture-studio/preview-original-closeup.webp" alt="편집값을 유지하면서 미리보기를 꺼 원래 헤어를 표시한 화면" width="1905" height="1065" loading="lazy" />


### 실행 취소와 원래대로 되돌리기

| 항목 | 동작 |
| --- | --- |
| <strong>실행 취소</strong> / Ctrl+Z | 최근 편집을 한 단계 되돌립니다. |
| <strong>다시 실행</strong> / Ctrl+Y | 취소한 편집을 다시 적용합니다. |
| <strong>최대 되돌리기 횟수</strong> | 보관할 이력 수를 설정합니다. 기본 30, 범위 1~100입니다. |
| Mesh 행의 <strong>되돌리기</strong> | 해당 Mesh의 모든 Texture 슬롯에 해당하는 UV 영역을 원래대로 돌립니다. |
| <strong>전체 되돌리기</strong> | 전체 편집 내용을 원래 상태로 돌립니다. |

같은 Texture에서 다른 Mesh와 UV가 겹치는 부분은 함께 영향을 받을 수 있으므로 되돌린 뒤 Scene을 확인합니다.

## [7] Texture와 Material 저장

1. <strong>저장</strong> 영역을 펼칩니다.
2. <strong>Material 저장 방식</strong>을 선택합니다.
3. <strong>저장 위치</strong>와 <strong>저장할 접미사</strong>를 정합니다.
4. <strong>저장하기</strong>를 누릅니다. 편집한 Texture는 PNG로 저장되며 선택한 방식으로 Material에 연결됩니다.
5. 저장 후 안내에 따라 편집을 계속하거나 종료합니다.

<img src="{{BASE_PATH}}/media/texture-studio/save-options.webp" alt="새 Material 생성, 기존 Material 적용, 저장 폴더와 접미사 설정" width="940" height="235" loading="lazy" />

| 설정 | 사용 방법 |
| --- | --- |
| <strong>새 Material 생성</strong> | 새 Material을 만들어 편집한 Mesh에 적용합니다. 색상 변형본을 만들 때 사용합니다. |
| <strong>기존 Material에 적용</strong> | 기존 Material을 갱신합니다. 같은 Material을 사용하는 다른 오브젝트에도 영향을 줄 수 있습니다. |
| <strong>원본과 같은 폴더</strong> | 원본 Asset과 같은 폴더에 저장합니다. |
| <strong>폴더 지정</strong> | 프로젝트의 `Assets` 아래 저장 폴더를 선택합니다. |

저장한 결과가 다음 편집의 기준이 되며, 이전 편집 이력은 지워집니다.
