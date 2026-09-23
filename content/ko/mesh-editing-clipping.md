---
title: "의상 뚫림 해소"
slug: "mesh-editing-clipping"
category: "사용 가이드"
description: "기준 Mesh 안으로 파고든 의상을 바깥쪽으로 보정합니다."
order: 33
version: "3.4.1"
parent: "mesh-editing"
---

<strong>의상 뚫림 해소(Resolve Clothing Clipping)</strong>는 Main Mesh가 기준 Mesh 안으로 파고든 부분을 바깥쪽으로 꺼내는 도구입니다.

<figure>
  <video controls preload="metadata" width="844" height="812" style="height: auto; aspect-ratio: 844 / 812;" playsinline aria-label="의상 뚫림 해소 예시"><source src="{{BASE_PATH}}/media/mesh-studio/clipping.mp4" type="video/mp4" /><a href="{{BASE_PATH}}/media/mesh-studio/clipping.mp4">동영상 파일 열기</a></video>
  <figcaption>의상 뚫림 해소 예시</figcaption>
</figure>

## [1] 사용 방법

1. <strong>기준 Mesh</strong>에 몸 Mesh 등 보정 기준을 지정합니다.
2. <strong>표면 간격 (mm)</strong>과 브러시 반경·강도를 설정합니다.
3. 보정할 부분이 보이도록 Scene View를 조절하고 브러시의 화살표를 확인합니다.
4. Main Mesh의 뚫린 부분을 드래그합니다.

## [2] 브러시 설정

| 옵션 | 설명 |
| --- | --- |
| <strong>브러시 반경(Brush Radius)</strong> | 커서 주변에서 뚫림을 보정할 범위를 조절합니다. |
| <strong>브러시 강도(Brush Strength)</strong> | 기준 Mesh 안으로 파고든 의상을 바깥쪽으로 보정하는 강도를 조절합니다. 표면 간격은 별도 옵션으로 설정합니다. |
| <strong>대칭(Symmetry)</strong> | X / Y / Z 중 적용할 축을 선택하면 Root Object 기준으로 반대편에도 작업을 적용합니다. 여러 축을 동시에 선택할 수 있습니다. |

| 조작 | 동작 |
| --- | --- |
| <strong>Shift + 마우스 휠</strong> | 브러시 반경 조절 |
| <strong>Ctrl + Shift + 마우스 휠</strong> | 브러시 강도 조절 |
| <strong>Caps Lock을 켠 상태에서 Shift + 마우스 휠</strong> | 브러시 강도 조절 |
| <strong>Esc</strong> | 진행 중인 브러시 드래그 취소 |

단축키는 Scene View에서 사용합니다. macOS에서는 Ctrl 대신 Command를 사용할 수 있습니다.

## [3] 기준 Mesh와 표면 간격

<strong>기준 Mesh(Reference Meshes)</strong>에는 뚫림 보정의 기준이 되는 표면을 지정합니다. 아바타의 몸 Mesh 외에 다른 Mesh도 사용할 수 있습니다.

<img src="{{BASE_PATH}}/media/mesh-studio/reference-meshes.png" alt="기준 Mesh와 표면 간격 설정" width="534" height="233" loading="lazy" />

1. 의상의 상위 계층에서 자동으로 찾아 설정한 몸 Mesh가 올바른지 확인합니다.
2. <strong>몸 Mesh 찾기(Find Body Mesh)</strong>를 누르면 상위 계층의 Humanoid Avatar에서 몸 Mesh를 다시 찾습니다.
3. <strong>+</strong>로 기준 Mesh를 추가하고, <strong>−</strong>로 불필요한 항목을 제거합니다. 직접 추가한 Mesh는 자동 검색 시 유지됩니다.

Main Mesh 자신이나 Main Mesh와 같은 Mesh 데이터를 사용하는 항목은 기준에서 제외됩니다.

<strong>표면 간격 (mm)(Surface Gap (mm))</strong>은 뚫림을 보정한 의상과 기준 표면 사이에 둘 간격입니다. 1 mm를 띄우려면 `1`을 입력합니다.

## [4] 결과 확인

화살표 쪽으로 드러난 기준 Mesh의 바깥 표면을 참고합니다. 가까운 천과 겹친 층도 보정에 따라 움직일 수 있으므로 주변 모양을 함께 확인해 주세요. 다른 방향의 뚫림은 시점을 바꿔 작업합니다.

## [5] 편집 결과 저장

편집 후 필요한 경우 [Weight 재계산과 PhysBone 재정렬](../mesh-editing/#3-weight-재계산과-physbone-재정렬)을 진행합니다. [저장과 Mesh 분리](../mesh-editing/#4-저장과-mesh-분리)에서 Mesh 또는 BlendShape로 저장하는 방법을 확인해 주세요.
