import Logo from '../assets/images/Logo.svg'
import '../assets/styles/footer.css'
import FaceLogo from '../assets/images/facebook.svg'
import InstaLogo from '../assets/images/instagram.svg'
import YoutubeLogo from '../assets/images/youtube.svg'
import FooterLogo from '../assets/images/footerLogo.svg'

export function Footer(props) {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-items">
          <div className="footer-desc">
            <img src={FooterLogo} alt="logo" />
            <p>©2021 Beautysalon.</p>
            <p>Todos os direitos reservados.</p>
          </div>
          <div className="footer-social">
            <ul>
              <li>
                <img src={InstaLogo} alt=" logo instagram" />
              </li>
              <li>
                <img src={FaceLogo} alt="" />
              </li>
              <li>
                <img src={YoutubeLogo} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
