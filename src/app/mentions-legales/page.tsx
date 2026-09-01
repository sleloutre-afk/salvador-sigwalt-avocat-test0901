import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: "Mentions légales — Cabinet Salvador-Sigwalt · Avocate à Bordeaux",
}

export default function MentionsLegales() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#f5f1ec', minHeight: '100vh', paddingTop: '6rem' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', padding: '5rem 1.5rem 8rem' }}>

          <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 400, color: '#272018', lineHeight: 1.2, margin: '0 0 3.5rem' }}>
            Mentions légales
          </h1>

          {[
            {
              titre: "Éditeur du site",
              contenu: "Maître Eva Salvador-Sigwalt\n22 rue Fondaudège, 33000 Bordeaux\nTéléphone : 07 67 61 64 58\nEmail : eva.salvador-sigwalt@outlook.fr\nMembre du Barreau de Bordeaux — Inscription 2024",
            },
            {
              titre: "Qualité professionnelle",
              contenu: "Avocate inscrite au Barreau de Bordeaux depuis novembre 2024.\nAssurance responsabilité civile professionnelle souscrite auprès d'un assureur agréé pour l'exercice de la profession d'avocat en France.\nRègles professionnelles applicables : Règlement Intérieur National (RIN) et règlement intérieur du Barreau de Bordeaux.",
            },
            {
              titre: "Hébergement",
              contenu: "Ce site est hébergé par Vercel Inc., 340 Pine Street Suite 701, San Francisco, CA 94104, États-Unis.",
            },
            {
              titre: "Propriété intellectuelle",
              contenu: "L'ensemble des contenus présents sur ce site (textes, images, logos) est protégé par le droit d'auteur. Toute reproduction, même partielle, est interdite sans autorisation préalable écrite.",
            },
            {
              titre: "Responsabilité",
              contenu: "Les informations publiées sur ce site ont un caractère général et ne constituent pas un conseil juridique. Pour toute question relative à votre situation personnelle, veuillez prendre contact avec le cabinet.",
            },
            {
              titre: "Données personnelles",
              contenu: "Les données collectées via ce site sont traitées conformément au Règlement Général sur la Protection des Données (RGPD). Vous disposez d'un droit d'accès, de rectification et de suppression de vos données en contactant : eva.salvador-sigwalt@outlook.fr.",
            },
          ].map(({ titre, contenu }) => (
            <div key={titre} style={{ marginBottom: '2.8rem' }}>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.1rem', fontWeight: 400, color: '#272018', margin: '0 0 0.9rem', paddingBottom: '0.7rem', borderBottom: '1px solid rgba(39,32,24,0.10)' }}>
                {titre}
              </h2>
              <p style={{ fontSize: '0.84rem', lineHeight: 1.85, color: 'rgba(39,32,24,0.60)', margin: 0, whiteSpace: 'pre-line' }}>
                {contenu}
              </p>
            </div>
          ))}

        </div>
      </main>
      <Footer />
    </>
  )
}
