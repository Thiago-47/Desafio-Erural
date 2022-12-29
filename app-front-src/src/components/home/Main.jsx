import H from './Main.module.css';
import chamada from './imagens/chamadadevideo.png';
import {useNavigate} from 'react-router-dom'

function Main(props){

  const navigate = useNavigate()

  const goToVisitor = function(event){
    let campo = event.target;
    let valor = campo.value;
    //props.visitorXX()
    navigate('/visitor/'+valor)
  }
  const goreuniao = function(){
    //alert('pronto')
    //props.adminXX()
    navigate('/admin')
  }
  return (
    <>
    
    <main className="principal" id={H.main}>
    <div className="container">

      <div id={H.left}>
         <input className={H.input} type="text" onChange={goToVisitor} name="search" placeholder="Cole o seu codigo.." />
        <button className={H.button} onClick={goreuniao}>Criar uma reunião</button>
        

      </div>

      <div id={H.right}>
        <img src={chamada} id={H.imgpricipal}
          alt="imagem de um homem na frente de um notbook"/>
        <div id={H.text}>
          <p>
            Uma nova forma de ver e <span>compartilhar para sua equipe novas experiência!</span>
          </p>

        </div>
      </div>

    </div>
  </main>
    </>
  )
}

export default Main;