---
title: "정점 편집"
slug: "mesh-editing-vertex-control"
category: "사용 가이드"
description: "선택한 정점을 이동·회전하거나 크기를 조절합니다."
order: 31
version: "3.4.1"
parent: "mesh-editing"
---

## [1] 정점 선택

<strong>정점 편집(Vertex Control)</strong>을 선택한 뒤 Scene View에서 정점을 클릭하거나 박스로 선택합니다.

<div class="doc-media-grid doc-media-grid-2">
  <figure><img src="{{BASE_PATH}}/media/6d66d5ebb4b09557.png" alt="정점 하나를 클릭하여 선택한 예시" width="535" height="491" loading="lazy" /><figcaption>클릭으로 선택</figcaption></figure>
  <figure><img src="{{BASE_PATH}}/media/83e7aa82741df69b.png" alt="박스 안의 여러 정점을 선택한 예시" width="649" height="519" loading="lazy" /><figcaption>드래그로 박스 선택</figcaption></figure>
</div>

| 조작 | 동작 |
| --- | --- |
| <strong>좌클릭</strong> | 해당 정점 선택 |
| <strong>Shift + 좌클릭</strong> | 기존 선택에 정점 추가 |
| <strong>Ctrl + 좌클릭</strong> | 해당 정점의 선택 해제 |
| <strong>좌클릭 드래그</strong> | 박스 안의 정점 선택 |
| <strong>Shift + 좌클릭 드래그</strong> | 박스 안의 정점을 기존 선택에 추가 |
| <strong>Ctrl + 좌클릭 드래그</strong> | 박스 안의 정점 선택 해제 |
| <strong>A</strong> | Main Mesh의 숨기지 않은 정점 전체 선택 |
| <strong>L</strong> | 커서 근처 정점과 연결된 정점을 모두 추가 선택 |
| <strong>Shift + L</strong> | 커서 근처 정점과 연결된 정점을 모두 선택 해제 |

<strong>L / Shift + L</strong>은 Mesh가 분리된 여러 조각으로 구성되어 있을 때 특정 조각만 선택하는 데 유용합니다.

## [2] 이동·회전·크기 조절

정점을 선택한 뒤 <strong>W(이동) / E(회전) / R(크기)</strong> 버튼 또는 단축키를 사용하고, Scene View의 핸들을 드래그합니다.

<div class="doc-media-grid doc-media-grid-3">
  <figure><img src="{{BASE_PATH}}/media/4accd5822cf38fba.png" alt="이동 핸들로 정점을 옮기는 예시" width="756" height="598" loading="lazy" /><figcaption>W · 이동</figcaption></figure>
  <figure><img src="{{BASE_PATH}}/media/bd90cd4b8efaf419.png" alt="회전 핸들로 정점을 회전하는 예시" width="729" height="575" loading="lazy" /><figcaption>E · 회전</figcaption></figure>
  <figure><img src="{{BASE_PATH}}/media/edb5ec08dcbebbe3.png" alt="크기 핸들로 정점을 조절하는 예시" width="639" height="536" loading="lazy" /><figcaption>R · 크기</figcaption></figure>
</div>

<strong>핸들 방향(Handle Direction)</strong>은 <strong>월드(World)</strong> 또는 <strong>버텍스 노멀(Vertex Normal)</strong> 중에서 선택합니다. 월드는 월드 좌표축을, 버텍스 노멀은 선택한 정점의 표면 방향을 기준으로 핸들을 표시합니다.

## [3] 주변 정점에 주는 영향

선택한 정점을 움직이면 주변 정점도 반경과 가중치 설정에 따라 함께 변형됩니다. 영향을 강하게 받을수록 빨간색, 약하게 받을수록 파란색으로 표시됩니다.

<img src="{{BASE_PATH}}/media/4e4790e5af577f26.png" alt="편집 영향과 브러시 범위 설정" width="692" height="528" loading="lazy" />

| 설정 | 선택 항목 | 설명 |
| --- | --- | --- |
| <strong>선택 방식(Pick Mode)</strong> | <strong>직선 거리(Euclidean)</strong> | 공간상 거리가 반경 안에 있는 정점에 영향을 줍니다. |
| | <strong>인접 거리(Adjacency)</strong> | Mesh의 연결을 따라 계산한 거리가 반경 안에 있는 정점에 영향을 줍니다. |
| <strong>브러시 가중치 방식(Brush Weight Mode)</strong> | <strong>선형(Linear)</strong> | 멀어질수록 영향이 일정하게 줄어듭니다. |
| | <strong>가우시안(Gaussian)</strong> | 중심과 주변이 부드럽게 이어지도록 영향을 적용합니다. |
| | <strong>고정(Clamp)</strong> | 범위 안의 정점에 동일한 가중치를 적용합니다. |


### 브러시 설정

| 옵션 | 설명 |
| --- | --- |
| <strong>브러시 반경(Brush Radius)</strong> | 선택한 정점 주변에서 함께 변형할 범위를 조절합니다. |
| <strong>브러시 강도(Brush Strength)</strong> | 선택한 정점을 이동·회전·크기 조절할 때 주변 정점에 전달되는 변형의 강도를 조절합니다. |

| 조작 | 동작 |
| --- | --- |
| <strong>Shift + 마우스 휠</strong> | 브러시 반경 조절 |
| <strong>Ctrl + Shift + 마우스 휠</strong> | 브러시 강도 조절 |
| <strong>Caps Lock을 켠 상태에서 Shift + 마우스 휠</strong> | 브러시 강도 조절 |

단축키는 Scene View에서 사용합니다. macOS에서는 Ctrl 대신 Command를 사용할 수 있습니다.

!!! tip "💡 가까운 다른 조각이 함께 움직인다면"
    인접 거리를 사용하면 Mesh 연결을 기준으로 영향 범위를 제한할 수 있습니다. 편집할 Mesh 목록에서 함께 선택한 대상도 확인해 주세요.

## [4] 정점 숨기기와 삭제

| 조작 | 동작 |
| --- | --- |
| <strong>G</strong> | 선택한 정점 숨기기 |
| <strong>Shift + G</strong> | 숨긴 정점 모두 다시 표시 |
| <strong>버텍스 삭제(Delete Vertices)</strong> 또는 <strong>Backspace / X</strong> | 선택한 정점을 Mesh에서 삭제 |

숨긴 정점은 편집 영향을 받지 않도록 보호됩니다. 숨기기는 작업 범위를 제한할 때 사용하며, 삭제는 Mesh의 정점과 면 구성을 변경할 때 사용합니다.

## [5] 대칭 이동과 클리핑

<strong>대칭(Symmetry)</strong>: X / Y / Z 중 적용할 축을 선택하면 Root Object 기준으로 반대편에도 작업을 적용합니다. 여러 축을 동시에 선택할 수 있습니다. <strong>인접 거리(Adjacency)</strong>를 사용하면 대칭 축을 선택할 수 없습니다. 대칭 편집은 <strong>직선 거리(Euclidean)</strong>에서 사용해 주세요.

<img src="{{BASE_PATH}}/media/mesh-studio/symmetry.png" alt="대칭 편집 예시" width="1082" height="791" loading="lazy" />

| 항목 | 설명 |
| --- | --- |
| <strong>대칭 이동 → 반전(Mirror)</strong> | 반대편 정점이 거울처럼 움직입니다. |
| <strong>대칭 이동 → 동일(Same)</strong> | 반대편 정점에도 같은 방향의 변형을 적용합니다. |
| <strong>대칭 클리핑(Symmetry Clipping)</strong> | 대칭 축 부근의 정점이 반대쪽으로 넘어가는 것을 제한합니다. |

## [6] 편집 결과 저장

편집 후 필요한 경우 [Weight 재계산과 PhysBone 재정렬](../mesh-editing/#3-weight-재계산과-physbone-재정렬)을 진행합니다. [저장과 Mesh 분리](../mesh-editing/#4-저장과-mesh-분리)에서 Mesh 또는 BlendShape로 저장하는 방법을 확인해 주세요.
