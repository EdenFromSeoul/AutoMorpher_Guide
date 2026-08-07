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

### SEO / AEO / GEO 스키마 보강 및 스킬 교체

**변경 파일**: `lib/seo.ts`, `app/layout.tsx`, `app/[lang]/docs/[slug]/page.tsx`, `app/[lang]/reviews/page.tsx`, `app/[lang]/page.tsx`, `lib/home-copy.ts`, `.agents/skills/`

#### 스키마 추가
- **Organization JSON-LD** — `app/layout.tsx` 전역 삽입. Eden Labs 브랜드 엔티티 선언 (name, url, logo, sameAs)
- **FAQPage JSON-LD (FAQ 문서 페이지)** — `/docs/faq/` 마크다운을 파싱해 Q&A 추출 후 스키마 자동 생성. `slug === "faq"`일 때만 적용
- **ItemList JSON-LD (후기 페이지)** — `X_REVIEW_POSTS` 목록 기반으로 `/reviews/` 페이지에 삽입

#### html lang 수정
- `app/layout.tsx`의 `<html lang="ja">` 제거 → `<html>`(lang 없음)
- `app/[lang]/layout.tsx`의 JS 스크립트가 이미 동기적으로 올바른 lang 설정 중
- ko·en 페이지 정적 HTML에 `lang="ja"`가 잘못 들어가는 문제 해결

#### 챕터 마크 다국어화
- `app/[lang]/page.tsx`의 `"Verified voices"`, `"Documentation"` 하드코딩 제거
- `lib/home-copy.ts`에 `reviews.label`, `docs.label` 필드 추가
  - ko: "이용자 후기", "가이드 문서"
  - ja·en: "Verified voices", "Documentation" 유지

#### SEO/GEO 스킬 교체 (`.agents/skills/`)
- 기존 `geo/`, `geo-audit/`, `geo-llmstxt/`, `geo-schema/`, `geo-technical/`, `seo-audit/` 삭제
- **SNLabat/SEO-GEO-AEO-Skill** 설치 (`seo-geo-aeo/SKILL.md`)
  - SEO + GEO + AEO 통합 단일 스킬, Python 의존성 없음
  - 기존 팀장님 `seo-audit/`은 `D:\GuidePage\_skills_backup\` 에 백업

### UI 및 CSS 개선
**변경 파일**: `app/globals.css`, `app/[lang]/page.tsx`, `app/[lang]/reviews/page.tsx`

#### 폰트 크기 조정
- `product-kicker`: 12px → 20px
- `chapter-mark`: 11px → 13px
- 히어로 캡션(`hero-caption`): 11px → 13px
- 랜딩 버튼(`button`): 13px → 15px
- Quick Guide 단계 설명(`quick-guide-list p`): 13px → 15px
- Docs 카드 설명(`resource-accordions p`): 13px → 15px
- FAQ 답변(`faq-list details > p`): 14px → 16px

#### 일본어 전용 줄간격 재정의 (`:lang(ja)`)
- `cinematic-hero h1`: `line-height: 1.3`
- `chapter-heading h2`, `landing-action h2`, `manual-fitting-heading h2`: `line-height: 1.4`
- `hero-lede`: `line-height: 1.9`
- `quick-guide-list p`: `line-height: 1.8`
- `faq-list details > p`: `line-height: 2.0`
- `manual-fitting-copy h3`: `line-height: 1.35` (줄바꿈 타이틀 간격 조정)

#### Testimonial 캐러셀 컨트롤 버튼 재배치
- 컨트롤 버튼을 슬라이드 영역 좌우 중앙에 절대 위치로 배치
- 버튼 배경 흰색, 그림자 추가, 폰트 크기 21px
- `.testimonial-carousel`에 `position: relative` 추가

#### Hero 이미지 오버레이·필터 제거
- `hero-editorial-frame::before` (어두운 오버레이) 제거
- `img`에 적용된 `filter: saturate / contrast / brightness` 및 hover 효과 제거

#### 기타 레이아웃
- Testimonial 카드 `max-height: 800px` 제한 추가
- `reviews-page-link` 여백 조정 (`margin: 42px auto 0` → `32px auto 36px`)
- 랜딩 페이지 reviews 섹션: 더 보기 링크 위치를 캐러셀 **위**로 이동
- 후기 페이지 히어로 타이틀에서 인라인 이미지(`<i>`) 제거
- `quick-guide-section h2`, `hero-lede`: `white-space: pre-line` 추가
- `reviews-shop-copy > span`: `white-space: pre-line` 추가 (줄바꿈 문구 대응)

---

## 진행 예정

- [ ] 전체 텍스트 크기·문맥 검토
- [ ] Cloudflare 도메인 확정 후 `public/llms.txt` URL 업데이트
