---
title: "복원 브러시"
slug: "mesh-editing-restore"
category: "사용 가이드"
description: "BlendShape에 기록된 형태를 기준으로 변형된 부분을 복원합니다."
order: 32
version: "3.4.1"
parent: "mesh-editing"
---

<strong>복원 브러시(Restore Brush)</strong>는 원래 형태를 기록한 BlendShape를 참고하여 변형된 부분을 복원합니다. Main Mesh에서 사용할 수 있는 BlendShape를 지정해야 합니다.

<figure>
  <video controls preload="metadata" width="870" height="754" style="height: auto; aspect-ratio: 870 / 754;" playsinline aria-label="복원 브러시 사용 예시"><source src="{{BASE_PATH}}/media/mesh-studio/restore.mp4" type="video/mp4" /><a href="{{BASE_PATH}}/media/mesh-studio/restore.mp4">동영상 파일 열기</a></video>
  <figcaption>복원 브러시 사용 예시</figcaption>
</figure>

<div class="doc-media-grid doc-media-grid-2">
  <figure><img src="{{BASE_PATH}}/media/mesh-studio/restore-before.png" alt="복원 전" width="868" height="738" loading="lazy" /><figcaption>복원 전</figcaption></figure>
  <figure><img src="{{BASE_PATH}}/media/mesh-studio/restore-after.png" alt="복원 후" width="838" height="744" loading="lazy" /><figcaption>복원 후</figcaption></figure>
</div>

<img src="{{BASE_PATH}}/media/mesh-studio/restore-settings.png" alt="복원 BlendShape, 복원 기준, 복원 모드 설정" width="525" height="234" loading="lazy" />

## [1] 사용 방법

1. <strong>블렌드셰이프(BlendShape)</strong>에서 복원의 기준으로 사용할 항목을 선택합니다.
2. <strong>복원 기준(Restore Reference)</strong>에서 `0` 또는 `100`을 선택합니다.
3. <strong>복원 모드(Mode)</strong>를 선택합니다.
4. 반경과 강도를 조절한 뒤 Main Mesh 위를 마우스 왼쪽 버튼으로 드래그합니다.

## [2] 브러시 설정

| 옵션 | 설명 |
| --- | --- |
| <strong>브러시 반경(Brush Radius)</strong> | 커서 주변에서 형태를 복원할 범위를 조절합니다. |
| <strong>브러시 강도(Brush Strength)</strong> | 선택한 복원 모드와 BlendShape 기준 형태를 따라 복원되는 강도를 조절합니다. 낮은 강도로 여러 번 드래그하면 변화를 조금씩 확인할 수 있습니다. |
| <strong>대칭(Symmetry)</strong> | X / Y / Z 중 적용할 축을 선택하면 Root Object 기준으로 반대편에도 작업을 적용합니다. 여러 축을 동시에 선택할 수 있습니다. |

| 조작 | 동작 |
| --- | --- |
| <strong>Shift + 마우스 휠</strong> | 브러시 반경 조절 |
| <strong>Ctrl + Shift + 마우스 휠</strong> | 브러시 강도 조절 |
| <strong>Caps Lock을 켠 상태에서 Shift + 마우스 휠</strong> | 브러시 강도 조절 |
| <strong>Esc</strong> | 진행 중인 브러시 드래그 취소 |

단축키는 Scene View에서 사용합니다. macOS에서는 Ctrl 대신 Command를 사용할 수 있습니다.

## [3] 복원 기준

| 복원 기준 | 사용하는 형태 |
| --- | --- |
| <strong>0</strong> | 선택한 BlendShape의 값이 0인 형태 |
| <strong>100</strong> | 선택한 BlendShape의 값이 100인 형태 |

복원 기준을 만들 때 다른 BlendShape는 0으로 계산합니다. 현재 Inspector에 보이는 여러 BlendShape의 혼합 결과와 기준 형태가 다를 수 있으므로, 원하는 원형이 어느 값에 기록되어 있는지 확인해 주세요.

자동 선택 시 <strong>MF_Origin이 있으면 100</strong>, 없으면 <strong>Kisetter_Fit을 0</strong>으로 선택합니다. 두 항목이 모두 없다면 직접 선택해야 합니다. 다른 BlendShape를 직접 고를 때는 복원 기준도 함께 확인해 주세요.

## [4] 복원 모드

| 복원 모드 | 설명 |
| --- | --- |
| <strong>원형 복원(Original Shape Restore)</strong> | 기준 형태와 현재 형태의 차이를 주변 정점에 맞춰 부드럽게 보정합니다. |
| <strong>형태 복원(Shape Restore)</strong> | 기준 형태를 현재 위치와 방향에 맞춰 복원합니다. 브러시 안에서 원본상 가까운 조각의 상대 배치도 함께 복원합니다. |

숨긴 정점과 브러시 범위 밖의 정점은 고정됩니다. 넓게 변형된 부분은 반경을 조금씩 넓혀 확인하고, 유지하고 싶은 부분은 먼저 숨겨 주세요.

## [5] 편집 결과 저장

편집 후 필요한 경우 [Weight 재계산과 PhysBone 재정렬](../mesh-editing/#3-weight-재계산과-physbone-재정렬)을 진행합니다. [저장과 Mesh 분리](../mesh-editing/#4-저장과-mesh-분리)에서 Mesh 또는 BlendShape로 저장하는 방법을 확인해 주세요.
