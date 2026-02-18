import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Foot from './Comp/Foot/Foot.jsx';
import Head from './Comp/Head/Head.jsx';
import 'animate.css/animate.min.css';
import Top from './Comp/Top/Top.jsx';
import Navi from './Comp/Nav/Nav.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Comp/Home/Home.jsx';
import Gallery from './Comp/Gallery/Gallery.jsx';
import Projects from './Comp/Projects/Projects.jsx';
import Contact from './Comp/Contact/Contact.jsx';

function App() {
  return (
    <div>
      <Head />
      
      <BrowserRouter>
      <Top />
      <Navi />
      <Routes className="App"> 
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/gallery' element={< Gallery />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      </BrowserRouter>
      
      <Foot />
    </div>
  );
}

export default App;
