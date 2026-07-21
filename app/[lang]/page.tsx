import { notFound } from "next/navigation";
import { BASE_PATH, isLanguage, LINKS, VERSION } from "@/lib/site";

const features = [
  { icon: "◇", title: "자동 의상 대응", text: "아바타 체형에 맞춰 의상의 Bone, Mesh, Weight를 자동으로 조정합니다." },
  { icon: "⌁", title: "정교한 수동 보정", text: "Manual Fitting Mode에서 본을 직접 조정해 원하는 실루엣을 완성합니다." },
  { icon: "◈", title: "BlendShape 도구", text: "변형 결과 저장부터 아바타 BlendShape의 의상 추가와 일괄 제어까지 지원합니다." },
];

const steps = [
  ["01", "Source 준비", "원본 아바타와 대응 의상을 Scene에 배치합니다."],
  ["02", "Target 선택", "의상을 입힐 Humanoid 아바타를 설정합니다."],
  ["03", "Fitting 실행", "자동 또는 수동 모드로 변형을 진행합니다."],
  ["04", "결과 확인", "관통과 형태를 확인하고 필요하면 옵션을 조정합니다."],
];

export default async function LanguageHomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();

  return (
    <main>
      <section className="hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-copy">
          <span className="eyebrow">Eden Labs · Unity Editor Tool</span>
          <h1>아바타 의상 대응을<br /><em>더 빠르고 정교하게.</em></h1>
          <p>
            Auto Morpher는 Unity Humanoid 아바타 사이의 체형 차이를 분석해
            의상 Bone, Mesh, Weight를 자동으로 조정합니다.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={`${BASE_PATH}/${lang}/docs/getting-started/`}>가이드 시작하기 <span>→</span></a>
            <a className="button secondary" href={LINKS.booth} target="_blank" rel="noreferrer">Booth에서 다운로드 ↗</a>
          </div>
          <div className="hero-meta">
            <span><strong>v{VERSION}</strong> 최신 가이드</span>
            <span><strong>Unity</strong> Humanoid</span>
            <span><strong>Windows · Linux</strong></span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-frame">
            <img src={`${BASE_PATH}/assets/brand/automorpher-thumbnail.jpg`} alt="Auto Morpher 대표 이미지" />
          </div>
          <div className="floating-note note-top"><span>Auto</span> Bone · Mesh · Weight</div>
          <div className="floating-note note-bottom"><span>3.0.7</span> Official Guide</div>
        </div>
      </section>

      <section className="trust-strip" aria-label="주요 지원 기능">
        <span>Auto Fitting</span><i />
        <span>Manual Fitting</span><i />
        <span>BlendShape Generator</span><i />
        <span>Profile Workflow</span>
      </section>

      <section className="home-section feature-section">
        <div className="section-heading">
          <span className="eyebrow">WHAT YOU CAN DO</span>
          <h2>의상 대응의 전 과정을<br />하나의 도구에서.</h2>
          <p>반복 작업은 자동화하고, 결과에 중요한 세부 조정은 직접 제어할 수 있습니다.</p>
        </div>
        <div className="feature-grid">
          {features.map((feature, index) => (
            <article key={feature.title} className="feature-card">
              <span className="feature-number">0{index + 1}</span>
              <span className="feature-icon" aria-hidden="true">{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section workflow-section">
        <div className="workflow-panel">
          <div className="section-heading">
            <span className="eyebrow">QUICK WORKFLOW</span>
            <h2>처음 사용해도 흐름은 단순합니다.</h2>
          </div>
          <ol className="workflow-list">
            {steps.map(([number, title, text]) => (
              <li key={number}>
                <span>{number}</span>
                <div><strong>{title}</strong><p>{text}</p></div>
              </li>
            ))}
          </ol>
          <a className="text-link" href={`${BASE_PATH}/${lang}/docs/auto-fitting/`}>Auto Fitting 전체 과정 보기 →</a>
        </div>
      </section>

      <section className="home-section guide-cards-section">
        <div className="section-heading centered">
          <span className="eyebrow">DOCUMENTATION</span>
          <h2>필요한 문서부터 바로 시작하세요.</h2>
        </div>
        <div className="guide-card-grid">
          <a href={`${BASE_PATH}/${lang}/docs/getting-started/`}><span>시작하기</span><h3>설치 및 빠른 시작</h3><p>UnityPackage 설치부터 첫 작업 선택까지</p><b>→</b></a>
          <a href={`${BASE_PATH}/${lang}/docs/manual-fitting/`}><span>사용 가이드</span><h3>Manual Fitting</h3><p>본을 직접 조정하는 정교한 대응 방법</p><b>→</b></a>
          <a href={`${BASE_PATH}/${lang}/docs/parameters/`}><span>참조</span><h3>파라미터 설명</h3><p>Fitting과 Weighting 옵션 상세 안내</p><b>→</b></a>
          <a href={`${BASE_PATH}/${lang}/docs/faq/`}><span>문제 해결</span><h3>Q&A 및 오류 해결</h3><p>대표 오류 메시지와 해결 방법</p><b>→</b></a>
        </div>
      </section>

      <section className="support-cta">
        <div>
          <span className="eyebrow">NEED HELP?</span>
          <h2>해결되지 않는 문제는<br />Discord에서 도와드릴게요.</h2>
          <p>Eden Labs 공식 Discord의 Help 채널을 이용해 주세요.</p>
        </div>
        <a className="button light" href={LINKS.discord} target="_blank" rel="noreferrer">Discord 참여하기 ↗</a>
      </section>
    </main>
  );
}
