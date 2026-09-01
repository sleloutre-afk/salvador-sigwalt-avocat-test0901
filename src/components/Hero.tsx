import { MonogramESS } from './Navbar'

export default function Hero() {
  return (
    <section style={{ position: 'relative', height: '100vh', minHeight: '640px', overflow: 'hidden', background: '#272018' }}>

      {/* Image fond avec Kenburns */}
      <div className="kenburns" style={{ position: 'absolute', inset: '-10%', width: '120%', height: '120%' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/hero.png" alt="Cabinet Salvador-Sigwalt — Bordeaux"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
      </div>

      {/* Overlay gradient latéral — sombre à gauche, transparent à droite */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, rgba(39,32,24,0.94) 0%, rgba(39,32,24,0.72) 55%, rgba(39,32,24,0.38) 100%)',
      }} />

      {/* Contenu */}
      <div className="max-w-6xl mx-auto px-6" style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ maxWidth: '620px', paddingTop: '72px' }}>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
            <div style={{ width: '32px', height: '1px', background: '#8b6240' }} />
            <span style={{ fontSize: '0.58rem', letterSpacing: '0.28em', color: 'rgba(245,241,236,0.55)', textTransform: 'uppercase' }}>
              Avocate au Barreau de Bordeaux
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.4rem', marginBottom: '1.5rem' }}>
            <div style={{ flexShrink: 0 }}>
              <MonogramESS color="#a87c58" size={96} />
            </div>
            <div style={{ width: '1px', height: '96px', background: 'rgba(139,98,64,0.30)', flexShrink: 0 }} />
            <h1 style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(2.0rem, 4vw, 3.2rem)',
              fontWeight: 400, color: '#f5f1ec',
              lineHeight: 1.12, margin: 0,
              letterSpacing: '-0.01em',
            }}>
              Maître Eva<br />
              <em style={{ color: '#a87c58', fontStyle: 'italic' }}>Salvador-Sigwalt</em>
            </h1>
          </div>

          <p style={{ fontSize: '0.90rem', color: 'rgba(245,241,236,0.50)', lineHeight: 1.75, marginBottom: '0.6rem' }}>
            Droit immobilier · Construction · Baux commerciaux · Urbanisme
          </p>
          <p style={{ fontSize: '0.72rem', color: 'rgba(245,241,236,0.28)', letterSpacing: '0.06em', marginBottom: '3rem' }}>
            22 rue Fondaudège · 33000 Bordeaux
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <a href="tel:+33767616458" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.55rem',
              background: '#8b6240', color: '#f5f1ec',
              textDecoration: 'none', fontSize: '0.70rem',
              letterSpacing: '0.14em', textTransform: 'uppercase',
              padding: '1rem 2.2rem',
            }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.58 3.4 2 2 0 0 1 3.55 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.66a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              07 67 61 64 58
            </a>
            <a href="mailto:eva.salvador-sigwalt@outlook.fr" style={{
              display: 'inline-flex', alignItems: 'center',
              border: '1px solid rgba(245,241,236,0.22)', color: 'rgba(245,241,236,0.65)',
              textDecoration: 'none', fontSize: '0.70rem',
              letterSpacing: '0.14em', textTransform: 'uppercase',
              padding: '1rem 2.2rem',
            }}>
              Écrire un e-mail
            </a>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)' }}>
        <div style={{ width: '1px', height: '48px', background: 'linear-gradient(to bottom, rgba(139,98,64,0.60), transparent)' }} />
      </div>

    </section>
  )
}
