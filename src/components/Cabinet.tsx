export default function Cabinet() {
  return (
    <section id="cabinet" style={{ background: '#f5f1ec', padding: '7rem 0' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid-2col" style={{ gap: '5rem', alignItems: 'flex-start' }}>

          {/* Colonne gauche : photo + formation + expérience */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>

            {/* Photo */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
              <div style={{
                position: 'absolute', top: '-14px', left: '-14px', zIndex: 0,
                width: '72px', height: '72px',
                borderTop: '1px solid rgba(139,98,64,0.40)',
                borderLeft: '1px solid rgba(139,98,64,0.40)',
              }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/eva.png" alt="Maître Eva Salvador-Sigwalt — Avocate à Bordeaux"
                style={{ position: 'relative', zIndex: 1, width: '100%', height: 'auto', display: 'block' }}
              />
              <div style={{
                position: 'absolute', bottom: '-14px', right: '-14px', zIndex: 0,
                width: '72px', height: '72px',
                borderBottom: '1px solid rgba(139,98,64,0.40)',
                borderRight: '1px solid rgba(139,98,64,0.40)',
              }} />
              <div style={{
                position: 'absolute', bottom: '-1px', left: 0, zIndex: 2,
                background: '#8b6240', color: '#f5f1ec',
                padding: '0.55rem 1.1rem',
                fontFamily: 'var(--font-playfair)', fontSize: '0.70rem', letterSpacing: '0.10em',
              }}>
                Serment 2024
              </div>
            </div>

            {/* Formation */}
            <div style={{ borderTop: '1px solid rgba(39,32,24,0.10)', paddingTop: '2rem' }}>
              <div style={{ fontSize: '0.56rem', letterSpacing: '0.22em', color: '#8b6240', textTransform: 'uppercase', marginBottom: '1.2rem' }}>
                Formation
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                {[
                  { date: '2023–2024', titre: 'EFB — École de Formation du Barreau', lieu: 'Paris · Admis' },
                  { date: '2021–2022', titre: 'DU Institut d\'études judiciaires', lieu: 'Paris II Panthéon-Assas · CRFPA' },
                  { date: '2020–2021', titre: 'Master II Pratiques pénales', lieu: 'Université de Montpellier · Mention Bien' },
                  { date: '2020–2021', titre: 'DU LegalTech & Law Innovations', lieu: 'Université de Montpellier · Mention Bien' },
                  { date: '2019–2020', titre: 'Master I Droit pénal & sciences criminelles', lieu: 'Université de Montpellier · Mention Bien' },
                  { date: '2017–2019', titre: 'Licence de droit privé', lieu: 'Université de Montpellier' },
                ].map((f, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem' }}>
                    <span style={{ fontSize: '0.60rem', color: '#8b6240', letterSpacing: '0.06em', minWidth: '62px', paddingTop: '1px', flexShrink: 0 }}>{f.date}</span>
                    <div>
                      <div style={{ fontSize: '0.78rem', color: '#272018', lineHeight: 1.3 }}>{f.titre}</div>
                      <div style={{ fontSize: '0.65rem', color: 'rgba(39,32,24,0.45)', lineHeight: 1.4 }}>{f.lieu}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Expérience */}
            <div style={{ borderTop: '1px solid rgba(39,32,24,0.10)', paddingTop: '2rem' }}>
              <div style={{ fontSize: '0.56rem', letterSpacing: '0.22em', color: '#8b6240', textTransform: 'uppercase', marginBottom: '1.2rem' }}>
                Expérience professionnelle
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                {[
                  { date: '2025 –', titre: 'Avocate collaboratrice', lieu: 'Légide Avocats · Bordeaux — Droit immobilier & construction' },
                  { date: 'Jan–Jun 2024', titre: 'Élève-avocate · Droit pénal des affaires', lieu: 'Herald (anciennement Granrut) · Paris' },
                  { date: 'Jul–Déc 2023', titre: 'Élève-avocate · Médiation (115 dossiers)', lieu: 'ENGIE · Île-de-France' },
                  { date: 'Jan–Jun 2023', titre: 'Élève-avocate · Famille & patrimoine', lieu: 'Bochamp AARPI · Paris' },
                  { date: 'Jan–Jun 2022', titre: 'Stage CRFPA · Pénal & affaires', lieu: 'Garbarini & Associés · Paris' },
                  { date: 'Oct–Nov 2020', titre: 'Stage M2 · Pénal & famille', lieu: 'Pechevis avocats · Montpellier' },
                ].map((e, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem' }}>
                    <span style={{ fontSize: '0.60rem', color: '#8b6240', letterSpacing: '0.06em', minWidth: '62px', paddingTop: '1px', flexShrink: 0 }}>{e.date}</span>
                    <div>
                      <div style={{ fontSize: '0.78rem', color: '#272018', lineHeight: 1.3 }}>{e.titre}</div>
                      <div style={{ fontSize: '0.65rem', color: 'rgba(39,32,24,0.45)', lineHeight: 1.4 }}>{e.lieu}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Bio */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '28px', height: '1px', background: '#8b6240' }} />
              <span style={{ fontSize: '0.58rem', letterSpacing: '0.25em', color: '#8b6240', textTransform: 'uppercase' }}>Le cabinet</span>
            </div>

            <h2 style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
              fontWeight: 400, color: '#272018',
              margin: '0 0 2rem', lineHeight: 1.18, letterSpacing: '-0.01em',
            }}>
              L&apos;exigence du droit<br />
              <em style={{ color: '#8b6240', fontStyle: 'italic' }}>au service de vos projets immobiliers</em>
            </h2>

            <p style={{ fontSize: '0.88rem', color: '#5a4a38', lineHeight: 1.80, margin: '0 0 1.2rem' }}>
              Maître Eva Salvador-Sigwalt est avocate au Barreau de Bordeaux depuis 2024, spécialisée en droit immobilier, droit de la construction et baux commerciaux. Formée à l&apos;Université de Montpellier — où elle obtient un Master II en pratiques pénales et un diplôme universitaire en LegalTech — elle choisit ensuite de concentrer son expertise sur les litiges immobiliers et les enjeux patrimoniaux des particuliers et des professionnels.
            </p>

            <p style={{ fontSize: '0.88rem', color: '#5a4a38', lineHeight: 1.80, margin: '0 0 1.2rem' }}>
              Son parcours à l&apos;EFB, couronné par des stages au sein de structures reconnues — Herald (ex-Granrut) en pénal des affaires à Paris, ENGIE en médiation industrielle — lui confère une vision plurielle du contentieux et une capacité à conduire des dossiers techniquement complexes avec méthode.
            </p>

            <p style={{ fontSize: '0.88rem', color: '#5a4a38', lineHeight: 1.80, margin: '0 0 1.2rem' }}>
              Aujourd&apos;hui collaboratrice chez Légide Avocats à Bordeaux, elle intervient en contentieux immobilier privé : ventes immobilières, VEFA, vices cachés, baux résidentiels et commerciaux, troubles de voisinage, copropriété. Elle assiste également les maîtres d&apos;ouvrage et entrepreneurs dans les litiges de la construction, en référé-expertise comme en fond.
            </p>

            <p style={{ fontSize: '0.88rem', color: '#5a4a38', lineHeight: 1.80, margin: '0 0 2rem' }}>
              Dotée d&apos;une solide culture LegalTech acquise à Montpellier, elle exploite les outils numériques au service d&apos;une gestion rigoureuse et transparente des dossiers, dans le respect des intérêts de chaque client.
            </p>

            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              {['Droit immobilier', 'Construction', 'Baux commerciaux', 'Urbanisme', 'Copropriété'].map(d => (
                <span key={d} style={{
                  fontSize: '0.60rem', letterSpacing: '0.14em', textTransform: 'uppercase',
                  border: '1px solid rgba(39,32,24,0.18)', color: '#5a4a38',
                  padding: '0.35rem 0.85rem',
                }}>{d}</span>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
