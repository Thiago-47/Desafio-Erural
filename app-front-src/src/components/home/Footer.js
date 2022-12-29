import './Footer.css';
import linkdth from './imagens/linkdth.png';

function Footer(){
  return (
    <>
    <footer className="principal">
    <div className="container" id="rodape">
      <a id="logorodape" target="_blank" href="https://www.linkedin.com/in/thiago-abreu-b963a1141/" rel="noreferrer">
        <img src={linkdth}alt="logo"/>
      </a>
      <p>Para contato acessar o linkedin</p>
    </div>
  </footer>
    </>
  )
}

export default Footer;