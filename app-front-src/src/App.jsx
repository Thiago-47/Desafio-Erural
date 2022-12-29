import Home from './components/home/Home'
import Admin from './components/admin/Admin'
import Visitor from './components/visitor/Visitor'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import {useState} from "react"

function App(){

  {/*let admin = function() {
    alert('ir para admin')
  }

  let visitor = function() {
    alert('ir para visitor')
  }*/}

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/visitor/:v" element={<Visitor />} />
    </Routes>
    {/*<Home adminX={admin} visitorX={visitor}/>
    <Admin />
  <Visitor />*/}
    </>
  )
}
export default App