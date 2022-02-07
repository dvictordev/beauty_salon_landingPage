import '../assets/styles/services.css'
import capilarTerapy from '../assets/images/iconterapia_capilar.svg'
import iconCorte from '../assets/images/iconcortes.svg'
import iconTratamentos from '../assets/images/icontratamentos.svg'

export function Services() {
  return (
    <>
    <section className="services">
        <div className="servicesDesc">
          <h2>Serviços</h2>
          <p>Com mais de 10 anos no mercado, o <span>Beautysalon</span> já conquistou clientes de inúmeros países com seus tratamentos exclusivos e totalmente naturais</p>
        </div>
        <section className="servicesCards">
          <div className="card">
            <img src={capilarTerapy} alt="icone terapia capila" />
            <h2>Terapia capilar</h2>
            <p>Terapia completa para couro cabeludo e fios, protegendo todos os tipos de cabelos, inclusive os longos e finos.</p>
          </div>
          <div className="card middle">
            <img src={iconCorte} alt="icone cortes" />
            <h2>Cortes</h2>
            <p>A nossa equipe é repleta de profissionais renomados, famosos por lançarem tendências com cortes diferenciados e clássicos.</p>
          </div>
          <div className="card">
            <img src={iconTratamentos} alt="icone tratamentos" />
            <h2>Tratamentos</h2>
            <p>O beautysalon conta com diversos tratamentos naturais e totalmente veganos, para qualquer tipo de cabelo.</p>
          </div>
         
        </section>
    </section>
    </>
    )
}
