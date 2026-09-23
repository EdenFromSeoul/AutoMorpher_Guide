---
title: "밀착"
slug: "mesh-editing-shrinkwrap"
category: "사용 가이드"
description: "기준 Mesh의 표면과 설정한 간격에 맞춰 의상을 밀착시킵니다."
order: 34
version: "3.4.1"
parent: "mesh-editing"
---

<strong>밀착(Shrinkwrap)</strong>은 Main Mesh를 기준 Mesh의 표면에 맞춰 다듬을 때 사용합니다. 몸에서 뜬 부분의 간격을 줄이고 싶을 때 유용합니다.

<figure>
  <video controls preload="metadata" width="940" height="800" style="height: auto; aspect-ratio: 940 / 800;" playsinline aria-label="밀착 브러시 사용 예시"><source src="{{BASE_PATH}}/media/mesh-studio/shrinkwrap.mp4" type="video/mp4" /><a href="{{BASE_PATH}}/media/mesh-studio/shrinkwrap.mp4">동영상 파일 열기</a></video>
  <figcaption>밀착 브러시 사용 예시</figcaption>
</figure>

## [1] 사용 방법

1. <strong>기준 Mesh</strong>를 지정하고 원하는 <strong>표면 간격 (mm)</strong>을 입력합니다.
2. 브러시 반경과 강도를 조절합니다.
3. 밀착시킬 부분을 드래그하고 다른 각도에서도 결과를 확인합니다.

## [2] 브러시 설정

| 옵션 | 설명 |
| --- | --- |
| <strong>브러시 반경(Brush Radius)</strong> | 커서 주변에서 기준 Mesh에 밀착시킬 범위를 조절합니다. |
| <strong>브러시 강도(Brush Strength)</strong> | 의상이 기준 표면과 지정한 간격을 향해 움직이는 강도를 조절합니다. 값을 낮추면 조금씩 밀착시킬 수 있습니다. |
| <strong>대칭(Symmetry)</strong> | X / Y / Z 중 적용할 축을 선택하면 Root Object 기준으로 반대편에도 작업을 적용합니다. 여러 축을 동시에 선택할 수 있습니다. |

| 조작 | 동작 |
| --- | --- |
| <strong>Shift + 마우스 휠</strong> | 브러시 반경 조절 |
| <strong>Ctrl + Shift + 마우스 휠</strong> | 브러시 강도 조절 |
| <strong>Caps Lock을 켠 상태에서 Shift + 마우스 휠</strong> | 브러시 강도 조절 |
| <strong>Esc</strong> | 진행 중인 브러시 드래그 취소 |

단축키는 Scene View에서 사용합니다. macOS에서는 Ctrl 대신 Command를 사용할 수 있습니다.

## [3] 기준 Mesh와 표면 간격

<strong>기준 Mesh(Reference Meshes)</strong>에는 의상을 밀착시킬 표면을 지정합니다. 아바타의 몸 Mesh 외에 다른 Mesh도 사용할 수 있습니다.

<img src="{{BASE_PATH}}/media/mesh-studio/reference-meshes.png" alt="기준 Mesh와 표면 간격 설정" width="534" height="233" loading="lazy" />

1. 의상의 상위 계층에서 자동으로 찾아 설정한 몸 Mesh가 올바른지 확인합니다.
2. <strong>몸 Mesh 찾기(Find Body Mesh)</strong>를 누르면 상위 계층의 Humanoid Avatar에서 몸 Mesh를 다시 찾습니다.
3. <strong>+</strong>로 기준 Mesh를 추가하고, <strong>−</strong>로 불필요한 항목을 제거합니다. 직접 추가한 Mesh는 자동 검색 시 유지됩니다.

Main Mesh 자신이나 Main Mesh와 같은 Mesh 데이터를 사용하는 항목은 기준에서 제외됩니다.

<strong>표면 간격 (mm)(Surface Gap (mm))</strong>은 밀착 후 기준 표면과 의상 사이에 둘 간격입니다. 1 mm를 띄우려면 `1`을 입력합니다.

## [4] 결과 확인

의상 뚫림 해소는 파고든 부분을 꺼낼 때, 밀착은 표면을 따라 간격을 맞출 때 선택해 주세요.

## [5] 편집 결과 저장

편집 후 필요한 경우 [Weight 재계산과 PhysBone 재정렬](../mesh-editing/#3-weight-재계산과-physbone-재정렬)을 진행합니다. [저장과 Mesh 분리](../mesh-editing/#4-저장과-mesh-분리)에서 Mesh 또는 BlendShape로 저장하는 방법을 확인해 주세요.
