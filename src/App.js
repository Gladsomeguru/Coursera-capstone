import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";
import Header from './HeaderComponent.js';
import Main from './Main.js';
import Specials from './Specials.js';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Specials />
    </>
  )
}

export default App;
