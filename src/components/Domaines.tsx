const domaines = [
  {
    svg: '/immobilier.svg',
    titre: 'Droit immobilier',
    texte: "Ventes immobilières, VEFA, vices cachés, délivrance conforme, baux résidentiels, troubles de voisinage et contentieux des copropriétés.",
  },
  {
    svg: '/construction.svg',
    titre: 'Droit de la construction',
    texte: "Référé-expertise, indemnisation des retards de livraison, réception des travaux, garanties légales et responsabilité des constructeurs.",
  },
  {
    svg: '/commercial.svg',
    titre: 'Baux commerciaux',
    texte: "Rédaction et négociation de baux, avenants et conventions, renouvellement, déspécialisation, fixation judiciaire des loyers commerciaux.",
  },
  {
    svg: '/urbanisme.svg',
    titre: 'Urbanisme & copropriété',
    texte: "Autorisations d'urbanisme, recours contre les permis de construire, accompagnement des syndics de copropriété et protocoles transactionnels.",
  },
]

export default function Domaines() {
  return (
    <section id="domaines" style={{ background: '#ede7de', padding: '7rem 0' }}>
      <div className="max-w-6xl mx-auto px-6">

        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', marginBottom: '1.2rem' }}>
            <div style={{ width: '24px', height: '1px', background: 'rgba(39,32,24,0.25)' }} />
            <span style={{ fontSize: '0.58rem', letterSpacing: '0.25em', color: '#8b6240', textTransform: 'uppercase' }}>Domaines d&apos;intervention</span>
            <div style={{ width: '24px', height: '1px', background: 'rgba(39,32,24,0.25)' }} />
          </div>
          <h2 style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(1.7rem, 3vw, 2.4rem)',
            fontWeight: 400, color: '#272018', margin: 0, lineHeight: 1.20,
          }}>
            Une expertise concentrée<br />
            <em style={{ color: '#8b6240', fontStyle: 'italic' }}>sur l&apos;immobilier et la construction</em>
          </h2>
        </div>

        <div className="md:grid-cols-2" style={{ display: 'grid', gap: '1.5rem' }}>
          {domaines.map((d, i) => (
            <div key={i} className="hover-card" style={{
              background: '#f5f1ec',
              border: '1px solid rgba(39,32,24,0.08)',
              padding: '2.4rem 2rem',
              display: 'flex', gap: '1.8rem', alignItems: 'flex-start',
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={d.svg} alt="" aria-hidden="true" style={{ width: '40px', height: '40px', flexShrink: 0, opacity: 0.75 }} />
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: '1.05rem', fontWeight: 400, color: '#272018',
                  margin: '0 0 0.7rem', lineHeight: 1.25,
                }}>{d.titre}</h3>
                <p style={{ fontSize: '0.80rem', color: '#5a4a38', lineHeight: 1.75, margin: 0 }}>{d.texte}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
