import './App.css';
import Foot from './Comp/Foot/Foot.jsx';
import Head from './Comp/Head/Head.jsx';
import 'animate.css/animate.min.css';
import Top from './Comp/Top/Top.jsx';
import Nav from './Comp/Nav/Nav.jsx';

function App() {
  return (
    <div className="App">
      <Head />
      <Top />
      <Nav />
    
      <Foot />
    </div>
  );
}

export default App;
