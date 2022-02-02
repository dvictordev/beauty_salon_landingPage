import Logo from '../assets/images/Logo.svg'
import '../assets/styles/footer.css'

export function Footer(props) {
  return (
    <footer>
      <div className="container">
        <div className="footer-items">
          <div className="footer-desc">
            <img src={Logo} alt="logo" />
            <p>©2021 Beautysalon.</p>
            <p>Todos os direitos reservados.</p>
          </div>
          <div className="footer-social">
            <ul>
              <li>
                <img src="" alt="" />
              </li>
              <li>
                <img src="" alt="" />
              </li>
              <li>
                <img src="" alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
