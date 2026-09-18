import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import { site, services, insurers } from '@/lib/site';
import {
  IconPhone,
  IconMail,
  IconPin,
  IconHeart,
  IconShield,
  IconCompass,
  IconUsers,
} from '@/components/icons';

const TRUST = [
  { icon: IconUsers, label: 'Individual & group therapy' },
  { icon: IconShield, label: 'Trauma-informed care' },
  { icon: IconHeart, label: 'Substance-use counseling' },
  { icon: IconPin, label: 'Baltimore-based practice' },
];

const PRINCIPLES = [
  { icon: IconHeart, title: 'Your needs come first', body: 'Care is shaped around you — your story, your goals, and what matters most to you.' },
  { icon: IconClockWrap, title: 'Healing moves at your pace', body: 'There is no rushing. We meet you where you are and move forward together.' },
  { icon: IconShield, title: 'Your experiences are respected', body: 'You are heard without judgment, with cultural understanding at the center.' },
  { icon: IconCompass, title: 'Care is collaborative', body: 'We walk alongside you — healing is a partnership, never something imposed.' },
];

function IconClockWrap(props) {
  // simple clock glyph kept inline to avoid an extra import name clash
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

const STEPS = [
  { title: 'Schedule an initial consultation', body: 'Choose a time that works for you using the booking options below.' },
  { title: 'Talk through your needs and questions', body: 'We listen, answer your questions, and learn what you are looking for.' },
  { title: 'Determine the most appropriate next step', body: 'Together we decide how to move forward in a way that fits your life.' },
];

export default function Home() {
  return (
    <>
      <div id="top" />
      {/* Crisis guidance — always visible near the top */}
      <div className="crisis-bar" id="crisis">
        <div className="container">
          <span>
            <strong>In crisis?</strong> If someone is in immediate danger, call{' '}
            <a href="tel:911">911</a>.
          </span>
          <span>
            For mental-health or suicide crisis support, call or text{' '}
            <a href="tel:988">988</a>.
          </span>
        </div>
      </div>

      <Header />

      <main id="main">
        {/* =============================== HERO =============================== */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="container hero__grid">
            <div className="hero__content">
              <p className="eyebrow">Behavioral Health Care in Baltimore</p>
              <h1 className="hero__title" id="hero-title">
                Care that sees the <span className="accent">whole person.</span>
              </h1>
              <p className="hero__lead">
                {site.name} offers client-centered therapy and counseling
                grounded in empathy, cultural understanding, and respect for your
                individual path.
              </p>
              <div className="btn-row">
                <Button href="#consultation" variant="primary">
                  Schedule a Consultation
                </Button>
                <Button href="#services" variant="secondary" withArrow>
                  Explore Our Services
                </Button>
              </div>
              <p className="hero__reassure">Your story. Your pace. Your healing.</p>
            </div>

            <div className="hero__media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/kamili-community.jpg"
                alt="Kamili Behavioral Health Center team members and community members smiling together at a Baltimore outreach event"
                width="1400"
                height="1050"
                fetchPriority="high"
              />
              <div className="hero__badge">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/kamili-mark.png" alt="" width="34" height="22" />
                <span>Serving our community in the heart of Baltimore</span>
              </div>
            </div>
          </div>
        </section>

        {/* ============================ TRUST STRIP =========================== */}
        <section className="trust" aria-label="What we offer">
          <div className="container trust__grid">
            {TRUST.map(({ icon: Icon, label }) => (
              <div className="trust__item" key={label}>
                <Icon width={22} height={22} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ============================== SERVICES =========================== */}
        <section className="section" id="services" aria-labelledby="services-title">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Our Services</p>
              <h2 className="section-title" id="services-title">
                Support shaped around your needs.
              </h2>
              <p className="section-lead">
                Four ways we help — each offered in a confidential, respectful
                space and tailored to where you are today.
              </p>
            </div>

            <div className="services__grid">
              {services.map((s) => (
                <article className="service" key={s.id} id={s.id}>
                  <div className="service__num" aria-hidden="true">
                    {s.number}
                  </div>
                  <div>
                    <h3 className="service__title">{s.title}</h3>
                    <p className="service__summary">{s.summary}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="services__foot">
              <Button href="#consultation" variant="secondary" withArrow>
                View All Services
              </Button>
            </div>
          </div>
        </section>

        {/* =============================== ABOUT ============================== */}
        <section className="section section--cream2" id="about" aria-labelledby="about-title">
          <div className="container about__grid">
            <div className="about__media about__team">
              <figure className="team-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/team-marlene.jpg"
                  alt="Marlene Williams, LCSW-C, of Kamili Behavioral Health Center"
                  width="760"
                  height="950"
                  loading="lazy"
                />
                <figcaption>
                  <span className="team-name">Marlene Williams</span>
                  <span className="team-role">LCSW-C</span>
                </figcaption>
              </figure>
              <figure className="team-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/team-provider.jpg"
                  alt="L&rsquo;Tanya of Kamili Behavioral Health Center"
                  width="760"
                  height="950"
                  loading="lazy"
                />
                <figcaption>
                  <span className="team-name">L&rsquo;Tanya</span>
                  <span className="team-role">Kamili team</span>
                </figcaption>
              </figure>
            </div>
            <div className="about__body">
              <p className="eyebrow">Who We Are</p>
              <h2 className="section-title" id="about-title">
                Born in Baltimore. Built to serve its people.
              </h2>
              <p className="about__lead">
                At the core of our practice is a deep commitment to helping
                individuals reconnect with their inner strength. We offer
                client-centered therapy that puts <em>you</em> first — your
                story, your pace, your healing.
              </p>
              <blockquote className="about__quote">
                “We believe in Baltimore — its people, its culture, and its power
                to heal.”
              </blockquote>
              <p>
                Born and raised in the heart of Baltimore, we&rsquo;ve witnessed
                both the challenges and the incredible resilience of our
                communities. That lived experience fuels our passion and purpose.
              </p>
              <p>
                This practice was founded with love for our city and a mission to
                serve. We are honored to walk alongside our clients in their
                journey, offering care rooted in empathy, cultural understanding,
                and a belief in the power of collective growth.
              </p>
              <Button href="#consultation" variant="secondary" withArrow>
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* ============================ PHILOSOPHY =========================== */}
        <section className="section section--deep" aria-labelledby="philosophy-title">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Our Approach</p>
              <h2 className="section-title" id="philosophy-title">
                What care at Kamili is built around.
              </h2>
            </div>
            <div className="principles">
              {PRINCIPLES.map(({ icon: Icon, title, body }) => (
                <div className="principle" key={title}>
                  <div className="principle__mark">
                    <Icon width={20} height={20} />
                  </div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================ REFLECTION =========================== */}
        <section className="section reflect" aria-label="Our commitment">
          <div className="container reflect__grid">
            <div className="reflect__media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/kamili-team-table.jpg"
                alt="Two Kamili Behavioral Health Center team members welcoming visitors at their resource table"
                width="1350"
                height="844"
                loading="lazy"
              />
            </div>
            <blockquote className="reflect__quote">
              Client-centered therapy where <span>your needs</span> are
              prioritized.
              <span className="reflect__by">The Kamili approach</span>
            </blockquote>
          </div>
        </section>

        {/* ===================== PROCESS + CONSULTATION ====================== */}
        <section className="section" id="consultation" aria-labelledby="process-title">
          <div className="container process__grid">
            <div>
              <p className="eyebrow">Getting Started</p>
              <h2 className="section-title" id="process-title">
                Starting care can be simple.
              </h2>
              <p className="section-lead" style={{ marginBottom: '1.75rem' }}>
                Three unhurried steps — from first conversation to a plan that
                fits your life.
              </p>
              <ol className="steps">
                {STEPS.map((s) => (
                  <li className="step" key={s.title}>
                    <div>
                      <h3>{s.title}</h3>
                      <p>{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="consult-card" aria-labelledby="consult-title">
              <h3 id="consult-title">Choose an available consultation time</h3>
              <p className="consult-card__note">
                Booking opens a secure Google&nbsp;Calendar scheduling page in a
                new tab.
              </p>
              <div className="consult-options">
                {site.consultations.map((c) => (
                  <a
                    key={c.name}
                    className="consult-option"
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>
                      <span className="consult-option__name">
                        Consultation with {c.name}
                      </span>
                      <br />
                      <span className="consult-option__meta">
                        Opens Google Calendar
                      </span>
                    </span>
                    <span className="pill">Book →</span>
                  </a>
                ))}
              </div>
              <p className="consult-card__fine">
                Please avoid sharing sensitive health details when booking. We
                will talk through your needs together during the consultation.
              </p>
            </div>
          </div>
        </section>

        {/* ============================= INSURANCE ========================== */}
        <section className="section section--cream2" id="insurance" aria-labelledby="insurance-title">
          <div className="container insurance__grid">
            <div>
              <p className="eyebrow">Insurance &amp; Payment</p>
              <h2 className="section-title" id="insurance-title">
                Insurance and payment options.
              </h2>
              <p className="section-lead" style={{ marginBottom: '1.5rem' }}>
                Kamili works with a range of plans and payment arrangements,
                including options for uninsured clients.
              </p>
              <ul className="insurers">
                {insurers.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              <Button href="#contact" variant="secondary" withArrow>
                Ask About Coverage
              </Button>
            </div>
            <div className="insurance__note" role="note">
              <p>
                Coverage varies by plan. Please contact Kamili or your insurer to
                verify eligibility, benefits, and out-of-pocket costs before
                beginning services. Being listed here does not guarantee that
                every plan from an insurer is accepted.
              </p>
            </div>
          </div>
        </section>

        {/* ============================== CONTACT =========================== */}
        <section className="section" id="contact" aria-labelledby="contact-title">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Location &amp; Contact</p>
              <h2 className="section-title" id="contact-title">
                Reach the Kamili team.
              </h2>
            </div>

            <div className="contact__grid">
              <div className="contact-card">
                <ul className="contact-list">
                  <li>
                    <span className="ico"><IconPin /></span>
                    <span>
                      <span className="label">Visit</span>
                      <br />
                      <span className="value">
                        {site.address.line1}, {site.address.line2}
                        <br />
                        {site.address.city}, {site.address.state} {site.address.zip}
                      </span>
                    </span>
                  </li>
                  <li>
                    <span className="ico"><IconPhone /></span>
                    <span>
                      <span className="label">Call</span>
                      <br />
                      <a className="value" href={site.phoneHref}>
                        {site.phoneDisplay}
                      </a>
                    </span>
                  </li>
                  <li>
                    <span className="ico"><IconMail /></span>
                    <span>
                      <span className="label">Email</span>
                      <br />
                      <a className="value" href={`mailto:${site.email}`}>
                        {site.email}
                      </a>
                    </span>
                  </li>
                </ul>

                <div className="contact-actions">
                  <Button href={site.phoneHref} variant="primary">
                    Call Kamili
                  </Button>
                  <Button href={`mailto:${site.email}`} variant="secondary">
                    Send an Email
                  </Button>
                  <Button href={site.mapsUrl} variant="secondary" external>
                    Get Directions
                  </Button>
                  <Button href="#consultation" variant="secondary">
                    Schedule
                  </Button>
                </div>

                <div className="contact-safety">
                  <p>
                    <strong>Please do not share sensitive health information</strong>{' '}
                    (such as diagnoses, medications, or history) through email or
                    this website. Our website, email, and general contact methods
                    are <strong>not monitored for emergencies</strong>. In a
                    crisis, call <a href="tel:911">911</a> or call/text{' '}
                    <a href="tel:988">988</a>.
                  </p>
                </div>
              </div>

              <div className="map-card">
                <h3>Kamili Behavioral Health Center</h3>
                <address>
                  {site.address.line1}, {site.address.line2}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                </address>
                <Button href={site.mapsUrl} variant="ghost-light" external withArrow>
                  Open in Google Maps
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ============================= FINAL CTA ========================== */}
        <section className="section section--deep final-cta" aria-labelledby="final-title">
          <div className="container">
            <h2 id="final-title">A compassionate place to begin.</h2>
            <p>
              You deserve care that respects your experiences, your strengths,
              and the pace of your healing.
            </p>
            <div className="btn-row">
              <Button href="#consultation" variant="primary">
                Schedule a Consultation
              </Button>
              <Button href={site.phoneHref} variant="ghost-light">
                <IconPhone width={18} height={18} /> Call {site.phoneDisplay}
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
