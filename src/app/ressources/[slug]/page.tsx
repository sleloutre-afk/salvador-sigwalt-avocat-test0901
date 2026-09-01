import { articles, getArticleBySlug } from '@/lib/articles'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export async function generateStaticParams() {
  return articles.map(a => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return {}
  return {
    title: `${article.titre} — Cabinet Salvador-Sigwalt`,
    description: article.resume,
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  const paragraphs = article.contenu.split('\n\n')

  return (
    <>
      <Navbar />
      <main style={{ background: '#f5f1ec', minHeight: '100vh', paddingTop: '72px' }}>

        {/* Header */}
        <div style={{ background: '#272018', padding: '5rem 0 4rem' }}>
          <div className="max-w-6xl mx-auto px-6" style={{ maxWidth: '800px' }}>
            <a href="/ressources" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              fontSize: '0.60rem', letterSpacing: '0.16em', textTransform: 'uppercase',
              color: 'rgba(168,124,88,0.70)', textDecoration: 'none',
              marginBottom: '2rem',
            }}>← Retour aux ressources</a>
            <div style={{ fontSize: '0.52rem', letterSpacing: '0.20em', color: '#8b6240', textTransform: 'uppercase', marginBottom: '1.2rem' }}>
              {article.categorie} · {article.date}
            </div>
            <h1 style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)',
              fontWeight: 400, color: '#f5f1ec', margin: '0 0 1.5rem', lineHeight: 1.20,
            }}>{article.titre}</h1>
            <p style={{ fontSize: '0.88rem', color: 'rgba(245,241,236,0.60)', lineHeight: 1.70, margin: 0 }}>{article.resume}</p>
          </div>
        </div>

        {/* Contenu */}
        <div style={{ padding: '5rem 0' }}>
          <div className="max-w-6xl mx-auto px-6" style={{ maxWidth: '800px' }}>
            {paragraphs.map((p, i) => {
              if (p.startsWith('## ')) {
                return (
                  <h2 key={i} style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: '1.20rem', fontWeight: 400, color: '#272018',
                    margin: '2.5rem 0 1rem', lineHeight: 1.30,
                    borderLeft: '3px solid #8b6240', paddingLeft: '1rem',
                  }}>{p.replace('## ', '')}</h2>
                )
              }
              if (p.startsWith('**') && p.endsWith('**') && !p.includes('\n')) {
                return (
                  <p key={i} style={{ fontSize: '0.85rem', color: '#272018', fontWeight: 600, lineHeight: 1.70, margin: '1.2rem 0 0.4rem' }}>
                    {p.replace(/\*\*/g, '')}
                  </p>
                )
              }
              const parts = p.split(/(\*\*[^*]+\*\*)/g)
              return (
                <p key={i} style={{ fontSize: '0.88rem', color: '#5a4a38', lineHeight: 1.85, margin: '0 0 1.2rem' }}>
                  {parts.map((part, j) =>
                    part.startsWith('**') && part.endsWith('**')
                      ? <strong key={j} style={{ color: '#272018' }}>{part.replace(/\*\*/g, '')}</strong>
                      : part
                  )}
                </p>
              )
            })}

            {/* CTA */}
            <div style={{
              marginTop: '4rem', padding: '2.5rem',
              background: '#ede7de', border: '1px solid rgba(39,32,24,0.08)',
            }}>
              <div style={{ fontSize: '0.56rem', letterSpacing: '0.22em', color: '#8b6240', textTransform: 'uppercase', marginBottom: '0.8rem' }}>
                Besoin d&apos;un conseil ?
              </div>
              <p style={{ fontSize: '0.84rem', color: '#5a4a38', lineHeight: 1.70, margin: '0 0 1.5rem' }}>
                Maître Eva Salvador-Sigwalt peut vous accompagner dans votre situation. Prenez rendez-vous pour une première consultation.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="tel:+33767616458" style={{
                  display: 'inline-block',
                  background: '#272018', color: '#f5f1ec',
                  textDecoration: 'none', fontSize: '0.68rem',
                  letterSpacing: '0.14em', textTransform: 'uppercase',
                  padding: '0.9rem 2rem',
                }}>07 67 61 64 58</a>
                <a href="mailto:eva.salvador-sigwalt@outlook.fr" style={{
                  display: 'inline-block',
                  border: '1px solid rgba(39,32,24,0.25)', color: '#272018',
                  textDecoration: 'none', fontSize: '0.68rem',
                  letterSpacing: '0.14em', textTransform: 'uppercase',
                  padding: '0.9rem 2rem',
                }}>Par email</a>
              </div>
            </div>

          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
