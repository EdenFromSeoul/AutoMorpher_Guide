# nunu_26.09.18

## 작업 목적

Manual Fitting Mode 기능이 당분간 사용되지 않을 예정이므로, 관련 페이지와 연결 경로를 비활성화했습니다. 나중에 기능이 복구될 수 있도록 Manual Fitting 문서와 이미지 파일은 삭제하지 않았습니다.

## 작업 내용

### 1. 가이드 내용 이동

- `content/ko/manual-fitting.md`의 `7. 본 조정 진행`부터 `조정이 완료되면 아래 버튼을 눌러 대응을 진행해 주세요.`까지의 내용과 이미지를 제거했습니다.
- 해당 내용을 `content/ko/auto-fitting.md`의 하단으로 이동했습니다.

### 2. Manual Fitting 문서 중앙 비활성화

- `lib/doc-status.ts`에 비활성 문서 slug를 중앙 관리하도록 추가했습니다.
- 현재 비활성 slug는 `manual-fitting`입니다.
- `lib/content.ts`에서 비활성 문서를 문서 목록과 검색 인덱스에서 제외하도록 했습니다.
- 이에 따라 다음 경로에서 Manual Fitting 페이지가 노출되지 않습니다.
  - 문서 사이드바와 모바일 문서 메뉴
  - 검색 결과
  - 문서 이전/다음 버튼
  - 정적 경로 생성
  - `sitemap.xml`

### 3. 연결 링크 비활성화

- Markdown 본문에서 `manual-fitting`으로 연결되는 내부 링크를 클릭할 수 없는 비활성 텍스트로 표시합니다.
- 홈의 비활성 문서 카드는 남겨두되 이동할 수 없는 비활성 상태로 표시합니다.
- Manual Fitting 페이지의 직접 URL은 정적 경로에서 제외되어 접근할 수 없습니다.

### 4. Mesh 편집 가이드 자리 준비

- 한국어 홈의 비활성 카드 제목을 `Mesh 편집 가이드`로 변경했습니다.
- 설명은 `변환 후 Mesh를 직접 조정하는 방법`으로 설정했습니다.
- 일본어 홈에는 `メッシュ編集ガイド`와 `変換後のメッシュを直接調整する方法`을 적용했습니다.
- 영어 홈에는 `Mesh Editing Guide`와 `How to edit the mesh directly after conversion`을 적용했습니다.
- 새 카드의 slug는 `mesh-editing`으로 지정했지만, 아직 문서와 가이드 내용은 만들지 않았습니다.
- 기존 Manual Fitting 문서의 메시 편집 내용을 별도 문서로 분리하지 않았습니다.
- `mesh-editing`도 비활성 slug로 관리하여 현재는 회색 상태를 유지합니다.

### 5. 문서 보존

- `content/ko/manual-fitting.md`
- `content/ja/manual-fitting.md`
- `content/en/manual-fitting.md`

위 문서와 관련 이미지 파일은 삭제하지 않았습니다.

### 6. 랜딩페이지 정리

- 랜딩페이지의 `Manual Fitting Mode` 소개 섹션을 제거했습니다.
- 섹션 안의 본 조정, 메시 수정 카드와 관련 설명·영상 노출을 함께 제거했습니다.
- 랜딩페이지의 `MANUAL FITTING` 마키 문구와 `Auto / Manual Fitting` 캡션도 제거했습니다.
- 관련 가이드 문서와 영상 파일은 삭제하지 않고 보존했습니다.

## 나중에 다시 활성화하는 방법

`lib/doc-status.ts`에서 필요한 slug를 비활성 목록에서 제거하면 됩니다.

```ts
const DISABLED_DOC_SLUGS = new Set([]);
```

## 확인 결과

- 로컬 개발 서버: `http://localhost:3000/`
- `pnpm build`: 성공
- Manual Fitting 직접 경로: 404 처리
- 문서 본문 내부 Manual Fitting 링크: 비활성 텍스트 처리

### 7. 모드 구분이 사라진 자동 대응 흐름 반영

- `Auto Fitting Mode`와 `Manual Fitting Mode`를 하나의 자동 의상 대응 흐름으로 통합했습니다.
- 기본값은 자동 대응으로 안내하고, 필요한 경우에만 **사전 조정 진행**을 선택하도록 세 언어 문서를 수정했습니다.
- 한국어·일본어·영어의 `auto-fitting`, `getting-started`, `how-kisetter-works` 문서를 함께 갱신했습니다.
- 기존 Manual Fitting 문서로 연결되던 안내와 모드 비교표는 제거했습니다.

### 8. 옵션명과 관련 문구 갱신

- 사전 조정 옵션명을 언어별 실제 UI 표기에 맞췄습니다.
  - 한국어: `사전 조정 skip`, `사전 조정 진행`
  - 일본어: `事前調整をスキップ`, `事前調整を行う`
  - 영어: `Skip Pre-adjustment`, `Enable Pre-adjustment`
- 신발 옵션을 `신발 형태 유지` / `靴の形状を維持` / `Preserve Shoe Shape` 중심으로 정리했습니다.
- 품질 팁, FAQ, 파라미터 설명, 문의 문서의 기존 모드 표현도 새 구조에 맞게 수정했습니다.

### 9. 홈페이지와 문서 메타데이터 갱신

- 홈페이지의 자동 대응 카드·캡션·CTA를 새 명칭으로 변경했습니다.
- `public/llms.txt`에서 Manual Fitting 설명과 링크를 제거했습니다.
- Notion import 목록에서 Manual Fitting 페이지를 제외하고 자동 대응 가이드의 제목과 설명을 갱신했습니다.

### 10. 최신 옵션 화면 이미지 반영

- 기존 `Skip Foot Fitting` 체크박스 이미지 대신 최신 UI 스크린샷을 사용하도록 변경했습니다.
- 한국어·일본어·영어 파라미터 문서에 각각 해당 언어의 옵션 화면을 연결했습니다.
- 기존 이미지는 삭제하지 않고 보존했습니다.

### 11. 최종 확인

- `pnpm build`: 성공
- 정적 경로 44개 생성 확인
- 원격 버전 동기화가 불가능한 환경에서도 기존 버전 `3.1.1` fallback으로 빌드 성공
- 현재 사용자 노출 영역에서 Auto/Manual Fitting 모드 표현이 검색되지 않음을 확인했습니다.
