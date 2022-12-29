import '../HeaderCss/Header.css';
import TELAPEQUENA from './imagens/TELAPEQUENA.jpg';
import {useNavigate} from 'react-router-dom'

function Header(props){

  const navigate = useNavigate()

  const gohome = function(event){
    
    navigate('/')
  }
  return (
    <>
  <header className="principal">
    <div className="container" id="principalheader">
    <img  id="logo" src={TELAPEQUENA}  alt="imagem de um computador com varias telas" />
    <h1 id="slogan">Tela vídeo feito para apresentações empresariais.</h1>

    </div>
  </header>
    </>
  )
}

export default Header;