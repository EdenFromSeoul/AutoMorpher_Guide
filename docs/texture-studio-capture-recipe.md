# Texture Studio 헤어 확대 재촬영 기록

기록일: 2026-10-23. 사용자가 맞춘 Scene 구도를 유지한 실제 Unity 촬영 기록이다. 한국어·영어 UI 재촬영 시 이 기록과 원본 스크린샷을 기준으로 삼는다.

## 환경과 보관 위치

- Unity: 2022.3.22f1, 프로젝트 창 제목의 실제 표기 `VRCLabProcject`, Scene `DemoScene 2`.
- Kisetter 3.5.0, Texture Studio (Early Access), 촬영 UI Japanese.
- 전체 창: 2552 × 1383. 최소화·창 크기 변경·도킹 변경 없이 촬영했다.
- 왼쪽 Scene, 오른쪽 Kisetter. 원본에서 `(left: 0, top: 80, right: 1905, bottom: 1145)`만 잘라 1905 × 1065 WebP로 저장했다.
- Scene 도킹 영역: `(0, 0, 935, 1066)`, Kisetter: `(935, 0, 970, 1066)`. 도킹 좌표와 전체 창 스크린샷 좌표는 원점이 다르다.
- 원본 및 촬영 매니페스트: `outputs/texture-studio-vrclab-ja/raw/`, `outputs/texture-studio-vrclab-ja/capture-manifest.json`.
- 구도 기준 원본: `raw/hair-closeup-framing.png`, 톤 기준 원본: `raw/hair-shift-baseline-closeup.png`.
- Unity의 Layout → Save Layout to File로 저장한 레이아웃: `outputs/texture-studio-vrclab-ja/hair-closeup-2026-10-23.wlt` (67,090 bytes).
- 이 레이아웃을 다시 불러오는 복원 시험은 하지 않았다. 현재 구도를 보존하기 위해 촬영 중 로드하지 않았다. 레이아웃 파일은 UI/SceneView 상태 참고용이며 Texture 편집 상태를 복원한다고 보장하지 않는다.

## SceneView 상태

아래 값은 레이아웃 파일의 SceneView(`fileID: 20`)에서 읽었다. `m_Position`은 SceneView pivot/orbit 상태이며, GameObject Camera의 Transform 위치로 해석하지 않는다. 보간 중 target과 value가 조금 달라 두 값을 모두 보관한다.

| 필드 | Target | Value |
| --- | --- | --- |
| Position | x -0.35709462, y 1.0018885, z -19.662043 | x -0.35709462, y 1.0018885, z -19.662043 |
| Rotation quaternion | x -0.0005154738, y 1.00012, z -0.0029932624, w -0.009018489 | x -0.0005289046, y 0.9999492, z -0.0044926964, w -0.009016217 |
| Size | 10 | 9.999999 |
| Ortho | 0 | 0 |

- Perspective, 2D 꺼짐, Shaded, Scene Lighting 켜짐, Gizmos 꺼짐, Grid 꺼짐.
- Field of View 60, Near Clip 0.001, Far Clip 10000, Dynamic Clip 꺼짐, Occlusion Culling 꺼짐.
- Camera speed 0.06096999, normalized 0.029999996, min 0.001, max 2; easing 켜짐(0.4), acceleration 켜짐.
- Fog/Skybox/Image Effects/FX 켜짐, ViewIsLockedToObject 꺼짐.
- 전체 화면의 Scene 얼굴·왕관·어깨 위치와 기준 원본을 대조한다. 그라데이션의 긴 트윈테일과 자동 조정 예시는 별도의 기존 넓은 구도이므로 이 확대 구도로 대체하지 않는다.

## 촬영 대상과 값

전체 헤어 예시는 `Hair_Front`를 주 대상으로, `Hair_Head`, `Hair_Side`, `Hair_Twintails`를 함께 조정해 `Hair_Front + 3`을 표시한다. UV 전체 선택, Texture 표시, 편집 결과 미리보기 켜짐, Scene UV 표시 꺼짐으로 촬영했다.

| 파일 접두사 (`-closeup.png`) | 조작 |
| --- | --- |
| hair-setup | 헤어 네 Mesh의 편집 중/함께 조정 목록 |
| hair-before | 원본, 색조 지정 탭 |
| hair-color | 색조 지정 HEX #57AAB8, 진하기 25.9944, 밝기 -18.397, 대비 0, 감마 0 |
| preview-original | 위 색조 지정 값을 유지하고 편집 결과 미리보기만 끔 |
| hair-shift-baseline | 색조 이동 탭, 다섯 값 모두 0 |
| hair-hue-shift | 색조 이동 +120°, 다른 네 값 0 |
| hair-intensity | 진하기 +70, 다른 네 값 0 |
| hair-brightness | 밝기 -25, 다른 네 값 0 |
| hair-contrast | 대비 +60, 다른 네 값 0 |
| hair-gamma | 감마 +60, 다른 네 값 0 |

각 항목은 원본에서 시작했다. 결과 촬영 후 Texture Studio의 실행 취소로 원래 값과 Scene 색상으로 돌아간 것을 확인했다. 마지막 복원 원본은 `raw/hair-restored-closeup.png`다. 원본 Asset·Scene은 저장하지 않았다.

## Hair_Front 파츠별 선택

이 예시는 서로 다른 Mesh가 아니라 `Hair_Front` 하나 안의 세 UV 영역이다. 다른 Mesh는 함께 조정에서 제외한다. 선택 사진은 Scene UV 켜짐, 결과 사진은 꺼짐이다. 이전 영역 선택을 해제한 뒤 다음 영역을 선택하되 이전 색상은 유지한다.

| 단계 | 영역 | 색상 | 파일 |
| --- | --- | --- | --- |
| 1 | 중앙 앞머리 | #C34D3B | hair-parts-center-{selection,color}-closeup.png |
| 2 | 양옆 앞머리 | #3BC821 | hair-parts-sides-{selection,color}-closeup.png |
| 3 | 짧게 휘어진 머리카락 | #D4AC43 | hair-parts-strand-{selection,color}-closeup.png |

원본 창 좌표 참고: 중앙 UV 약 `(1585,767)`, 양옆 UV 약 `(1511,777)`와 `(1683,773)`, 짧은 머리카락은 Scene `(425,374)` 또는 UV 약 `(1633,732)`. 이 좌표는 당시 패널 스크롤 위치에만 유효하다. UI 언어나 스크롤이 바뀐 뒤 그대로 클릭하지 말고 최신 화면에서 대응하는 Island를 확인한다. 중앙 선택/결과 쌍은 다른 두 쌍보다 패널 스크롤이 약 67px 위에 있지만 Scene 구도는 동일하다.

## 다른 언어로 재촬영할 때

1. 현재 사용자 작업과 편집 상태를 먼저 확인한다. Unity를 최소화하거나 창 크기·도킹을 바꾸지 않는다.
2. 같은 프로젝트·Scene·모델·배경·조명을 사용하고 기준 원본과 구도를 비교한다. 레이아웃 복원이 필요하면 현재 레이아웃을 별도로 보관한 뒤 위 `.wlt`를 사용하고 실제 구도를 다시 확인한다.
3. Kisetter 언어를 요청한 언어로 변경한다. Mesh 등록과 Texture 탭, UV 선택, 함께 조정 상태는 별도로 확인한다.
4. 위 표의 값으로 각 예시를 재현하고 촬영한다. 톤 조정은 한 번에 하나의 값만 바꾸며 매번 원본으로 복귀한다.
5. 같은 크롭 좌표를 사용하되 창 크기·패널 경계가 기준과 일치하는지 확인한다. 결과별 원본·언어·입력값을 매니페스트에 추가한다.
6. 원본 Asset·Scene에 촬영용 색상을 저장하지 않는다. 가이드 반영과 외부 공개는 별개이며 현재 요청은 로컬 미리보기만 허용한다.
