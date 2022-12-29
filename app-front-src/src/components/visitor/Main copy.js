import './Main.css';

import  video from "./video/videomario.mp4";
import enviar from './imagens/setaenviar.png';
import ReactPlayer from 'react-player'
import {useEffect, useState} from 'react';

function Main(props){

  const [url, setUrl] = useState("")

  useEffect(()=>{

    if(props.videoUrl != ""){
      setUrl(`http://localhost/videoVisitor/${props.verificador}`)
    }
    
  })

  return (
    
    <>
    
    <main className="principal">
    <div className="container">

      <div id="left">
      <ReactPlayer id="video" url={url} controls autoPlay={true} />
      </div>
    
     <div id="right">

        <div id="chat">
          <div id="titulochat">
            Chat ao vivo
          </div>
          <div id="msg">
            <div id="batepapo">
              <span className="name">Thiago</span>
              <span className="mensag">awdiawjd ijawidjis ajijdia sijdiajsdij asijdi jasdijasid jiasjd jasdadawdawd
                awdawdawdawdawdwa dawdawd wd awd awdsdaw as asfdafaw aw dasdawd awasd sad </span>
            </div>

        </div>
          
          <div id="buttonmensgem">
            <input maxLength="200" type="text"/>
            <img id="setaimg" src={enviar}  alt="seta"/>
          </div>
        
        </div>

      </div>

    </div>
  </main>

    </>
  )
}

export default Main;