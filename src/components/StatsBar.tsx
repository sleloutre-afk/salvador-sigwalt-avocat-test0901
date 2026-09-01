export default function StatsBar() {
  const stats = [
    { label: 'Barreau', value: 'Bordeaux · 2024' },
    { label: 'Spécialités', value: 'Immobilier · Construction · Urbanisme' },
    { label: 'Formation', value: 'Master II · EFB Paris' },
    { label: 'Contact', value: '07 67 61 64 58' },
  ]

  return (
    <section style={{ background: '#272018', padding: '0' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderLeft: '1px solid rgba(255,255,255,0.06)' }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              padding: '2rem 1.5rem',
              borderRight: '1px solid rgba(255,255,255,0.06)',
            }}>
              <div style={{ fontSize: '0.52rem', letterSpacing: '0.22em', color: '#8b6240', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{s.label}</div>
              <div style={{ fontFamily: 'var(--font-playfair)', fontSize: '0.88rem', color: '#f5f1ec', lineHeight: 1.35 }}>{s.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
