import { site, services } from '@/lib/site';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <span className="footer__logo-plate">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/kamili-logo.png"
                alt="Kamili Behavioral Health Center"
                width="1286"
                height="344"
                style={{ height: 30, width: 'auto' }}
              />
            </span>
            <p>
              Client-centered behavioral-health care in Baltimore — therapy and
              counseling grounded in empathy, cultural understanding, and
              respect for your individual path.
            </p>
          </div>

          <div>
            <h4>Explore</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#insurance">Insurance</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              {services.map((s) => (
                <li key={s.id}>
                  <a href="#services">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul className="footer__contact">
              <li>
                {site.address.line1}
                <br />
                {site.address.line2}
                <br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </li>
              <li>
                <a href={site.phoneHref}>{site.phoneDisplay}</a>
              </li>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © {year} {site.name}. All rights reserved.
          </span>
          <nav aria-label="Footer">
            <a href="#privacy">Privacy Policy</a>
            <a href="#accessibility">Accessibility</a>
            <a href="#crisis">Crisis Resources</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
