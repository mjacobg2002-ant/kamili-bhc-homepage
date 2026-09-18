'use client';

import { useEffect, useState } from 'react';
import Button from './Button';
import { IconMenu } from './icons';

const NAV = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Insurance', href: '#insurance' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // Lock body scroll and support Escape while the drawer is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#top" className="brand" aria-label="Kamili Behavioral Health Center home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/kamili-logo.png" alt="Kamili Behavioral Health Center" />
        </a>

        <nav className="nav" aria-label="Primary">
          <ul className="nav__links">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
          </ul>
          <Button href="#consultation" variant="primary">
            Schedule a Consultation
          </Button>
          <button
            type="button"
            className="menu-toggle"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(true)}
          >
            <IconMenu />
          </button>
        </nav>
      </div>

      <div className="mobile-nav" id="mobile-nav" data-open={open}>
        <div
          className="mobile-nav__scrim"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
        <div className="mobile-nav__panel" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="mobile-nav__top">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/kamili-mark.png"
              alt=""
              width="40"
              height="26"
              style={{ height: 28, width: 'auto' }}
            />
            <button
              type="button"
              className="mobile-nav__close"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              &times;
            </button>
          </div>
          <ul className="mobile-nav__links">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} onClick={() => setOpen(false)}>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <Button href="#consultation" variant="primary" block onClick={() => setOpen(false)}>
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </header>
  );
}
