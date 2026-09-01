'use client'
import { MonogramESS } from './Navbar'

export default function Contact() {
  return (
    <section id="contact" style={{ background: '#ede7de', padding: '7rem 0' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid-2col" style={{ gap: '5rem', alignItems: 'center' }}>

          {/* Coordonnées */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '28px', height: '1px', background: '#8b6240' }} />
              <span style={{ fontSize: '0.58rem', letterSpacing: '0.25em', color: '#8b6240', textTransform: 'uppercase' }}>Contact</span>
            </div>

            <h2 style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
              fontWeight: 400, color: '#272018',
              margin: '0 0 1rem', lineHeight: 1.18,
            }}>
              Prendre rendez-vous
            </h2>

            <p style={{ fontSize: '0.86rem', color: '#5a4a38', lineHeight: 1.75, margin: '0 0 2.5rem', maxWidth: '420px' }}>
              Pour toute question ou prise de rendez-vous, contactez le cabinet par téléphone ou par email. Une première consultation permet d&apos;évaluer la situation et d&apos;envisager les options disponibles.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem', marginBottom: '2.5rem' }}>

              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(139,98,64,0.80)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.58 3.4 2 2 0 0 1 3.55 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.66a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <div>
                  <div style={{ fontSize: '0.56rem', letterSpacing: '0.18em', color: '#8b6240', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Téléphone</div>
                  <a href="tel:+33767616458" style={{ fontSize: '0.92rem', color: '#272018', textDecoration: 'none', fontFamily: 'var(--font-playfair)' }}>07 67 61 64 58</a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(139,98,64,0.80)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                <div>
                  <div style={{ fontSize: '0.56rem', letterSpacing: '0.18em', color: '#8b6240', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Email</div>
                  <a href="mailto:eva.salvador-sigwalt@outlook.fr" style={{ fontSize: '0.82rem', color: '#272018', textDecoration: 'none' }}>eva.salvador-sigwalt@outlook.fr</a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(139,98,64,0.80)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '3px' }}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <div>
                  <div style={{ fontSize: '0.56rem', letterSpacing: '0.18em', color: '#8b6240', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Adresse</div>
                  <div style={{ fontSize: '0.82rem', color: '#272018', lineHeight: 1.55 }}>22 rue Fondaudège<br />33000 Bordeaux</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(139,98,64,0.80)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                <div>
                  <div style={{ fontSize: '0.56rem', letterSpacing: '0.18em', color: '#8b6240', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Barreau</div>
                  <div style={{ fontSize: '0.82rem', color: '#272018' }}>Barreau de Bordeaux · Inscription 2024</div>
                </div>
              </div>

            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="tel:+33767616458" style={{
                display: 'inline-block',
                background: '#272018', color: '#f5f1ec',
                textDecoration: 'none', fontSize: '0.70rem',
                letterSpacing: '0.14em', textTransform: 'uppercase',
                padding: '1.1rem 2.4rem',
                transition: 'background 0.22s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#8b6240')}
              onMouseLeave={e => (e.currentTarget.style.background = '#272018')}
              >07 67 61 64 58</a>
              <a href="mailto:eva.salvador-sigwalt@outlook.fr" style={{
                display: 'inline-block',
                border: '1px solid rgba(39,32,24,0.25)', color: '#272018',
                textDecoration: 'none', fontSize: '0.70rem',
                letterSpacing: '0.14em', textTransform: 'uppercase',
                padding: '1.1rem 2.4rem',
                transition: 'background 0.22s, color 0.22s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#272018'; e.currentTarget.style.color = '#f5f1ec' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#272018' }}
              >Par email</a>
            </div>

          </div>

          {/* Image bureau avec overlay centré — style d'Arfeuille */}
          <div style={{ position: 'relative', overflow: 'hidden', height: '480px' }}>
            {/* Photo */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/office.png" alt="Cabinet Salvador-Sigwalt — 22 rue Fondaudège, Bordeaux"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
            />
            {/* Overlay sombre progressif */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to bottom, rgba(39,32,24,0.25) 0%, rgba(39,32,24,0.68) 55%, rgba(39,32,24,0.88) 100%)',
            }} />
            {/* Monogramme + nom centrés */}
            <div style={{
              position: 'absolute', inset: 0, zIndex: 2,
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              gap: '1.1rem',
            }}>
              <MonogramESS color="#f5f1ec" size={80} />
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: '1.10rem', fontWeight: 400, color: '#f5f1ec',
                  letterSpacing: '0.02em', marginBottom: '0.4rem',
                }}>Maître Eva Salvador-Sigwalt</div>
                <div style={{
                  fontSize: '0.58rem', letterSpacing: '0.24em',
                  color: 'rgba(245,241,236,0.55)', textTransform: 'uppercase',
                }}>Avocate · Barreau de Bordeaux</div>
              </div>
            </div>
            {/* Adresse bandeau bas */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 3,
              background: 'rgba(39,32,24,0.82)',
              padding: '0.8rem 1.4rem',
              textAlign: 'center',
              fontFamily: 'var(--font-playfair)', fontSize: '0.68rem',
              letterSpacing: '0.12em', color: 'rgba(245,241,236,0.65)',
            }}>22 rue Fondaudège · 33000 Bordeaux</div>
          </div>

        </div>
      </div>
    </section>
  )
}
