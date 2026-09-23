---
title: "릴랙스"
slug: "mesh-editing-relax"
category: "사용 가이드"
description: "정점 배치와 급격한 굴곡을 부드럽게 다듬습니다."
order: 35
version: "3.4.1"
parent: "mesh-editing"
---

<strong>릴랙스(Relax)</strong>는 정점 간격과 급격한 굴곡을 완화해 표면을 부드럽게 다듬습니다. 선택 영역 전체를 하나의 평면으로 만드는 기능은 아닙니다.

<figure>
  <video controls preload="metadata" width="810" height="754" style="height: auto; aspect-ratio: 810 / 754;" playsinline aria-label="릴랙스 브러시 사용 예시"><source src="{{BASE_PATH}}/media/mesh-studio/relax.mp4" type="video/mp4" /><a href="{{BASE_PATH}}/media/mesh-studio/relax.mp4">동영상 파일 열기</a></video>
  <figcaption>릴랙스 브러시 사용 예시</figcaption>
</figure>

<img src="{{BASE_PATH}}/media/mesh-studio/relax-settings.png" alt="릴랙스 브러시 설정" width="402" height="207" loading="lazy" />

## [1] 사용 방법

1. 릴랙스를 선택합니다.
2. 반경과 강도를 조절하고 거칠어진 부분을 조금씩 드래그합니다.
3. 끈의 폭·두께, 주름, 장식의 연결이 원하는 모양으로 유지되는지 확인합니다.

## [2] 브러시 설정

| 옵션 | 설명 |
| --- | --- |
| <strong>브러시 반경(Brush Radius)</strong> | 커서 주변에서 정점 배치와 굴곡을 다듬을 범위를 조절합니다. |
| <strong>브러시 강도(Brush Strength)</strong> | 주변 정점을 따라 표면을 부드럽게 다듬는 강도를 조절합니다. 끈이나 주름의 형태를 확인하며 조금씩 적용합니다. |
| <strong>대칭(Symmetry)</strong> | X / Y / Z 중 적용할 축을 선택하면 Root Object 기준으로 반대편에도 작업을 적용합니다. 여러 축을 동시에 선택할 수 있습니다. |

| 조작 | 동작 |
| --- | --- |
| <strong>Shift + 마우스 휠</strong> | 브러시 반경 조절 |
| <strong>Ctrl + Shift + 마우스 휠</strong> | 브러시 강도 조절 |
| <strong>Caps Lock을 켠 상태에서 Shift + 마우스 휠</strong> | 브러시 강도 조절 |
| <strong>Esc</strong> | 진행 중인 브러시 드래그 취소 |

단축키는 Scene View에서 사용합니다. macOS에서는 Ctrl 대신 Command를 사용할 수 있습니다.

## [3] 기준 Mesh

<strong>기준 Mesh(Reference Meshes)</strong>에는 표면을 다듬을 때 참고할 Mesh를 지정합니다. 가까운 기준 표면이 있으면 이를 참고하고, 기준이 없거나 대응 표면을 찾지 못하면 의상 자체의 주변 형태를 참고합니다.

1. 의상의 상위 계층에서 자동으로 찾아 설정한 몸 Mesh가 올바른지 확인합니다.
2. <strong>몸 Mesh 찾기(Find Body Mesh)</strong>를 누르면 상위 계층의 Humanoid Avatar에서 몸 Mesh를 다시 찾습니다.
3. <strong>+</strong>로 기준 Mesh를 추가하고, <strong>−</strong>로 불필요한 항목을 제거합니다. 직접 추가한 Mesh는 자동 검색 시 유지됩니다.

Main Mesh 자신이나 Main Mesh와 같은 Mesh 데이터를 사용하는 항목은 기준에서 제외됩니다.

릴랙스에는 <strong>표면 간격</strong> 입력란이 표시되지 않습니다. 가까운 기준 표면을 찾으면 다른 브러시에서 설정된 간격을 참고합니다.

## [4] 결과 확인

릴랙스에서도 폭이나 두께가 달라질 수 있으므로 강도를 낮춰 시작하는 것이 좋습니다. 끈과 장식의 연결, 남겨 두고 싶은 주름을 함께 확인해 주세요.

## [5] 편집 결과 저장

편집 후 필요한 경우 [Weight 재계산과 PhysBone 재정렬](../mesh-editing/#3-weight-재계산과-physbone-재정렬)을 진행합니다. [저장과 Mesh 분리](../mesh-editing/#4-저장과-mesh-분리)에서 Mesh 또는 BlendShape로 저장하는 방법을 확인해 주세요.
