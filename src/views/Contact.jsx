import { Button } from "../components/Button";

import "../assets/styles/contact.css";

import phoneIcon from "../assets/images/phone.png";
import mailIcon from "../assets/images/mail.svg";
import localIcon from "../assets/images/local.svg";
import whatsIcon from "../assets/images/whats.png";

export function Contact() {
  return (
    <div className="contactContainer">
      <div className="contactForm">
        <h1>Saude natura para os seus cabelos</h1>

        <p>
          Um salão exclusivo em São Paulo, especializado em tratamentos naturais
        </p>
        <Button
          className="homeBtn contactBtn"
          text="Entrar em contato"
          image={whatsIcon}
        />
      </div>

      <div className="socials">
        <p>
          <img src={phoneIcon} alt="telefone" />
          11 99845-6754
        </p>
        <p>
          <img src={localIcon} alt="localização" />
          R. Amauri Souza, 346
        </p>
        <p>
          <img src={mailIcon} alt="email" />
          contato@beautysalon.com
        </p>
      </div>
    </div>
  );
}
