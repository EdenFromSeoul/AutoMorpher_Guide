# Preset 파일 가이드 캡처와 Figma 원본

작성일: 2026-10-27

## 촬영과 편집

- Unity 2022.3.22f1의 `VRCLabProcject`에서 실제 Kisetter 3.5.2 UI를 촬영했다. Kisetter 표시 언어는 일본어다.
- 사용자가 조정한 Unity 창 위치를 유지했다. Scene 카메라, 아바타 배치, 창 크기, 언어는 변경하지 않았다. 이 안내에는 UI만 사용한다.
- 화면 파일 불러오기와 내보내기, 목록 필터와 선택, 이름 중복과 별도 이름 저장, 성공 안내를 실제로 열어 촬영했다. 적용 버튼은 촬영만 했으며 현재 아바타에 프리셋을 적용하지 않았다.
- 실제 캡처를 Figma 이미지 레이어로 배치하고, 버튼 강조는 별도의 편집 가능한 빨간 사각형 벡터로 작성했다. 새로운 래스터 텍스트나 이미지 생성은 사용하지 않았다.
- Figma에서 내보낸 PNG를 무손실 WebP로 변환했다. 변환 전후 RGBA 픽셀이 동일한지 확인했다.
- 실제 UI 캡처는 일본어 원본을 세 언어에서 공유한다. 본문 버튼 명칭과 대체 텍스트는 각 문서의 언어에 맞췄다. 기존 Unity Export Package 이미지와 다른 가이드 이미지는 유지했다.

## Figma 프레임과 가이드 이미지

모든 프레임은 사용자가 지정한 [Kisetter Guide 섹션](https://www.figma.com/design/roNL2bOGVEJo1pA7xuMGx3/-EDEN--Flowchart---Wireframe?node-id=986-4552)에 있다.

| 안내 | Figma 프레임 | public/media/presets/ 출력 |
| --- | --- | --- |
| 파일 불러오기 열기 | [1168:4618](https://www.figma.com/design/roNL2bOGVEJo1pA7xuMGx3/-EDEN--Flowchart---Wireframe?node-id=1168-4618) | file-import-open-figma.webp |
| 프리셋 선택하기 열기 | [1168:4620](https://www.figma.com/design/roNL2bOGVEJo1pA7xuMGx3/-EDEN--Flowchart---Wireframe?node-id=1168-4620) | file-select-open-figma.webp |
| 파일 내보내기 열기 | [1168:4622](https://www.figma.com/design/roNL2bOGVEJo1pA7xuMGx3/-EDEN--Flowchart---Wireframe?node-id=1168-4622) | file-export-open-figma.webp |
| 적용 목록 | [1168:4866](https://www.figma.com/design/roNL2bOGVEJo1pA7xuMGx3/-EDEN--Flowchart---Wireframe?node-id=1168-4866) | file-select-list-figma.webp |
| 내보내기 목록 | [1168:4868](https://www.figma.com/design/roNL2bOGVEJo1pA7xuMGx3/-EDEN--Flowchart---Wireframe?node-id=1168-4868) | file-export-list-figma.webp |
| 이름 중복 | [1168:4870](https://www.figma.com/design/roNL2bOGVEJo1pA7xuMGx3/-EDEN--Flowchart---Wireframe?node-id=1168-4870) | file-import-conflict-figma.webp |
| 이름 변경 저장 | [1168:4872](https://www.figma.com/design/roNL2bOGVEJo1pA7xuMGx3/-EDEN--Flowchart---Wireframe?node-id=1168-4872) | file-import-rename-figma.webp |
| 불러오기 완료 | [1168:4884](https://www.figma.com/design/roNL2bOGVEJo1pA7xuMGx3/-EDEN--Flowchart---Wireframe?node-id=1168-4884) | file-import-complete-figma.webp |
| 내보내기 완료 | [1168:4886](https://www.figma.com/design/roNL2bOGVEJo1pA7xuMGx3/-EDEN--Flowchart---Wireframe?node-id=1168-4886) | file-export-complete-figma.webp |

## 로컬 원본과 재촬영

- 원본 캡처: `outputs/preset-file-guide/*-ja.png`
- 메인 UI 캡처: 2546 × 1383. UI 크롭 범위는 `(1033, 310, 1834, 727)`이며 결과는 801 × 417이다. 팝업 캡처는 창 전체를 사용했다.
- Figma PNG와 프레임·PNG 해시 기록: `outputs/preset-file-guide/figma/`
- 수정 전 문서: `outputs/preset-file-guide/before/{ko,ja,en}/presets.md`
- 내보낸 촬영용 파일: `outputs/preset-file-guide/Shinano_Mayo_Normal.ksPreset`
- 중복 처리 촬영에서는 원본을 덮어쓰지 않고 `Normal_GuideExample` 이름으로 추가했다. 촬영 후 생성한 `.asset`과 `.meta` 두 파일만 로컬 백업 후 제거했다. 촬영 전후 기존 Preset 파일들의 SHA-256이 모두 동일함을 확인했다.
- 촬영용 프리셋 백업과 기존 파일 해시: `outputs/preset-file-guide/temporary-preset-backup/`, `original-preset-hashes.json`

## 검증과 공개 범위

- `scripts/check-preset-export.mjs`는 세 언어의 문서 구조, 새 Figma 이미지 9개, 기존 이미지 보존, 링크·앵커·언어 전환·사이트맵·기본 경로를 확인한다.
- `next build --webpack` 및 `check-preset-export.mjs`가 `/`와 `/AutoMorpher_Guide`에서 모두 통과했다.
- 실제 브라우저에서 한국어 데스크톱 이미지·접기 안내와 한·일·영 모바일 390px 화면을 확인했다. 세 언어 모두 가로 넘침이 없고, 일본어·영어 페이지의 Preset 이미지 20개도 정상 로딩을 확인했다. QA 캡처는 `outputs/preset-file-guide/preview-*.jpg`에 저장했다.
- 로컬 검토 주소는 `http://127.0.0.1:8765/ko/docs/presets/`다. Windows의 예약 포트 범위에 3000이 포함되어 8765를 사용한다. 정적 서버의 PID와 로그는 `outputs/preset-file-guide/preview.*`에 기록한다.
- 로컬 검토용 수정안이다. Git 커밋·푸시·GitHub Pages 배포는 별도 요청 없이는 하지 않는다.
