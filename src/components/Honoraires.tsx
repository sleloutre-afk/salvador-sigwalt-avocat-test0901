export default function Honoraires() {
  const modes = [
    {
      titre: 'Honoraires au forfait',
      description: "Pour les missions clairement délimitées — consultation juridique, rédaction d'un bail, analyse d'un compromis de vente —, un forfait est convenu avant toute intervention afin de garantir une transparence totale sur le coût de la prestation.",
    },
    {
      titre: 'Honoraires au temps passé',
      description: "Pour les dossiers contentieux ou les missions d'une durée incertaine, les honoraires sont calculés au taux horaire sur la base d'un devis estimatif préalable. Un suivi régulier de l'avancement du dossier est assuré.",
    },
    {
      titre: "Convention d'honoraires",
      description: "Conformément aux règles professionnelles, une convention d'honoraires est systématiquement établie par écrit avant toute intervention. Elle précise la nature de la mission, le mode de calcul et les conditions de règlement.",
    },
  ]

  return (
    <section id="honoraires" style={{ background: '#8b6240', padding: '7rem 0' }}>
      <div className="max-w-6xl mx-auto px-6">

        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', marginBottom: '1.2rem' }}>
            <div style={{ width: '24px', height: '1px', background: 'rgba(245,241,236,0.35)' }} />
            <span style={{ fontSize: '0.58rem', letterSpacing: '0.25em', color: 'rgba(245,241,236,0.55)', textTransform: 'uppercase' }}>Honoraires</span>
            <div style={{ width: '24px', height: '1px', background: 'rgba(245,241,236,0.35)' }} />
          </div>
          <h2 style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(1.7rem, 3vw, 2.4rem)',
            fontWeight: 400, color: '#f5f1ec', margin: 0, lineHeight: 1.20,
          }}>
            Transparence des honoraires
          </h2>
        </div>

        <div className="md:grid-cols-3" style={{ display: 'grid', gap: '1.5rem', marginBottom: '3.5rem' }}>
          {modes.map((m, i) => (
            <div key={i} style={{ border: '1px solid rgba(245,241,236,0.18)', padding: '2rem 1.8rem' }}>
              <div style={{ width: '28px', height: '1px', background: 'rgba(245,241,236,0.30)', marginBottom: '1.2rem' }} />
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '0.95rem', fontWeight: 400, color: '#f5f1ec', margin: '0 0 0.8rem', lineHeight: 1.30 }}>{m.titre}</h3>
              <p style={{ fontSize: '0.78rem', color: 'rgba(245,241,236,0.50)', lineHeight: 1.75, margin: 0 }}>{m.description}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <a href="#contact" className="hover-btn-outline" style={{
            display: 'inline-block',
            background: '#272018', color: '#f5f1ec',
            textDecoration: 'none', fontSize: '0.70rem',
            letterSpacing: '0.14em', textTransform: 'uppercase',
            padding: '1.1rem 2.8rem',
          }}>
            Prendre rendez-vous
          </a>
        </div>

      </div>
    </section>
  )
}
