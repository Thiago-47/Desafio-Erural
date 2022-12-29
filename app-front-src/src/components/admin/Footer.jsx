import './Footer.css';
import {useRef} from "react";

function Footer(props){

  const invisivel = useRef()
  const share = useRef()

 const escolherArquivo = function(){
  invisivel.current.click();   
 }

 const capturarArquivo = function(){  

  let arquivos = invisivel.current.files;

  for (let index = 0; index < arquivos.length; index++) {
    const arquivo = arquivos[index];
    let type = arquivo.type;
    if(type == "video/mp4"){
      upload(arquivo)
    }else{
      alert('selecione um arquivo de vídeo')

    }
    
  }

 }

 const setVideoUrl = function(url){
  props.setVideoUrl(url)
 }

 const upload = function(arquivo){
  // Create an object of formData
  const formData = new FormData();
      
  // Update the formData object
  formData.append("avatar", arquivo, arquivo.name);

  //axios.post("http://localhost/upload", formData);
  fetch("http://localhost/upload", {
    method: 'POST',
    body: formData
  })
    .then(res => res.json())
    .then(response => {
      console.log(response)
      share.current.value = response["codigo"]
      setVideoUrl(response["data"]["name"])
    })
    .catch(err => console.error(err))
}
 
  return (
    <>
  <footer className="principal">
    <div className="container" id="rodape">
      <div id="barraleft">
        <input ref={invisivel} onChange={capturarArquivo} style={{display:"none"}} type="file" id='input' />
        <button onClick={escolherArquivo}>UPLOAD</button>
        <div id="link"> <input ref={share} type="link" /><span>compartilhamento</span> </div>
        <img src="" alt="" />

      </div>
      <button>ocultar</button>
    </div>
  </footer>
    </>
  )
}

export default Footer;