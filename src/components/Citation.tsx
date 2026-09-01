export default function Citation() {
  return (
    <section style={{ background: '#272018', padding: '6rem 0' }}>
      <div className="max-w-6xl mx-auto px-6" style={{ textAlign: 'center' }}>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.2rem', marginBottom: '2.5rem' }}>
          <div style={{ flex: 1, maxWidth: '80px', height: '1px', background: 'rgba(139,98,64,0.35)' }} />
          <span style={{ fontSize: '1.6rem', color: 'rgba(139,98,64,0.50)', fontFamily: 'Georgia, serif', lineHeight: 1 }}>&ldquo;</span>
          <div style={{ flex: 1, maxWidth: '80px', height: '1px', background: 'rgba(139,98,64,0.35)' }} />
        </div>

        <blockquote style={{
          fontFamily: 'var(--font-playfair)',
          fontSize: 'clamp(1.15rem, 2.5vw, 1.65rem)',
          fontWeight: 400, fontStyle: 'italic',
          color: '#f5f1ec',
          margin: '0 0 2rem',
          lineHeight: 1.60,
          maxWidth: '760px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          Que vous soyez propriétaire, locataire, maître d&apos;ouvrage ou syndic, chaque litige immobilier cache une réalité technique et humaine singulière. Mon rôle est de la démêler avec rigueur, et de défendre vos intérêts avec constance.
        </blockquote>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem' }}>
          <div style={{ width: '20px', height: '1px', background: 'rgba(139,98,64,0.40)' }} />
          <span style={{ fontSize: '0.60rem', letterSpacing: '0.22em', color: 'rgba(168,124,88,0.70)', textTransform: 'uppercase' }}>
            Maître Eva Salvador-Sigwalt
          </span>
          <div style={{ width: '20px', height: '1px', background: 'rgba(139,98,64,0.40)' }} />
        </div>

      </div>
    </section>
  )
}
