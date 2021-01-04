import Navbar from './Navbar';
import Footer from './Footer';
import Main from './Main';
import EmailSignup from './EmailSignup'
import './App.css';

function App(props) {
  return (
    <div>
      <Navbar/>
      <Main />
      <hr></hr>
      <EmailSignup />
      <Footer/>
    </div>
    
  )
}

export default App;
