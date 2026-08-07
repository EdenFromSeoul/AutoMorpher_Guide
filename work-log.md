# 작업 로그

## 2026-08-07

### origin/main → edit_nunu 병합
- 팀장님 최신 작업 내용을 로컬 브랜치에 반영
- 추가된 주요 파일: `lib/home-copy.ts`, `lib/reviews-copy.ts`, `lib/x-review-posts.ts`, `lib/seo.ts`, `app/[lang]/reviews/page.tsx`, 한·일·영 가이드 문서, 미디어 파일

### CLAUDE.md 생성 및 gitignore 등록
- 작업 지침 및 프로젝트 컨텍스트를 `CLAUDE.md`에 저장
- `.gitignore`에 `CLAUDE.md` 추가 (로컬 전용)

### Booth UTM 링크 설정
**변경 파일**: `lib/site.ts`, `app/[lang]/page.tsx`, `app/[lang]/reviews/page.tsx`

- `LINKS.boothLanding`: 랜딩페이지 버튼용 UTM 링크
  - `utm_source=kisetter_site&utm_medium=referral&utm_campaign=kisetter_landing_page&utm_content=main_page`
- `LINKS.boothReviews`: 후기 페이지 버튼용 UTM 링크
  - `utm_source=kisetter_site&utm_medium=referral&utm_campaign=kisetter_landing_page&utm_content=reviews_page`

| 위치 | 적용 링크 |
|---|---|
| 랜딩페이지 히어로 버튼 | `boothLanding` |
| 랜딩페이지 하단 CTA 버튼 | `boothLanding` |
| 후기 페이지 구매 버튼 | `boothReviews` |
| 헤더·푸터 | 기존 `booth` 유지 (UTM 미적용) |

### X 포스트 목록 업데이트
**변경 파일**: `lib/x-review-posts.ts`

- 기존 4개 포스트가 중복으로 8개 등록된 상태였음
- 중복 4개 슬롯을 새 포스트 URL로 교체 → 총 8개 고유 포스트로 구성

| # | 계정 | URL |
|---|---|---|
| 1 | @EDEN_LABS_JP | `/status/2083417440411673048` |
| 2 | @BuriVrchat | `/status/2084401423081710064` |
| 3 | @Nina_A_A27 | `/status/2083779831960093078` |
| 4 | @noinourat | `/status/2083757459550978477` |
| 5 | @noinourat | `/status/2085345139086750195` |
| 6 | @9railu | `/status/2083428895194501501` |
| 7 | @MayaSirFish | `/status/2083750887001125277` |
| 8 | @Komine_Shion | `/status/2083537287896596753` |

---

### GEO(AI 검색 최적화) 작업

**변경 파일**: `public/llms.txt` (신규), `lib/seo.ts`

#### llms.txt 생성
- AI 크롤러(ChatGPT, Perplexity 등)에게 사이트 구조와 제품 정보를 안내하는 파일
- 영어+일본어 혼용으로 작성 (AI 검색 범용성 확보)
- 현재 URL: GitHub Pages 기준 (`edenfromseoul.github.io/AutoMorpher_Guide`)
- **⚠️ Cloudflare 도메인 확정 후 파일 내 URL 일괄 업데이트 필요**

#### SoftwareApplication 스키마 offers 필드 추가
- 가격 정보를 구조화 데이터에 등록 → Google/AI가 가격 인식 가능
- 단품 1,500 JPY / Full Set 2,500 JPY 2개 플랜 등록

#### GEO 스킬 파일 추가 (`.agents/skills/`)
- `geo/`, `geo-audit/`, `geo-llmstxt/`, `geo-schema/`, `geo-technical/`
- TheSmokeDev/geo-skills (MIT) 기반

## 진행 예정

- [ ] 전체 텍스트 크기·문맥 검토
- [ ] Cloudflare 도메인 확정 후 `public/llms.txt` URL 업데이트
