import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: "CGV — Cabinet Salvador-Sigwalt · Avocate à Bordeaux",
}

export default function CGV() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#f5f1ec', minHeight: '100vh', paddingTop: '6rem' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', padding: '5rem 1.5rem 8rem' }}>

          <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 400, color: '#272018', lineHeight: 1.2, margin: '0 0 3.5rem' }}>
            Conditions générales de vente
          </h1>

          {[
            {
              titre: "Objet",
              contenu: "Les présentes conditions générales régissent les modalités de prestation de services juridiques par Maître Eva Salvador-Sigwalt, avocate au Barreau de Bordeaux.",
            },
            {
              titre: "Convention d'honoraires",
              contenu: "Conformément aux dispositions du Règlement Intérieur National de la profession d'avocat, une convention d'honoraires est systématiquement conclue avant toute intervention. Elle détermine le montant ou le mode de calcul des honoraires, ainsi que les modalités de facturation et de règlement.",
            },
            {
              titre: "Tarification",
              contenu: "Les honoraires sont fixés en tenant compte de la complexité de l'affaire, des diligences accomplies, du temps consacré et de la situation du client. Les honoraires peuvent être calculés au forfait, au temps passé, ou combiner les deux modalités.",
            },
            {
              titre: "Règlement",
              contenu: "Les honoraires sont payables à réception de la facture, sauf accord contraire précisé dans la convention. Des provisions sur honoraires peuvent être demandées en cours de mission.",
            },
            {
              titre: "Confidentialité",
              contenu: "Maître Eva Salvador-Sigwalt est soumise au secret professionnel conformément aux articles 66-5 de la loi du 31 décembre 1971 et 2.1 du RIN. Toutes les informations communiquées dans le cadre de la relation client sont strictement confidentielles.",
            },
            {
              titre: "Réclamations et médiation",
              contenu: "En cas de litige relatif aux honoraires, le client peut saisir le Bâtonnier du Barreau de Bordeaux aux fins de conciliation. En cas d'échec, un médiateur de la consommation peut être saisi conformément aux articles L. 611-1 et suivants du Code de la consommation.",
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
