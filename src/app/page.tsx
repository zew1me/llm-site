import Image from "next/image";

const siteContent = {
  name: "Large Language Music",
  eyebrow: "Virtual artists. Real signal.",
  tagline: "Machine-born sound for the ones listening ahead of time.",
  statement:
    "Large Language Music is a label for synthetic voices, uncanny hooks, and releases shaped at the edge. We keep the surface minimal and let the catalog arrive in its own time.",
  inquiries:
    "For mastering and artist inquiries, contact the label directly.",
  contactLabel: "Contact Large Language Music",
  contactEmail: "hello@largelanguagemusic.com",
};

export default function HomePage() {
  const contactHref = `mailto:${siteContent.contactEmail}`;

  return (
    <main className="landing-shell">
      <section className="landing-grid" aria-labelledby="site-title">
        <div className="hero-copy">
          <p className="eyebrow">{siteContent.eyebrow}</p>
          <h1 id="site-title">{siteContent.name}</h1>
          <p className="tagline">{siteContent.tagline}</p>
          <p className="statement">{siteContent.statement}</p>
          <div className="contact-block">
            <p>{siteContent.inquiries}</p>
            <a className="contact-link" href={contactHref}>
              {siteContent.contactLabel}
            </a>
          </div>
        </div>

        <aside className="brand-panel" aria-label="Large Language Music brand">
          <div className="brand-frame">
            <div className="brand-noise" aria-hidden="true" />
            <Image
              className="brand-image"
              src="/large-language-music-landing-icon.png"
              alt="Large Language Music visual anchor"
              width={1536}
              height={1024}
              priority
            />
          </div>
        </aside>
      </section>
    </main>
  );
}
