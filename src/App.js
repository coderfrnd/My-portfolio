import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import {Route,Routes} from 'react-router-dom'
import About from './component/Page/About';
import Projects from './component/Page/Projects';
import Skills from './component/Page/Skills';
// import 'typeface-roboto';
// import myImage from '../myimg-1.png'; 

function App() {
  return (
    <div  className="bg-black h-screen">
   <Navbar/>
   {/* <Home/> */}
   <Routes>
    <Route path='/' element={ <Home/> }/>
    <Route path='/about' element={ <About/> }/>
    <Route path='/project' element={ <Projects/> }/>
    <Route path='/skill' element={ <Skills/>}/>
   </Routes>

   {/* <Footer/> */}
   {/* <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div> */}
    </div>
  );
}

export default App;
