import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import './Visitor.css';
import {useParams} from 'react-router-dom';

function Visitor(){
  const {v} = useParams();

  return (
    <>
    <Header />
    <Main verificador={v} />
    <Footer />
    </>
  )
}

export default Visitor;