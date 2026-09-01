import { articles } from '@/lib/articles'

export default function Ressources() {
  const displayed = articles.slice(0, 3)

  return (
    <section id="ressources" style={{ background: '#f5f1ec', padding: '7rem 0' }}>
      <div className="max-w-6xl mx-auto px-6">

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
              <div style={{ width: '28px', height: '1px', background: '#8b6240' }} />
              <span style={{ fontSize: '0.58rem', letterSpacing: '0.25em', color: '#8b6240', textTransform: 'uppercase' }}>Ressources</span>
            </div>
            <h2 style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(1.7rem, 3vw, 2.4rem)',
              fontWeight: 400, color: '#272018', margin: 0, lineHeight: 1.20,
            }}>
              Articles & éclairages juridiques
            </h2>
          </div>
          <a href="/ressources" style={{
            fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase',
            color: '#8b6240', textDecoration: 'none',
            borderBottom: '1px solid rgba(139,98,64,0.35)',
            paddingBottom: '2px',
          }}>Voir tous les articles</a>
        </div>

        <div className="md:grid-cols-3" style={{ display: 'grid', gap: '1.5rem' }}>
          {displayed.map((a, i) => (
            <a key={i} href={`/ressources/${a.slug}`} className="hover-card" style={{
              display: 'block', textDecoration: 'none',
              background: '#ede7de',
              border: '1px solid rgba(39,32,24,0.07)',
              padding: '2rem',
            }}>
              <div style={{ fontSize: '0.52rem', letterSpacing: '0.20em', color: '#8b6240', textTransform: 'uppercase', marginBottom: '1rem' }}>
                {a.categorie} · {a.date}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: '1.00rem', fontWeight: 400, color: '#272018',
                margin: '0 0 0.9rem', lineHeight: 1.35,
              }}>{a.titre}</h3>
              <p style={{ fontSize: '0.76rem', color: '#5a4a38', lineHeight: 1.70, margin: '0 0 1.5rem' }}>{a.resume}</p>
              <span style={{ fontSize: '0.60rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8b6240' }}>Lire l&apos;article →</span>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
