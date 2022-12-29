import './Main.css';
//import video from "./video/videomario.mp4";
import ReactPlayer from 'react-player'
import Msg from './Msg';
import enviar from './imagens/setaenviar.png';
import {useEffect, useState, useRef} from 'react'
import io from 'socket.io-client';

function Main(props){

  const msgsContainer = useRef()

  const [socket, setSocket] = useState(io("http://localhost")) 
  const [isConnected, setIsConnected] = useState(socket.connected);

  const [url, setUrl] = useState("")
  const [newMsg, setNewMsg] = useState("")
  const [msgs, setMsgs] = useState([])

  const getNewMsg = function(event){
    let msg = event.target.value
    setNewMsg(msg)    
  }

  const sendNewMsg = function(){

    if(newMsg != ""){
      socket.emit('chatA', newMsg);
      setNewMsg("")
    }
    
  }

  useEffect(
    ()=>{
      socket.on('connect', () => {
        console.log('connect')
        setIsConnected(true);
        socket.on('chatB', function (msg) {

          console.log(msg)

          setMsgs(
            (oldMsgs)=>{
    
              return [
                ...oldMsgs, {key: oldMsgs.length , msg}
              ]
    
            }
          )
          
    
        });
      });
  
      socket.on('disconnect', () => {
        setIsConnected(false);
      });
    },[]
  )

  useEffect(()=>{

    if(props.videoUrl != ""){
      setUrl(`http://localhost/videoAdmin/${props.videoUrl}`)
    }

    console.log(msgs)
    msgsContainer.current.scrollTop = msgsContainer.current.scrollHeight;
    
  })

  const syncCurrentTime = function(event){
    socket.emit('videoA', event.target.currentTime);
  }

  return (
    
    <>
    
    <main className="principal">
    <div className="container">

      <div id="left">
        <video id="video" src={url} controls autoPlay={true} onTimeUpdate={syncCurrentTime}></video>
      </div>
    
     <div id="right">

        <div id="chat">
          <div id="titulochat">
            Chat ao vivo
          </div>
          <div id="msg" ref={msgsContainer}>

          { 

            msgs.map(
              msgObj => <Msg key={msgObj['key']} msg={msgObj['msg']}/>
            )
          }
          

        </div>
          
          <div id="buttonmensgem">
            <input maxLength="200" type="text" onChange={getNewMsg} value={newMsg} />
            <img id="setaimg" src={enviar}  alt="seta" onClick={sendNewMsg}/>
          </div>
        
        </div>

      </div>

    </div>
  </main>

    </>
  )
}

export default Main;