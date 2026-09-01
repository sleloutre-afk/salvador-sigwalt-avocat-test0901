import { articles } from '@/lib/articles'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Ressources juridiques — Cabinet Salvador-Sigwalt · Avocate à Bordeaux',
  description: 'Articles et éclairages juridiques en droit immobilier, construction, baux commerciaux et urbanisme — Cabinet Salvador-Sigwalt, Bordeaux.',
}

export default function Ressources() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#f5f1ec', minHeight: '100vh', paddingTop: '72px' }}>

        {/* Header */}
        <div style={{ background: '#272018', padding: '5rem 0 4rem' }}>
          <div className="max-w-6xl mx-auto px-6">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.2rem' }}>
              <div style={{ width: '28px', height: '1px', background: '#8b6240' }} />
              <span style={{ fontSize: '0.58rem', letterSpacing: '0.25em', color: '#8b6240', textTransform: 'uppercase' }}>Ressources</span>
            </div>
            <h1 style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              fontWeight: 400, color: '#f5f1ec', margin: 0, lineHeight: 1.18,
            }}>
              Articles & éclairages juridiques
            </h1>
          </div>
        </div>

        {/* Articles */}
        <div style={{ padding: '5rem 0' }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="md:grid-cols-3" style={{ display: 'grid', gap: '1.5rem' }}>
              {articles.map((a, i) => (
                <a key={i} href={`/ressources/${a.slug}`} className="hover-card" style={{
                  display: 'block', textDecoration: 'none',
                  background: '#ede7de',
                  border: '1px solid rgba(39,32,24,0.07)',
                  padding: '2rem',
                }}>
                  <div style={{ fontSize: '0.52rem', letterSpacing: '0.20em', color: '#8b6240', textTransform: 'uppercase', marginBottom: '1rem' }}>
                    {a.categorie} · {a.date}
                  </div>
                  <h2 style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: '1.00rem', fontWeight: 400, color: '#272018',
                    margin: '0 0 0.9rem', lineHeight: 1.35,
                  }}>{a.titre}</h2>
                  <p style={{ fontSize: '0.76rem', color: '#5a4a38', lineHeight: 1.70, margin: '0 0 1.5rem' }}>{a.resume}</p>
                  <span style={{ fontSize: '0.60rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8b6240' }}>Lire l&apos;article →</span>
                </a>
              ))}
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
