import { Button } from '../components/Button'
import '../assets/styles/home.css'
import backImg from '../assets/images/mainBackImg.jpg'

export function Home() {
  return (
    <>
      <div className="container">
        <div className="main-description">
          <div className="main-text-description">
            <h1>Saude natura para os seus cabelos</h1>

            <p>
              Um salão exclusivo em São Paulo, especializado em tratamentos
              naturais
            </p>
            <Button className="homeBtn" text="Agende um horario" />
          </div>
          <div className="main-Desc-Img">
            <img
              src={backImg}
              alt="mulher secando o cabelo da cliete"
              className="backImg"
            />
          </div>
        </div>
      </div>
    </>
  )
}
