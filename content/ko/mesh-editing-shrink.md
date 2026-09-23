---
title: "Shrink"
slug: "mesh-editing-shrink"
category: "사용 가이드"
description: "선택한 정점을 수축시켜 의상의 일부를 감추는 형태를 만듭니다."
order: 36
version: "3.4.1"
parent: "mesh-editing"
---

<strong>Shrink</strong>는 선택한 정점을 본 쪽으로 수축시켜 의상 일부를 감추는 형태를 만듭니다. 필요한 영역을 선택한 뒤 <strong>BlendShape로 저장</strong>하면 수축 형태를 BlendShape로 보관할 수 있습니다.

<figure>
  <video controls preload="metadata" width="880" height="766" style="height: auto; aspect-ratio: 880 / 766;" playsinline aria-label="Shrink 영역 선택과 미리보기 예시"><source src="{{BASE_PATH}}/media/mesh-studio/shrink.mp4" type="video/mp4" /><a href="{{BASE_PATH}}/media/mesh-studio/shrink.mp4">동영상 파일 열기</a></video>
  <figcaption>Shrink 영역 선택과 미리보기 예시</figcaption>
</figure>

<img src="{{BASE_PATH}}/media/mesh-studio/shrink-settings.png" alt="Shrink 미리보기와 선택 방법" width="634" height="234" loading="lazy" />

## [1] 영역 선택과 미리보기

1. <strong>선택 방법(Selection Method)</strong>에서 <strong>클릭 / 박스 선택(Click / Box)</strong> 또는 <strong>브러시 선택(Brush Select)</strong>을 고릅니다.
2. <strong>선택(Select)</strong>으로 수축할 영역을 추가하고 <strong>해제(Deselect)</strong>로 제외합니다.
3. <strong>미리보기 켜기(Preview On)</strong>로 수축 결과를 확인합니다. <strong>미리보기 끄기(Preview Off)</strong>를 선택하면 선택 영역을 유지하면서 수축 전 형태에서 범위를 조절할 수 있습니다.
4. 결과를 저장할 때는 <strong>미리보기 켜기</strong>를 선택한 상태에서 저장합니다.

## [2] 선택 방법별 조작

| 선택 방법 | 추가·해제 조작 |
| --- | --- |
| <strong>클릭 / 박스 선택</strong> | 클릭 또는 드래그로 선택, Shift로 추가, Ctrl로 해제 |
| <strong>브러시 선택</strong> | 선택 모드에서 드래그로 추가, 해제 모드 또는 Shift + 드래그로 해제 |

클릭·박스와 브러시는 같은 선택 영역을 공유합니다. <strong>선택 지우기 / 원상복귀(Clear selection / restore)</strong>로 선택과 수축을 되돌릴 수 있습니다.

## [3] 브러시 설정

Shrink의 브러시는 수축할 정점을 <strong>선택하거나 해제</strong>하는 용도입니다. 브러시 강도로 수축량을 조절하지 않습니다.

| 옵션 | 설명 |
| --- | --- |
| <strong>브러시 반경(Brush Radius)</strong> | 브러시 선택에서 커서 주변의 정점을 선택할 범위를 조절합니다. 클릭 / 박스 선택에서는 반경 옵션이 표시되지 않습니다. |
| <strong>선택(Select) / 해제(Deselect)</strong> | 선택 모드에서는 드래그한 영역을 추가하고, 해제 모드에서는 제외합니다. 선택 모드에서도 Shift + 드래그로 지울 수 있습니다. |
| <strong>대칭(Symmetry)</strong> | Root Object 기준 X / Y / Z 반대편의 정점도 함께 선택하거나 해제합니다. 여러 축을 동시에 사용할 수 있습니다. |

| 조작 | 동작 |
| --- | --- |
| <strong>Shift + 마우스 휠</strong> | 브러시 반경 조절 |
| <strong>Esc</strong> | 진행 중인 브러시 드래그 취소 |

단축키는 Scene View에서 사용합니다. macOS에서는 Ctrl 대신 Command를 사용할 수 있습니다.

브러시 강도와 가중치 방식, 기준 Mesh 옵션은 사용하지 않습니다. <strong>미리보기 켜기(Preview On)</strong>에서 수축 결과를 확인하며 선택 범위를 조절해 주세요.

## [4] 편집 결과 저장

편집 후 필요한 경우 [Weight 재계산과 PhysBone 재정렬](../mesh-editing/#3-weight-재계산과-physbone-재정렬)을 진행합니다. [저장과 Mesh 분리](../mesh-editing/#4-저장과-mesh-분리)에서 Mesh 또는 BlendShape로 저장하는 방법을 확인해 주세요.
