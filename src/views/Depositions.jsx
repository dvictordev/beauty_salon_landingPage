import aspasIcon from "../assets/images/Aspas.png";
import "../assets/styles/depositions.css";
import { useApi } from "../hooks/useApi";

export function Depositions() {
  const data = useApi("https://api.github.com/users/dvictordev");

  return (
    <div className="deposContainer">
      <h1>Depoimentos de quem já passou por aqui</h1>

      <div className="depositionsContent">
        <div className="cardDepositions">
          <p>
            <img src={aspasIcon} alt="" /> Eu sou cliente do Beautysalon há 5
            anos e não troco por nada! Certamente meu cabelo mudou muito depois
            que comecei a tratar somente com produtos naturais e veganos. São
            profissionais incríveis e qualificados.
          </p>
          <div className="userInfo">
            <img src={data.avatar_url} alt={data.name} />
            <h3>{data.name}</h3>
          </div>
        </div>
        <div className="cardDepositions">
          <p>
            <img src={aspasIcon} alt="" /> Minha mãe frequenta o salão há anos e
            me levou um dia para conhecer. Minha experiência foi incrível, eu
            continuo fazendo o a terapia capilar e isso salvou o meu cabelo.
            Adoro todos os profissionais do Beautysalon.
          </p>

          <div className="userInfo">
            <img src={data.avatar_url} alt={data.name} />
            <h3>{data.name}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
