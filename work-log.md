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

- 기존 중복 포스트 정리 후 허락받은 포스트만 수집
- 최종 15개 포스트 등록 (추가될 때마다 갱신)

| # | 계정 |
|---|---|
| 1 | @noinourat |
| 2 | @mizuki_vrc_ |
| 3 | @SnowSkyFireWork |
| 4 | @kyon_gdgd |
| 5 | @jiisoo_chan |
| 6 | @ERR0R4444_ |
| 7 | @MayaSirFish |
| 8 | @9railu |
| 9 | @NabiVRC |
| 10 | @ToruvaVRC |
| 11 | @kyon_gdgd |
| 12 | @noinourat |
| 13 | @salenavrc |
| 14 | @tayuta_vrc |
| 15 | @penta_vrc |

### 후기 페이지 ReviewsFeed 컴포넌트 및 레이아웃 개선
**변경 파일**: `components/ReviewsFeed.tsx` (신규), `app/globals.css`, `lib/reviews-copy.ts`, `app/[lang]/reviews/page.tsx`

- `ReviewsFeed` 컴포넌트 신규 생성
  - 처음 12개만 표시 후 **더보기 버튼**으로 추가 12개씩 로드
  - X 포스트 순서는 `x-review-posts.ts` 배열 순서로 제어
- 레이아웃: CSS columns → **CSS Grid** (`repeat(4, 1fr)`) 변경
  - 더보기 클릭 시 기존 포스트 재배치 문제 해결
- `reviews-copy.ts`에 `loadMore` 다국어 필드 추가 (ja: もっと見る / ko: 더보기 / en: Load more)

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
