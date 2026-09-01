'use client'
import { MonogramESS } from './Navbar'

export default function Footer() {
  return (
    <footer style={{ background: '#16120d', padding: '4rem 0 2rem' }}>
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid-2col" style={{ gap: '3rem', marginBottom: '3rem', alignItems: 'flex-start' }}>

          {/* Identité */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.2rem' }}>
              <MonogramESS color="#a87c58" size={44} />
              <div>
                <div style={{ fontFamily: 'var(--font-playfair)', fontSize: '0.88rem', color: '#f5f1ec', letterSpacing: '0.06em' }}>Eva Salvador-Sigwalt</div>
                <div style={{ fontSize: '0.58rem', letterSpacing: '0.18em', color: 'rgba(245,241,236,0.45)', textTransform: 'uppercase' }}>Avocate au Barreau de Bordeaux</div>
              </div>
            </div>
            <p style={{ fontSize: '0.76rem', color: 'rgba(245,241,236,0.40)', lineHeight: 1.75, maxWidth: '320px' }}>
              Cabinet spécialisé en droit immobilier, droit de la construction, baux commerciaux et urbanisme.
              22 rue Fondaudège, 33000 Bordeaux.
            </p>
          </div>

          {/* Navigation */}
          <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: '0.52rem', letterSpacing: '0.22em', color: '#8b6240', textTransform: 'uppercase', marginBottom: '1rem' }}>Navigation</div>
              {[
                { href: '#cabinet',    label: 'Le cabinet' },
                { href: '#domaines',   label: 'Domaines' },
                { href: '#honoraires', label: 'Honoraires' },
                { href: '#ressources', label: 'Ressources' },
                { href: '#contact',    label: 'Contact' },
              ].map(l => (
                <a key={l.href} href={l.href} style={{
                  display: 'block', marginBottom: '0.55rem',
                  fontSize: '0.72rem', color: 'rgba(245,241,236,0.50)', textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#a87c58')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,241,236,0.50)')}
                >{l.label}</a>
              ))}
            </div>
            <div>
              <div style={{ fontSize: '0.52rem', letterSpacing: '0.22em', color: '#8b6240', textTransform: 'uppercase', marginBottom: '1rem' }}>Contact</div>
              <a href="tel:+33767616458" style={{ display: 'block', marginBottom: '0.55rem', fontSize: '0.72rem', color: 'rgba(245,241,236,0.50)', textDecoration: 'none' }}>07 67 61 64 58</a>
              <a href="mailto:eva.salvador-sigwalt@outlook.fr" style={{ display: 'block', marginBottom: '0.55rem', fontSize: '0.72rem', color: 'rgba(245,241,236,0.50)', textDecoration: 'none' }}>eva.salvador-sigwalt@outlook.fr</a>
              <div style={{ fontSize: '0.72rem', color: 'rgba(245,241,236,0.35)', lineHeight: 1.55 }}>22 rue Fondaudège<br />33000 Bordeaux</div>
            </div>
          </div>

        </div>

        <div style={{ borderTop: '1px solid rgba(245,241,236,0.07)', paddingTop: '1.8rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.8rem' }}>
          <span style={{ fontSize: '0.60rem', color: 'rgba(245,241,236,0.28)', letterSpacing: '0.08em' }}>
            &copy; 2025 Cabinet Salvador-Sigwalt · Avocate au Barreau de Bordeaux
          </span>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="/mentions-legales" style={{ fontSize: '0.60rem', color: 'rgba(245,241,236,0.28)', textDecoration: 'none' }}>Mentions légales</a>
            <a href="/cgv" style={{ fontSize: '0.60rem', color: 'rgba(245,241,236,0.28)', textDecoration: 'none' }}>CGV</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
