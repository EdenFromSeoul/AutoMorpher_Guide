---
title: "프리셋 사용 가이드"
slug: "presets"
category: "사용 가이드"
description: "아바타 조합에 맞춘 조정값을 프리셋으로 저장하고, 불러오거나 편집해 다시 사용하는 방법입니다."
order: 25
version: "3.4.1"
---

<div class="guide-intro">
  <p><strong>프리셋(Preset)</strong>은 아바타 조합에 맞춘 조정값을 저장해 다시 사용하는 기능입니다.<br>자주 쓰는 설정을 저장하거나, 다른 유저와 설정을 공유해 보세요.</p>
</div>

<aside class="admonition tip">
  <strong>다른 유저의 프리셋을 사용하고, 나만의 프리셋도 공유해 보세요!</strong>
  <p><a href="https://discord.gg/Czuxfw8ng8"><b>디스코드 서버</b></a>의 <b>💾｜preset-share</b> 채널에서 프리셋을 받거나 공유할 수 있습니다.</p>
</aside>

<iframe class="youtube-embed" id="preset-video" src="https://www.youtube-nocookie.com/embed/1y4bThRyBIw" title="프리셋 사용 가이드 영상" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## 1. 사용 전 준비

프리셋을 **직접 만들거나 적용·편집하려면** **원본 아바타**, **입힐 의상**, **입힐 아바타**를 할당합니다. 

  - 원본 아바타 대신 변환 원본 프로필을 사용하는 경우에는 **Profile**을 지정합니다.



## 2. Preset 준비하기

**다른 유저의 Preset을 불러오거나, 직접 Preset을 만들 수 있습니다.**

이미 사용할 Preset이 추가되어있다면 [**3. Preset 적용하기**](#3-preset-적용하기)로 이동하세요.

<span id="2-프리셋-불러오기" class="doc-anchor-alias" data-anchor-target="2-1-preset-불러오기" aria-hidden="true"></span>

<span id="2-프리셋-불러와-사용하기" class="doc-anchor-alias" data-anchor-target="2-1-preset-불러오기" aria-hidden="true"></span>

<span id="2-프리셋-파일-추가하기" class="doc-anchor-alias" data-anchor-target="2-1-preset-불러오기" aria-hidden="true"></span>

### 2-1. Preset 불러오기

<span id="9-프리셋-추가하기" class="doc-anchor-alias" data-anchor-target="preset-download" aria-hidden="true"></span>

<details class="doc-optional-step" id="preset-download">
<summary>다른 유저의 프리셋 다운로드·추가하기</summary>

배포처나 다른 유저에게 **원본 아바타 → 입힐 아바타** 조합에 맞는 프리셋을 받습니다.

[**디스코드 서버**](https://discord.gg/Czuxfw8ng8)에서도 프리셋을 공유할 수 있는 **💾｜preset-share** 채널을 운영하고 있습니다.

1. `.ksPreset` 파일을 준비합니다.

    - `.asset`이나 `.unitypackage`로 받았다면 [**Unity에서 직접 추가하기**](#preset-unity-import)를 확인하세요.

2. **프리셋 파일로 불러오기 / 내보내기**를 펼치고 **불러오기**를 누릅니다.

   ![파일 항목과 불러오기 버튼의 빨간 외곽선]({{BASE_PATH}}/media/presets/file-import-open-figma.webp)

3. 파일 선택창에서 `.ksPreset` 파일 하나를 선택합니다.
4. **불러오기에 성공하였습니다.** 안내에서 **확인**을 누릅니다.

   ![프리셋 파일 불러오기 완료와 확인 버튼]({{BASE_PATH}}/media/presets/file-import-complete-figma.webp)


<h4 id="preset-import-conflict">같은 이름의 Preset이 있는 경우</h4>

**Preset 이름 중복** 창이 나타나면 다음 중 하나를 선택합니다.

![Preset 이름 중복 창의 덮어쓰기와 이름 변경 버튼]({{BASE_PATH}}/media/presets/file-import-conflict-figma.webp)

- **덮어쓰기**: 기존 프리셋을 받은 내용으로 교체합니다.
- **이름 바꿔서 저장하기**: 새 Preset 이름을 입력하고 **저장하기**를 눌러 별도로 추가합니다.

![새 Preset 이름 입력과 저장 버튼]({{BASE_PATH}}/media/presets/file-import-rename-figma.webp)

<button type="button" class="doc-details-close" data-details-close>안내 닫기</button>
</details>

<details class="doc-optional-step" id="preset-unity-import">
<summary>Unity에서 직접 추가하기 (.asset / .unitypackage)</summary>

<div class="preset-file-types">

| 받은 파일 형식 | 추가 방법 |
| --- | --- |
| `.unitypackage` | 사용할 Unity 프로젝트를 연 상태에서 파일을 더블클릭하고 **Import**합니다. |
| `.asset` | `Assets/@Eden_Tools/Kisetter/Presets` 폴더를 열어 여기에 파일을 옮깁니다. |

</div>

**Preset 선택하기** 창이 열려 있다면 **새로고침**을 누릅니다.
  - Assets/@Eden_Tools/Kisetter/Presets 폴더에 정상적으로 파일이 추가되었는지 확인해주세요.

<button type="button" class="doc-details-close" data-details-close>안내 닫기</button>
</details>

<span id="4-새-프리셋-만들기-기존-프리셋-편집하기" class="doc-anchor-alias" data-anchor-target="2-2-preset-직접-만들기" aria-hidden="true"></span>

<span id="4-프리셋-만들기-편집하기" class="doc-anchor-alias" data-anchor-target="2-2-preset-직접-만들기" aria-hidden="true"></span>

### 2-2. Preset 직접 만들기

**직접 조정해서 만들기**와 **직전 변형에 사용한 값으로 만들기** 중 원하는 방법을 선택하세요.

#### 직접 조정해서 만들기

1. Kisetter 창에서 **프리셋 만들기·편집**을 펼치고 **새 프리셋 만들기**를 누릅니다.

   ![새 프리셋 만들기와 불러온 프리셋 편집 버튼 위치]({{BASE_PATH}}/media/presets/create-edit-preset.png)

2. 편집 화면에서 필요한 항목을 조정합니다.

   | 탭 | 조정할 내용 |
   | --- | --- |
   | **BlendShape** | **Source Avatar** 또는 **Target Avatar**를 선택해 몸통 Mesh의 BlendShape 값을 조정합니다. |
   | **매칭 조정** | 본과 가슴 대응 위치를 조정합니다. |
   | **옵션 조정** | 키셋타의 기본·고급 변형 옵션(신체 표면 간격, 스무딩 등)을 조정합니다. |

   <details class="doc-optional-step">
   <summary>아바타 보기 및 표시 설정</summary>

   ![아바타 보기와 간격, 불투명도 및 의상 표시 설정 화면]({{BASE_PATH}}/media/presets/avatar-view-settings.png)

   **아바타 보기**: 나란히 보기는 두 아바타를 좌우로 배치하고, 겹쳐 보기는 겹쳐 표시하여 체형 차이를 비교합니다.

   **아바타 간격**: 나란히 보기에서 두 아바타 사이의 간격을 조절합니다.

   **Source 불투명도**: 원본 아바타의 불투명도를 조절합니다.

   **Target 불투명도**: 입힐 아바타의 불투명도를 조절합니다.

   **작업 대상만 보기**: 작업과 관계없는 Scene 오브젝트를 잠시 숨깁니다.

   **Source 의상 표시**: 원본 아바타 쪽 의상의 표시 여부를 변경합니다. 나란히 보기에서 사용할 수 있습니다.

   **Target 의상 표시**: 입힐 아바타 쪽 의상의 표시 여부를 변경합니다.

   <button type="button" class="doc-details-close" data-details-close>아바타 보기 설명 닫기</button>
   </details>

   <details class="doc-optional-step">
   <summary>체형 차이 보정 및 미리보기</summary>

   ![체형 차이 보정과 미리보기 및 갱신 버튼 설정 화면]({{BASE_PATH}}/media/presets/body-shape-preview.png)

   **체형 차이 보정**: 두 아바타의 체형 차이를 보정합니다. 가슴 크기 차이가 클 때 사용하면 좋습니다.

   **미리보기**: 켜기를 선택하면 대략적인 체형 보정 결과를 미리 확인할 수 있습니다.

   **체형 보정 미리보기 갱신**: 변경한 설정을 미리보기에 반영합니다.

   <button type="button" class="doc-details-close" data-details-close>미리보기 설명 닫기</button>
   </details>

   <details class="doc-optional-step">
   <summary>BlendShape 조정탭</summary>

   ![BlendShape 조정탭과 Bone Pose 갱신 버튼 화면]({{BASE_PATH}}/media/presets/blendshape-adjustment.png)

   **현재 BlendShape에 맞춰 Bone Pose 갱신**: BlendShape 값을 변경한 뒤 눌러 본 대응 포즈를 갱신합니다.

   **Source Avatar** 또는 **Target Avatar**를 선택하고, 목록의 BlendShape 값을 슬라이더나 숫자 입력으로 조절합니다.

   원본 아바타의 BlendShape를 조정하면, 의상에 같은 이름의 BlendShape가 있을 때 함께 조정됩니다.

   <br>

   **원본 몸통 Mesh / 입힐 몸통 Mesh**: 잘못된 Mesh가 선택되었거나 몸통이 여러 Mesh로 구성되어 있다면 직접 지정합니다.

   <button type="button" class="doc-details-close" data-details-close>BlendShape 설명 닫기</button>
   </details>

   <details class="doc-optional-step">
   <summary>매칭 조정탭</summary>

   ![가슴과 본의 매칭 조정 및 본 선택 화면]({{BASE_PATH}}/media/presets/matching-adjustment.png)

   **매칭 조정 초기화**: 본·가슴 매칭 조정을 초기 상태로 되돌립니다.

   <br>

   **가슴 매칭 조정**: 자동으로 잡힌 기준 위치가 실제 가슴 위치와 다를 때 조정합니다.

   ※ 상단의 체형 차이 보정이 활성화되어 있을 때만 사용할 수 있습니다.

   **가슴 조정 표시**: 켜기를 선택하면 가슴판과 기준점을 표시합니다.

   **가슴 영역 조정**: Scene에서 판 중앙의 이동 도구(Gizmo)의 Y축을 움직여 윗가슴·밑가슴 위치에 맞춥니다.

   ※ 가슴판은 각 아바타의 실제 가슴 위치에 맞춥니다. 두 아바타의 판을 같은 높이에 맞추지 마세요.

   **유두 조정**: 몸통 Mesh의 좌우 가슴에서 가장 돌출된 부분을 마우스로 드래그해 지정합니다. Esc로 취소합니다.

   <br>

   **본 매칭 조정**<br>
   **W(이동)**: 선택한 본의 위치를 조정합니다.<br>
   **E(회전)**: 선택한 본의 각도를 조정합니다.<br>
   **R(크기)**: 선택한 본의 크기를 조정합니다.<br>
   **대칭 조정**: 켜기를 선택하면 대응되는 반대쪽 본을 함께 조정합니다. 한쪽만 조정하려면 끄기를 선택합니다.

   <button type="button" class="doc-details-close" data-details-close>매칭 조정 설명 닫기</button>
   </details>

   <details class="doc-optional-step">
   <summary>옵션 조정탭</summary>

   ![신체 표면 간격과 스무딩 등 기본·고급 변형 옵션 조정 화면]({{BASE_PATH}}/media/presets/fitting-options.png)

   **신체 표면 간격**: 의상과 아바타 몸통 사이의 최소 간격을 설정합니다.

   **몸통 Mesh 자동 할당**: 아바타의 몸통 Mesh를 자동으로 탐색합니다. 몸통 Mesh를 직접 지정할 때는 자동 할당을 해제합니다.

   **체형 차이 보정**: 원본 아바타와 입힐 아바타의 체형 차이를 보정합니다.

   **스무딩**: 변형을 부드럽게 다듬는 강도를 조정합니다.

   **변형 옵션**: 변형 횟수와 신체 관통 보정 횟수를 조정합니다.

   <br>

   각 옵션의 기본 개념은 [**파라미터 설명**](../parameters/)을 참고해 주세요.

   <button type="button" class="doc-details-close" data-details-close>옵션 조정 설명 닫기</button>
   </details>

3. 편집 화면의 **저장하기**를 눌러 저장 창을 엽니다. **Preset 이름**, **Source Avatar 이름**, **Target Avatar 이름**을 확인한 뒤 **저장하기 → 확인**을 누릅니다.
4. 저장한 프리셋이 선택된 상태로 Kisetter 화면으로 돌아옵니다.

기존 Preset을 수정하려면 **Preset 선택하기**에서 프리셋을 선택하고 **적용하기**를 누른 뒤, **불러온 프리셋 편집**을 누릅니다. 이후 조정·저장 방법은 같습니다.

<details class="doc-optional-step" id="편집을-마치거나-취소하기" open>
<summary>편집을 마치거나 취소하기</summary>

**Kisetter로 돌아가기**를 눌렀을 때 저장하지 않은 변경 사항이 있으면 다음 중 하나를 선택합니다.

- **저장하고 돌아가기**: 저장 창에서 이름을 확인하고 프리셋을 저장합니다.
- **저장하지 않고 돌아가기**: 이번 편집 내용을 버리고 돌아갑니다.
- **계속 편집**: 편집 화면으로 돌아가 조정을 계속합니다.

<button type="button" class="doc-details-close" data-details-close>편집 종료 안내 닫기</button>
</details>

<span id="3-직전-변형값을-프리셋으로-저장하기" class="doc-anchor-alias" data-anchor-target="직전-변형에-사용한-값으로-만들기" aria-hidden="true"></span>

<span id="완료한-변형값으로-만들기" class="doc-anchor-alias" data-anchor-target="직전-변형에-사용한-값으로-만들기" aria-hidden="true"></span>

#### 직전 변형에 사용한 값으로 만들기

1. **입히기**로 변형을 완료합니다. 단계별로 진행한다면 **Weighting**까지 완료합니다.
2. **프리셋** 영역의 **직전 변형값을 프리셋으로 저장**을 누릅니다.

   ![직전 변형값을 프리셋으로 저장 버튼 위치]({{BASE_PATH}}/media/presets/save-last-conversion.png)

3. 저장 창에서 아래 항목을 확인하고, 필요한 경우 원하는 이름으로 수정합니다.

   | 항목 | 입력할 내용 |
   | --- | --- |
   | **Preset 이름** | 프리셋 이름 |
   | **Source Avatar 이름** | 원본 아바타를 이름 |
   | **Target Avatar 이름** | 입힐 아바타를 이름 |

   ![프리셋 이름과 원본 및 입힐 아바타 이름을 입력하는 저장 창]({{BASE_PATH}}/media/presets/save-preset-dialog.png)

4. **저장하기**를 누르고, 저장 확인 창에서 **확인**을 선택합니다.
5. 저장 완료 안내가 나타나면 프리셋이 생성되고 Kisetter 창에서 자동 선택됩니다.

!!! info "현재 화면의 값이 아니라 직전 변형에 사용한 값을 저장합니다"
    변형 후 바꾼 값을 저장하려면 변형을 다시 완료하거나 <strong>직접 조정해서 만들기</strong>를 사용하세요.

<details class="doc-optional-step" id="저장-이름과-위치">
<summary>저장 이름과 위치</summary>

- 프리셋은 `Assets/@Eden_Tools/Kisetter/Presets` 폴더에 저장됩니다.
- 같은 아바타 조합에 같은 이름으로 저장하면 덮어쓰기 확인 창이 나타납니다. 기존 프리셋을 남기려면 다른 이름으로 저장하세요.

<button type="button" class="doc-details-close" data-details-close>저장 이름·위치 안내 닫기</button>
</details>

<span id="6-저장되는-내용과-주의-사항" class="doc-anchor-alias" data-anchor-target="preset-contents" aria-hidden="true"></span>

<details class="doc-optional-step" id="preset-contents">
<summary>저장되는 내용과 저장되지 않는 내용</summary>

| 구분 | 내용 |
| --- | --- |
| **저장되는 조정값** | 아바타 몸통 Mesh의 BlendShape 값, 아바타 본의 위치·회전·크기 조정값, 가슴 대응 위치 정보, 프리셋에서 지원하는 변형 옵션 |
| **저장되지 않는 내용** | 의상 자체의 조정값, Scene의 아바타·의상 오브젝트 자체, 완성된 의상 Prefab이나 Mesh 파일 |

<button type="button" class="doc-details-close" data-details-close>저장 내용 안내 닫기</button>
</details>

<span id="불러와-적용하기" class="doc-anchor-alias" data-anchor-target="3-preset-적용하기" aria-hidden="true"></span>

<span id="프리셋-적용하기" class="doc-anchor-alias" data-anchor-target="3-preset-적용하기" aria-hidden="true"></span>

## 3. Preset 적용하기

1. **프리셋** 영역에서 **Preset 선택하기**를 누릅니다.

   ![Preset 선택하기 버튼의 빨간 외곽선]({{BASE_PATH}}/media/presets/file-select-open-figma.webp)

2. **원본 아바타**와 **입힐 아바타** 이름으로 사용할 아바타에 맞는 Preset을 검색합니다.

   ![아바타 필터와 프리셋 선택 및 적용 버튼]({{BASE_PATH}}/media/presets/file-select-list-figma.webp)

3. **Preset 목록**에서 원하는 프리셋을 선택한 뒤 **적용하기**를 누릅니다.
4. 적용된 **BlendShape** 값과 설정이 의상에 맞는지 확인합니다. 수정이 필요하면 **불러온 프리셋 편집**에서 조정하고 저장합니다. 설정을 확인한 뒤 **입히기**로 변형을 진행합니다.

!!! warning "적용 안내를 확인해 주세요"
    본 설정이 다르다는 안내가 표시되면 적용 결과를 확인하고, 필요한 부분을 <strong>불러온 프리셋 편집</strong>에서 조정하세요.

<span id="5-적용-전-상태로-되돌리기" class="doc-anchor-alias" data-anchor-target="preset-restore" aria-hidden="true"></span>

<details class="doc-optional-step" id="preset-restore" open>
<summary>적용 전으로 되돌리기</summary>

![프리셋을 적용하기 전 상태로 되돌리는 버튼 위치]({{BASE_PATH}}/media/presets/restore-previous.png)

**적용 전으로 되돌리기**를 누르면 마지막 프리셋 적용 직전의 설정과 BlendShape 값으로 돌아갑니다.

프리셋을 적용한 뒤 원본 아바타·프로필, 입힐 의상, 입힐 아바타를 변경했다면 되돌릴 수 없습니다.

이미 생성된 변형 결과물은 되돌리지 않습니다.

<button type="button" class="doc-details-close" data-details-close>되돌리기 안내 닫기</button>
</details>

<span id="3-내-프리셋-저장-공유하기" class="doc-anchor-alias" data-anchor-target="4-preset-내보내기-공유하기" aria-hidden="true"></span>

## 4. Preset 내보내기·공유하기

만족스러운 변환 결과를 얻었다면, 프리셋을 [**💾｜preset-share** 채널](https://discord.gg/Czuxfw8ng8)에 공유해 보세요.

<span id="8-프리셋-내보내기" class="doc-anchor-alias" data-anchor-target="preset-share" aria-hidden="true"></span>

<details class="doc-optional-step" id="preset-share" open>
<summary>Kisetter에서 내보내고 공유하기</summary>

1. **프리셋 파일로 불러오기 / 내보내기**를 펼치고 **내보내기**를 누릅니다.

   ![파일 항목과 내보내기 버튼의 빨간 외곽선]({{BASE_PATH}}/media/presets/file-export-open-figma.webp)

2. **원본 아바타**와 **입힐 아바타** 이름으로 목록을 정렬하고, 내보낼 프리셋을 선택한 뒤 **내보내기**를 누릅니다.

   ![내보낼 프리셋 선택과 내보내기 버튼]({{BASE_PATH}}/media/presets/file-export-list-figma.webp)

3. 저장 위치와 파일 이름을 정해 `.ksPreset` 파일로 저장합니다.
4. **내보내기가 완료되었습니다.** 안내에서 **확인**을 누릅니다.

   ![프리셋 내보내기 완료와 확인 버튼]({{BASE_PATH}}/media/presets/file-export-complete-figma.webp)

프리셋을 공유하려면 각각 내보낸 뒤 파일 그대로 혹은 ZIP으로 묶어 공유합니다.

[**디스코드 서버**](https://discord.gg/Czuxfw8ng8)의 **💾｜preset-share** 채널에 공유하실 경우, 채널의 **포스트 가이드라인**에 맞춰 게시글을 작성해 주세요.

<button type="button" class="doc-details-close" data-details-close>안내 닫기</button>
</details>

<details class="doc-optional-step" id="preset-unity-export">
<summary>Unity에서 직접 내보내기 (.unitypackage)</summary>

1. Unity Project 창에서 `Assets/@Eden_Tools/Kisetter/Presets` 폴더를 열고 공유할 프리셋을 선택합니다. 여러 프리셋을 함께 선택할 수도 있습니다.

   ![Unity Project 창의 Presets 폴더와 저장된 프리셋 목록]({{BASE_PATH}}/media/presets/preset-folder.png)

2. <strong>우클릭 → Export Package…</strong>를 선택하고, 포함할 파일을 확인한 뒤 <strong>Export…</strong>를 눌러 파일 이름과 저장 위치를 지정합니다.

   ![프리셋을 선택하고 우클릭 메뉴에서 Export Package를 선택하는 화면]({{BASE_PATH}}/media/presets/export-package.png)

받은 `.unitypackage` 파일은 사용할 프로젝트에서 열어 **Import**합니다.

<button type="button" class="doc-details-close" data-details-close>안내 닫기</button>
</details>

<span id="7-버튼이-비활성화되거나-목록에-보이지-않는-경우" class="doc-anchor-alias" data-anchor-target="5-문제-해결" aria-hidden="true"></span>

## 5. 문제 해결

<details class="doc-optional-step" id="preset-file-help-1">
<summary>파일 불러오기·내보내기 버튼이 보이지 않거나 비활성화된 경우</summary>

**프리셋 파일로 불러오기 / 내보내기**를 펼칩니다. 버튼이 비활성화되어 있다면 진행 중인 변형·편집·저장을 마치고, Unity가 재생 중이면 재생을 멈춥니다.

<button type="button" class="doc-details-close" data-details-close>안내 닫기</button>
</details>

<details class="doc-optional-step" id="preset-file-help-2">
<summary>파일을 불러올 수 없거나 지원하지 않는 버전인 경우</summary>

Kisetter에서 내보낸 `.ksPreset` 파일인지 확인합니다. 지원하지 않는 버전이라는 안내가 나오면 파일을 만든 Kisetter 버전을 확인하세요.

<button type="button" class="doc-details-close" data-details-close>안내 닫기</button>
</details>

<details class="doc-optional-step" id="preset-file-help-3">
<summary>이름 중복 창에서 덮어쓰기를 선택할 수 없는 경우</summary>

**이름 바꿔서 저장하기**를 선택하고 다른 Preset 이름으로 저장합니다.

<button type="button" class="doc-details-close" data-details-close>안내 닫기</button>
</details>

<details class="doc-optional-step" id="preset-file-help-4">
<summary>불러오기는 성공했지만 적용할 수 없는 경우</summary>

**Preset 선택하기**에서 현재 아바타 조합에 맞는 프리셋을 선택하고 **적용하기**를 누릅니다. 적용 시 표시되는 안내를 확인하세요.

<button type="button" class="doc-details-close" data-details-close>안내 닫기</button>
</details>

<details class="doc-optional-step">
<summary>Preset 선택하기 또는 새 프리셋 만들기 버튼이 비활성화된 경우</summary>

원본 아바타(또는 변환 원본 프로필), 입힐 의상, 입힐 아바타가 모두 지정되어 있는지 확인해 주세요. Unity가 재생 중이라면 재생을 멈추고, 변형이나 프리셋 편집·저장 작업이 진행 중이라면 먼저 마쳐 주세요.

<button type="button" class="doc-details-close" data-details-close>해결 방법 닫기</button>
</details>

<details class="doc-optional-step">
<summary>불러온 프리셋 편집 버튼이 비활성화된 경우</summary>

먼저 **Preset 선택하기**에서 편집할 프리셋을 선택한 뒤 **적용하기**를 눌러 주세요.

<button type="button" class="doc-details-close" data-details-close>해결 방법 닫기</button>
</details>

<details class="doc-optional-step">
<summary>직전 변형값을 프리셋으로 저장 버튼이 비활성화된 경우</summary>

현재 작업에서 **입히기**로 전체 변형을 완료했는지 확인해 주세요. 단계별로 진행했다면 **Weighting**까지 완료해야 합니다. 변형을 완료했을 때와 동일한 원본·입힐 아바타 조합에서 저장할 수 있습니다. 같은 변형 결과를 이미 프리셋으로 저장했다면, 다시 변형을 완료해야 버튼이 활성화됩니다.

<button type="button" class="doc-details-close" data-details-close>해결 방법 닫기</button>
</details>

<details class="doc-optional-step">
<summary>프리셋이 목록에 나타나지 않는 경우</summary>

**원본 아바타 / 입힐 아바타** 필터를 확인합니다. Unity에서 직접 추가했다면 `.asset`을 Presets 폴더 바로 아래에 넣고 **새로고침**을 누릅니다.

<button type="button" class="doc-details-close" data-details-close>해결 방법 닫기</button>
</details>

<details class="doc-optional-step">
<summary>프리셋을 적용할 수 없다는 안내가 나타나는 경우</summary>

현재 원본 아바타·입힐 아바타 조합에 맞는 프리셋인지 확인하세요.

<button type="button" class="doc-details-close" data-details-close>해결 방법 닫기</button>
</details>

설정을 마쳤다면 [의상 자동 대응 가이드](../auto-fitting/)로 돌아가 옵션을 확인하고 변형을 진행하세요.
