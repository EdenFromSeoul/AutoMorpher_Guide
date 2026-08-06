import { notFound } from "next/navigation";
import { HOME_COPY } from "@/lib/home-copy";
import { BASE_PATH, isLanguage, LINKS, VERSION } from "@/lib/site";

export default async function LanguageHomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const copy = HOME_COPY[lang];

  return (
    <main>
      <section className="hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-copy">
          <span className="eyebrow">Eden Labs · Unity Editor Tool</span>
          <h1>{copy.hero.title}<br /><em>{copy.hero.accent}</em></h1>
          <p>{copy.hero.description}</p>
          <div className="hero-actions">
            <a className="button primary" href={`${BASE_PATH}/${lang}/docs/getting-started/`}>{copy.hero.start} <span>→</span></a>
            <a className="button secondary" href={LINKS.booth} target="_blank" rel="noreferrer">{copy.hero.download}</a>
          </div>
          <div className="hero-meta">
            <span><strong>v{VERSION}</strong> {copy.hero.latest}</span>
            <span><strong>Unity</strong> Humanoid</span>
            <span><strong>Windows · Linux</strong></span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-frame">
            <img src={`${BASE_PATH}/assets/brand/kisetter-thumbnail.png`} alt={copy.hero.imageAlt} />
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label={copy.trustLabel}>
        <span>Auto Fitting</span><i />
        <span>Manual Fitting</span><i />
        <span>BlendShape Generator</span><i />
        <span>Profile Workflow</span>
      </section>

      <section className="home-section feature-section">
        <div className="section-heading">
          <span className="eyebrow">WHAT YOU CAN DO</span>
          <h2>{copy.featuresHeading[0]}<br />{copy.featuresHeading[1]}</h2>
          <p>{copy.featuresDescription}</p>
        </div>
        <div className="feature-grid">
          {copy.features.map((feature, index) => (
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
            <h2>{copy.workflowHeading}</h2>
          </div>
          <ol className="workflow-list">
            {copy.steps.map(([number, title, text]) => (
              <li key={number}>
                <span>{number}</span>
                <div><strong>{title}</strong><p>{text}</p></div>
              </li>
            ))}
          </ol>
          <a className="text-link" href={`${BASE_PATH}/${lang}/docs/auto-fitting/`}>{copy.workflowLink}</a>
        </div>
      </section>

      <section className="home-section guide-cards-section">
        <div className="section-heading centered">
          <span className="eyebrow">DOCUMENTATION</span>
          <h2>{copy.docsHeading}</h2>
        </div>
        <div className="guide-card-grid">
          {copy.cards.map((card) => (
            <a key={card.slug} href={`${BASE_PATH}/${lang}/docs/${card.slug}/`}>
              <span>{card.label}</span><h3>{card.title}</h3><p>{card.text}</p><b>→</b>
            </a>
          ))}
        </div>
      </section>

      <section className="support-cta">
        <div>
          <span className="eyebrow">NEED HELP?</span>
          <h2>{copy.support.title[0]}<br />{copy.support.title[1]}</h2>
          <p>{copy.support.text}</p>
        </div>
        <a className="button light" href={LINKS.discord} target="_blank" rel="noreferrer">{copy.support.button}</a>
      </section>
    </main>
  );
}