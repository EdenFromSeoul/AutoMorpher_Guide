# Texture Studio 안내 이미지의 Figma 원본

작성일: 2026-10-23

사용자 지정 위치: [[EDEN] Flowchart & Wireframe → Workspace - Ew → Kisetter Guide](https://www.figma.com/design/roNL2bOGVEJo1pA7xuMGx3/-EDEN--Flowchart---Wireframe?node-id=986-4552)

## 편집 원칙

- 가이드 이미지의 제목·설명·번호는 **Figma의 편집 가능한 TEXT 레이어**로 작성한다. 이미지 생성 모델이나 래스터 문자 합성으로 안내 문구를 만들지 않는다.
- 실제 Unity UI는 촬영 원본을 이미지 레이어로 넣는다. 테두리와 화살표는 별도 벡터 레이어다.
- 문구 묶음에는 Auto Layout을 사용한다. 텍스트는 폭을 고정하고 높이를 자동으로 늘리며, 행간 150%와 내부 여백을 확보한다.
- 한국어 Noto Sans KR, 일본어 Noto Sans JP, 영어 Geist의 Regular/Bold를 사용한다.
- 텍스트 수정 후 폰트 누락·프레임 경계·줄바꿈·화살표 위치를 확인하고 **Figma 렌더 결과를 다시 내보낸다**.
- PNG를 WebP로 변환할 때는 무손실 인코딩만 수행한다. 텍스트를 다시 그리거나 합성하지 않는다.
- 웹 페이지 본문과 안내 문구는 각 페이지 언어의 UI 명칭을 따른다. 실제 Unity UI 캡처는 현재 일본어다.

## 프레임과 출력 파일

| 안내 | 언어 | Figma 프레임 | 가이드 이미지 |
| --- | --- | --- | --- |
| 기준점·목표점 | 한국어 | [Auto Color · KO](https://www.figma.com/design/roNL2bOGVEJo1pA7xuMGx3/-EDEN--Flowchart---Wireframe?node-id=988-4552) | auto-color-points-figma-ko.webp |
| 기준점·목표점 | 일본어 | [Auto Color · JA](https://www.figma.com/design/roNL2bOGVEJo1pA7xuMGx3/-EDEN--Flowchart---Wireframe?node-id=988-4812) | auto-color-points-figma-ja.webp |
| 기준점·목표점 | 영어 | [Auto Color · EN](https://www.figma.com/design/roNL2bOGVEJo1pA7xuMGx3/-EDEN--Flowchart---Wireframe?node-id=988-4835) | auto-color-points-figma-en.webp |
| 그라데이션 팔레트 | 한국어 | [Gradient Palette · KO](https://www.figma.com/design/roNL2bOGVEJo1pA7xuMGx3/-EDEN--Flowchart---Wireframe?node-id=988-4858) | gradient-open-palette-figma-ko.webp |
| 그라데이션 팔레트 | 일본어 | [Gradient Palette · JA](https://www.figma.com/design/roNL2bOGVEJo1pA7xuMGx3/-EDEN--Flowchart---Wireframe?node-id=988-4879) | gradient-open-palette-figma-ja.webp |
| 그라데이션 팔레트 | 영어 | [Gradient Palette · EN](https://www.figma.com/design/roNL2bOGVEJo1pA7xuMGx3/-EDEN--Flowchart---Wireframe?node-id=988-4896) | gradient-open-palette-figma-en.webp |

자동 조정 프레임에는 편집 가능한 텍스트가 각 9개, 그라데이션 프레임에는 각 5개 있다. 프레임 6개와 원본 UI 이미지 묶음은 모두 사용자가 지정한 `Kisetter Guide` Section 안에 배치했다.

## 파일 위치와 재반영

- 웹 이미지: `public/media/texture-studio/`.
- Figma에서 내려받은 PNG와 프레임 정보: `outputs/texture-studio-vrclab-ja/figma/`.
- Figma 내보내기 기록: `figma/frames.json`의 파일 키·노드 ID·프레임 링크·PNG SHA-256.
- 가이드 반영: `outputs/texture-studio-vrclab-ja/integrate-figma-annotations.py`. 이 스크립트는 Figma PNG의 무손실 WebP 변환과 문서 경로 연결만 수행한다.
- 이전 `annotate-auto-points.py`, `annotate-gradient-palette.py`의 문자 그리기 방식은 더 이상 안내 이미지 제작에 사용하지 않는다.
- 위 두 스크립트는 실행 시 종료하도록 처리했다. 이전 `auto-color-points-{ko,ja,en}.webp`, `gradient-open-palette-{ko,ja,en}.webp` 주소도 같은 Figma 캡처본을 제공한다. 현재 문서는 `-figma-` 이름을 사용한다.
- 원본 Unity 캡처 크롭과 Scene 촬영 기록은 그대로 보관한다. 이번 작업에서 Unity는 조작하지 않았다.

Figma 파일 편집과 로컬 미리보기만 수행한다. GitHub 커밋·푸시·웹 외부 배포는 별도 요청 없이는 하지 않는다.

## 전체 가이드 적용 범위

이 제작 방식은 Texture Studio에만 한정하지 않는다. 다른 기능의 새 안내 이미지와 기존 이미지 수정, 한국어·일본어·영어 안내 이미지에 동일하게 적용한다. 지속 적용 규칙은 프로젝트 `AGENTS.md`에 기록했다.

2026-10-23에 `content` 문서 75개와 `public/media` 이미지 196개의 참조·미리보기를 점검했다. 이번 Texture Studio 제작에서 별도 문구를 그려 만든 안내는 자동 조정 기준점·목표점과 그라데이션 팔레트 열기 2종이며, 세 언어 모두 위 Figma 원본과 연결되어 있다. 앞머리 파츠 선택, 색조 이동, 전후 결과 등은 실제 Unity 촬영본이고 제목·설명은 페이지의 HTML 텍스트다.

기존 Mesh Studio·피팅 등의 문서에는 이전부터 포함된 테두리·화살표·비교 문구 이미지가 있다. 이 파일들의 원래 제작 도구는 확인되지 않았으므로 이미지 생성 모델로 만든 파일이라고 단정하지 않는다. 이 기록은 기존 자료 전체를 Figma로 재제작했다는 의미가 아니다.

사용자가 최종 지정한 이번 작업 범위는 **Texture Studio만**이다. Mesh Studio와 의상 자동 대응(사용자가 제작한 이미지)을 포함한 다른 기존 가이드는 변경하지 않는다.

## 검증 완료

6개 프레임의 실제 Figma PNG를 시각 검수했다. TEXT 레이어의 폰트 누락·프레임 밖 배치가 없고 자동 높이를 사용한다. 루트·저장소 하위 경로 정적 빌드와 12페이지의 이미지·링크 검사가 통과했다. 안내 이미지가 있는 6페이지를 1440px·390px·320px로 확인했으며 이미지 확대와 가로 넘침 검사도 통과했다.

## 자동 조정 예시의 실제 선택점 표시

2026-10-23 추가: 버튼 위치 안내에 더해, 자동 조정 하위 페이지의 의상 선택 화면·의상 결과·헤어 결과에 실제 선택점을 표시했다. 세 언어 각각 제작하여 9개 프레임을 추가했다. 이전 6개와 합쳐 총 15개다.

- 파란색 ①: 색을 바꿀 Mesh의 기준점. Scene와 UV의 동일한 선택점을 모두 표시한다.
- 주황색 ②: 색을 가져올 소매의 목표점(`UV2_Onepiece_Inner`).
- 의상 기준점: `UV1_Onepiece_Outer`, UV `(0.275, 0.803)`.
- 헤어 기준점: `Hair_Front`, UV `(0.436, 0.741)`.
- 목표점: `UV2_Onepiece_Inner`, UV `(0.808, 0.593)`.
- 원본 Scene/UI 전체 구도를 유지하고 Figma의 TEXT·Ellipse·Vector 레이어로 라벨·원·연결선을 덧붙였다. 프레임당 편집 가능한 TEXT 7개, 크기 2001×1400.
- 추가 원본·PNG·프레임 링크·선택점 좌표·해시: `outputs/texture-studio-vrclab-ja/figma-examples/frames.json`.
- 반영 스크립트: `outputs/texture-studio-vrclab-ja/integrate-figma-examples.py`. Figma PNG를 무손실 WebP로 변환하고 세 언어의 `texture-studio-auto-color.md`에 연결한다.

| 예시 | 언어 | Figma 원본 | 가이드 이미지 |
| --- | --- | --- | --- |
| 의상 선택점 | 한국어 | [Figma 프레임](https://www.figma.com/design/roNL2bOGVEJo1pA7xuMGx3/-EDEN--Flowchart---Wireframe?node-id=993-4792) | outfit-auto-points-annotated-figma-ko.webp |
| 의상 조정 결과 | 한국어 | [Figma 프레임](https://www.figma.com/design/roNL2bOGVEJo1pA7xuMGx3/-EDEN--Flowchart---Wireframe?node-id=993-4795) | outfit-auto-annotated-figma-ko.webp |
| 헤어 조정 결과 | 한국어 | [Figma 프레임](https://www.figma.com/design/roNL2bOGVEJo1pA7xuMGx3/-EDEN--Flowchart---Wireframe?node-id=993-4798) | hair-auto-annotated-figma-ko.webp |
| 의상 선택점 | 일본어 | [Figma 프레임](https://www.figma.com/design/roNL2bOGVEJo1pA7xuMGx3/-EDEN--Flowchart---Wireframe?node-id=995-4552) | outfit-auto-points-annotated-figma-ja.webp |
| 의상 조정 결과 | 일본어 | [Figma 프레임](https://www.figma.com/design/roNL2bOGVEJo1pA7xuMGx3/-EDEN--Flowchart---Wireframe?node-id=995-4574) | outfit-auto-annotated-figma-ja.webp |
| 헤어 조정 결과 | 일본어 | [Figma 프레임](https://www.figma.com/design/roNL2bOGVEJo1pA7xuMGx3/-EDEN--Flowchart---Wireframe?node-id=995-4596) | hair-auto-annotated-figma-ja.webp |
| 의상 선택점 | 영어 | [Figma 프레임](https://www.figma.com/design/roNL2bOGVEJo1pA7xuMGx3/-EDEN--Flowchart---Wireframe?node-id=995-4618) | outfit-auto-points-annotated-figma-en.webp |
| 의상 조정 결과 | 영어 | [Figma 프레임](https://www.figma.com/design/roNL2bOGVEJo1pA7xuMGx3/-EDEN--Flowchart---Wireframe?node-id=995-4640) | outfit-auto-annotated-figma-en.webp |
| 헤어 조정 결과 | 영어 | [Figma 프레임](https://www.figma.com/design/roNL2bOGVEJo1pA7xuMGx3/-EDEN--Flowchart---Wireframe?node-id=995-4662) | hair-auto-annotated-figma-en.webp |

추가 9개 프레임도 실제 Figma PNG로 시각 검수했으며 폰트 누락·프레임 밖 텍스트가 없다. 변환한 WebP는 PNG와 픽셀이 일치한다. 루트 및 `/AutoMorpher_Guide` 경로의 프로덕션 빌드와 정적 검사(12페이지, 이미지 참조 123개, 링크 984개)가 통과했다. 세 언어 페이지에서 새 이미지 9개 로딩, 언어별 대표 이미지 확대, 데스크톱·390px 화면의 가로 넘침을 확인했다. 검증 후 브라우저 크기 설정을 복원하고 한국어 예시를 열어 두었다.

2026-10-23 문구 검토에서 자동 조정 12개 프레임의 중복 안내를 줄이고, 일본어 예시 라벨을 `基準点`·`参照点`으로 통일했다. 노드와 이미지 경로는 유지했다. Figma에서 다시 캡처한 PNG를 무손실 WebP로 반영했으며, 변경한 TEXT의 폰트 누락과 프레임 밖 배치가 없음을 확인했다. 최신 문구는 `outputs/texture-studio-vrclab-ja/copy-review-figma.json`에 기록했다.
