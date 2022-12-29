import Footer from './Footer';
import Header from './Header';
import Main from './Main';

function Home(props){
  return (
    <>
    <Header />
    <Main /*adminXX={props.adminX} visitorXX={props.visitorX}*//>
    <Footer />
    </>
  )
}

export default Home;