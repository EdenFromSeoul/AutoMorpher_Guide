---
title: "Mesh Studio 가이드"
slug: "mesh-editing"
category: "사용 가이드"
description: "정점과 브러시로 의상 Mesh를 편집하고, Weight·PhysBone을 조정한 뒤 Mesh 또는 BlendShape로 저장하는 방법입니다."
order: 30
version: "3.4.1"
---

<div class="guide-intro">
  <p>⚫ <strong>Mesh Studio</strong>는 Unity의 Scene View에서 의상 Mesh를 직접 수정할 수 있는 도구입니다.</p>
  <p>⚫ 의상 뚫림, 몸과의 간격, 망가진 부분을 손쉽게 수정하고 <strong>Mesh 또는 BlendShape</strong>로 저장할 수 있습니다.</p>
</div>

## [1] 편집 준비

### 1. Mesh Studio 열기

1. きせった(Kisetter) 창 상단에서 <strong>Mesh Studio</strong> 탭을 선택합니다.
2. <strong>편집 대상 Mesh(Mesh Selection)</strong>의 <strong>Root Object</strong>에 편집할 의상 오브젝트 또는 그 부모 오브젝트를 드래그합니다.
3. 목록이 비어 있거나 의상 구성이 바뀌었다면 <strong>목록 새로고침(Refresh Meshes)</strong>을 누릅니다.

<div class="doc-media-grid doc-media-grid-2">
  <figure><img src="{{BASE_PATH}}/media/mesh-studio/tab.png" alt="Kisetter 창 상단의 Mesh Studio 탭" width="605" height="206" loading="lazy" /></figure>
  <figure><img src="{{BASE_PATH}}/media/mesh-studio/root-object.png" alt="의상을 Root Object에 지정하는 방법" width="791" height="392" loading="lazy" /></figure>
</div>

Root Object 아래에 <strong>Skinned Mesh Renderer</strong>가 있어야 편집할 Mesh가 목록에 나타납니다. 아바타에 맞춘 의상을 작업한다면 의상을 해당 아바타의 자식으로 배치해 주세요.

### 2. Main Mesh와 함께 편집할 Mesh 선택

| 항목 | 사용 방법 |
| --- | --- |
| 1. <strong>목록 새로고침(Refresh Meshes)</strong> | Root Object 아래 Skinned Mesh Renderer 목록을 다시 불러옵니다. |
| 2. <strong>활성 상태(Active)</strong> | 해당 Mesh 오브젝트를 켜거나 끕니다. |
| 3. <strong>Main Mesh</strong> | 정점을 선택하고 편집할 기준 Mesh를 지정합니다. 선택한 Mesh에는 <strong>Main</strong>이 표시됩니다. |
| 4. <strong>편집할 Mesh(Meshes to edit)</strong> | Main Mesh와 함께 변형할 다른 Mesh를 선택하거나 해제합니다. |
| 5. <strong>원래대로 되돌리기(Revert to Original)</strong> | <strong>원래대로 되돌리기(Revert to Original)</strong>: 해당 Mesh의 편집 내용을 되돌립니다.<br /><strong>전체 되돌리기(Revert All)</strong>: 전체 Mesh의 편집 내용을 되돌립니다. |

<img src="{{BASE_PATH}}/media/mesh-studio/mesh-selection.png" alt="Main Mesh와 함께 편집할 Mesh, 활성 상태, 되돌리기 버튼" width="1086" height="636" loading="lazy" />

Main Mesh를 변경하면 함께 편집할 Mesh 선택이 초기화됩니다. Main Mesh를 먼저 지정한 뒤 추가 대상을 선택해 주세요.

## [2] 화면 구성과 공통 설정

### 1. 편집 UI 표시 위치

<strong>Vertex 조작 옵션 위치(Vertex Controls Location)</strong>에서 조작 패널을 표시할 곳을 선택합니다.

<img src="{{BASE_PATH}}/media/mesh-studio/controls-location.png" alt="Vertex 조작 옵션 위치 설정" width="1172" height="1038" loading="lazy" />

<div class="doc-media-grid doc-media-grid-2">
  <figure><img src="{{BASE_PATH}}/media/mesh-studio/scene-ui.png" alt="Scene UI" width="900" height="879" loading="lazy" /><figcaption>Scene UI</figcaption></figure>
  <figure><img src="{{BASE_PATH}}/media/mesh-studio/editor-ui.png" alt="Mesh Studio 창" width="899" height="837" loading="lazy" /><figcaption>Mesh Studio 창</figcaption></figure>
</div>

### 2. 정점 표시 설정

<strong>정점 표시 설정(Vertex Display)</strong>에서 정점이 보이는 방식을 설정합니다. 기본적으로 편집 가능한 정점은 흰색, 선택한 정점은 노란색으로 표시됩니다. 주변 정점은 영향을 적게 받을수록 파란색, 많이 받을수록 빨간색으로 표시됩니다.

<div class="doc-media-grid doc-media-grid-2">
  <figure><img src="{{BASE_PATH}}/media/mesh-studio/vertex-display.png" alt="정점 표시 설정 패널" width="1155" height="1010" loading="lazy" /><figcaption>정점 표시 설정 패널</figcaption></figure>
  <figure><img src="{{BASE_PATH}}/media/mesh-studio/vertex-colors.png" alt="선택한 정점과 주변 영향 범위의 색상" width="1036" height="604" loading="lazy" /><figcaption>선택한 정점과 주변 영향 범위의 색상</figcaption></figure>
</div>

| 항목 | 설명 |
| --- | --- |
| <strong>버텍스 표시(Show Vertices)</strong> | Vertex를 표시할지 여부를 설정합니다. |
| <strong>가려진 버텍스 표시(Show Occluded)</strong> | 다른 Mesh에 가려진 정점도 표시합니다. |
| <strong>정점 크기(Vertex Size)</strong> | 화면에 표시되는 정점의 크기를 조절합니다. |
| <strong>표시 거리(Draw Distance)</strong> | 카메라에서 정점을 표시할 최대 거리를 설정합니다. 최댓값으로 설정할 경우, 거리 제한 없이 모든 정점을 표시합니다. |
| <strong>정점 색상(Vertex Color)</strong> | 정점의 표시 색상을 설정합니다. |

<span id="3-편집-모드-선택"></span>

### 3. 편집 도구 선택

편집 도구는 <strong>편집 모드(Edit Mode)</strong>에서 선택하고, <strong>도구 설정(Tool Settings)</strong>에서 해당 도구의 옵션을 조절합니다.

<img src="{{BASE_PATH}}/media/mesh-studio/edit-mode-buttons.png" alt="각 편집 도구별 UI" width="358" height="172" loading="lazy" />

<div class="doc-media-grid doc-media-grid-2">
  <figure><img src="{{BASE_PATH}}/media/mesh-studio/edit-modes.png" alt="편집 도구 선택 UI" width="1197" height="1024" loading="lazy" /><figcaption>편집 도구 선택 UI</figcaption></figure>
  <figure><img src="{{BASE_PATH}}/media/mesh-studio/tool-settings.png" alt="편집 도구 설정 UI" width="1162" height="1007" loading="lazy" /><figcaption>편집 도구 설정 UI</figcaption></figure>
</div>


아래 도구 이름을 누르면 해당 편집 모드의 사용 방법과 예시를 볼 수 있습니다.

| 도구 | 이런 작업에 사용하세요 |
| --- | --- |
| <span id="3-정점-편집"></span>[정점 편집(Vertex Control)](../mesh-editing-vertex-control/) | 선택한 정점을 이동·회전하거나 크기를 조절합니다. |
| <span id="1-복원-브러시"></span>[복원 브러시(Restore Brush)](../mesh-editing-restore/) | BlendShape에 기록된 형태를 기준으로 변형된 부분을 복원합니다. |
| <span id="2-의상-뚫림-해소"></span>[의상 뚫림 해소(Resolve Clothing Clipping)](../mesh-editing-clipping/) | 기준 Mesh 안으로 파고든 의상을 바깥쪽으로 보정합니다. |
| <span id="3-밀착"></span>[밀착(Shrinkwrap)](../mesh-editing-shrinkwrap/) | 기준 Mesh의 표면과 설정한 간격에 맞춰 의상을 밀착시킵니다. |
| <span id="4-릴랙스"></span>[릴랙스(Relax)](../mesh-editing-relax/) | 정점 배치와 급격한 굴곡을 부드럽게 다듬습니다. |
| <span id="5-shrink"></span>[Shrink](../mesh-editing-shrink/) | 선택한 정점을 수축시켜 의상의 일부를 감추는 형태를 만듭니다. |

## [3] Weight 재계산과 PhysBone 재정렬

Mesh 형태를 조정한 뒤 필요할 때 <strong>의상 웨이트 재계산 및 피즈본 재정렬(Clothing Weight Recalculation / PhysBone Realignment)</strong>을 사용합니다.

### 1. 기준 Avatar와 몸통 Mesh 지정

1. 의상의 <strong>Root Object</strong>가 올바른지 확인합니다.
2. <strong>기준 Avatar(Reference Avatar)</strong>에 의상을 입힐 아바타의 유효한 Humanoid Animator를 지정합니다.
3. <strong>몸통 Mesh(Body Meshes)</strong>에 해당 아바타의 몸 Mesh를 지정합니다. <strong>몸통 Mesh 자동 할당(Auto-assign Body Mesh)</strong>으로 자동 검색할 수 있습니다.

<img src="{{BASE_PATH}}/media/mesh-studio/rig-setup.png" alt="기준 Avatar와 몸통 Mesh 설정" width="655" height="156" loading="lazy" />

의상은 기준 아바타의 자식으로 배치하고, 대응되는 본의 구조와 위치를 확인해 주세요. 편집 중인 의상이나 같은 Mesh 데이터를 공유하는 Renderer는 몸통 Mesh로 사용할 수 없습니다.

현재 두 기능 모두 유효한 기준 Avatar와 몸통 Mesh 설정이 필요합니다. 버튼이 비활성화되어 있다면 이 설정과 실제로 편집된 대상이 있는지 확인해 주세요.

### 2. PhysBone 재정렬

<strong>PhysBone 재정렬(Realign PhysBones)</strong>은 수정한 Mesh에 맞춰 의상의 보조 본 위치를 다시 정렬합니다. 아바타와 대응되는 본 등 보호 대상 본은 조정에서 제외됩니다.

<figure>
  <video controls preload="metadata" width="1616" height="856" style="height: auto; aspect-ratio: 1616 / 856;" playsinline aria-label="PhysBone 재정렬 예시"><source src="{{BASE_PATH}}/media/mesh-studio/physbones.mp4" type="video/mp4" /><a href="{{BASE_PATH}}/media/mesh-studio/physbones.mp4">동영상 파일 열기</a></video>
  <figcaption>PhysBone 재정렬 예시</figcaption>
</figure>

1. Mesh 편집을 마친 뒤 <strong>PhysBone 재정렬</strong>을 누릅니다.
2. 끈이나 장식의 보조 본 위치가 수정한 Mesh와 맞는지 확인합니다.
3. 결과를 유지하려면 마지막에 저장합니다.

참조 정점이 삭제된 본은 제외됩니다. 관련 Constraint는 잠금이 해제된 상태로 유지되므로, Constraint를 사용하는 의상은 결과와 잠금 상태도 확인해 주세요.

### 3. Weight 재계산

<strong>Weight 재계산(Recalculate Weights)</strong>은 몸통 Mesh를 기준으로 의상 Weight를 다시 계산합니다. 의상 고유 보조 본의 Weight를 유지하면서 아바타에 대응되는 Weight를 조정하고, 현재 Mesh와 BlendShape 형태를 유지합니다.

<img src="{{BASE_PATH}}/media/mesh-studio/weight-scope.png" alt="Weight 재계산 범위" width="651" height="121" loading="lazy" />

1. <strong>Weight 재계산 범위(Weight Recalculation Scope)</strong>를 선택합니다.
2. <strong>Weight 재계산</strong>을 누릅니다.
3. 아바타의 자세를 바꾸었을 때 의상이 원하는 대로 움직이는지 확인하고 저장합니다.

| 범위 | 대상 |
| --- | --- |
| <strong>수정한 Mesh(Edited Meshes)</strong> | 편집한 Mesh |
| <strong>Root 아래 전체 Mesh(All Meshes under Root)</strong> | Root Object 아래에서 불러온 전체 Mesh |

## [4] 저장과 Mesh 분리

### 1. 저장하기

<strong>저장하기...(Save...)</strong>를 눌러 저장 방식을 선택합니다. 결과는 원본 Mesh 에셋을 덮어쓰지 않고 <strong>복사한 Mesh</strong>에 저장되며, 오브젝트에는 저장된 Mesh가 할당됩니다.

<img src="{{BASE_PATH}}/media/mesh-studio/save-dialog.png" alt="저장하기 버튼 위치" width="1004" height="169" loading="lazy" />

<div class="doc-media-grid doc-media-grid-2">
  <figure><img src="{{BASE_PATH}}/media/mesh-studio/save-mesh.png" alt="Mesh에 적용" width="367" height="214" loading="lazy" /><figcaption>Mesh에 적용</figcaption></figure>
  <figure><img src="{{BASE_PATH}}/media/mesh-studio/save-blendshape.png" alt="BlendShape로 저장" width="368" height="234" loading="lazy" /><figcaption>BlendShape로 저장</figcaption></figure>
</div>

저장 경로: `Assets/@Eden_Mesh_MeshStudio/<Root Object 이름>/`

| 저장 방식 | 결과 |
| --- | --- |
| <strong>Mesh에 적용(Apply to Mesh)</strong> | 현재 편집 형태를 Mesh에 반영합니다. |
| <strong>BlendShape로 저장(Save as BlendShape)</strong> | 편집에 따른 변형을 이름을 지정한 BlendShape로 저장합니다. 변경된 Mesh에만 추가됩니다. |

BlendShape로 저장할 때는 <strong>BlendShape 이름(BlendShape Name)</strong>을 입력합니다. 같은 이름이 있으면 덮어쓰기 확인창이 표시됩니다. <strong>덮어쓰기(Overwrite)</strong>를 선택하면 해당 BlendShape가 변경됩니다.

!!! warning "⚠️ 저장 전 확인"
    저장이 완료되면 현재 편집 세션이 종료되고, Mesh 할당을 반영하기 위해 열려 있는 Scene도 저장됩니다. Shrink 결과를 저장하려면 수축 미리보기를 켜고 저장해 주세요.

### 2. 선택 영역 분리

<strong>선택한 매쉬 분리(Separate Selected Mesh)</strong>를 사용하면 선택한 면을 별도 오브젝트와 Mesh로 분리해 저장할 수 있습니다.

<img src="{{BASE_PATH}}/media/mesh-studio/separate-dialog.png" alt="선택한 매쉬 분리 버튼 위치" width="961" height="142" loading="lazy" />

1. Main Mesh에서 분리할 면의 정점을 선택합니다. <strong>세 정점이 모두 선택된 삼각형</strong>이 분리 대상입니다.
2. <strong>선택한 매쉬 분리</strong>를 누릅니다.
3. <strong>Mesh에 적용</strong> 또는 <strong>BlendShape로 저장</strong>을 선택하고, 필요한 경우 BlendShape 이름을 입력합니다.
4. 분리될 영역과 남을 영역을 확인한 뒤 <strong>분리하기(Separate)</strong>를 누릅니다.

기존 Renderer에는 남은 부분의 Mesh 복사본이, 새 오브젝트에는 분리된 Mesh 복사본이 할당됩니다. BlendShape·SubMesh·Material 정보도 유지됩니다. BlendShape로 저장하면 편집한 변형은 각 Mesh의 해당 영역에 나뉘어 저장됩니다.

!!! warning "⚠️ 분리 전 확인"
    분리 및 저장은 Undo로 되돌릴 수 없으며 편집 세션이 종료됩니다. 새 Renderer는 기존 AnimationClip이나 외부 스크립트에 자동 연결되지 않으므로 필요한 참조를 확인해 주세요.

<details class="doc-optional-step">
<summary>분리할 수 없거나 BlendShape 저장이 비활성화된 경우</summary>

- 분리할 삼각형의 세 정점을 모두 선택해 주세요.
- 기존 Mesh에도 일부 면이 남아 있어야 합니다.
- Cloth 컴포넌트가 적용된 Mesh, 여러 Mesh LOD를 가진 Mesh, 삼각형 이외의 Topology는 분리할 수 없습니다.
- 정점 삭제 등으로 편집 전후의 Topology가 달라졌다면 분리 결과를 BlendShape로 저장할 수 없습니다. <strong>Mesh에 적용</strong>을 사용해 주세요.

</details>

### 3. 변경사항을 버리고 종료

작업을 저장하지 않고 끝내려면 <strong>변경사항 취소 후 나가기(Discard Change & Exit)</strong>를 선택합니다. 저장 대화상자의 <strong>취소(Cancel)</strong>는 저장을 취소하고 편집을 계속할 때 사용합니다.

<img src="{{BASE_PATH}}/media/mesh-studio/save-actions.png" alt="저장과 변경사항 취소 버튼" width="693" height="120" loading="lazy" />
