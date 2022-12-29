import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import './Admin.css';
import {useState} from 'react'

function Admin(){

  const [videoUrl, setVideoUrl] = useState("")

  const getVideoUrl = function(url){
    setVideoUrl(url)
  }

  return (
    <>
    <Header />
    <Main videoUrl={videoUrl}/>
    <Footer setVideoUrl={setVideoUrl}/>
    </>
  )
}

export default Admin;