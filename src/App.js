import './App.css';
import Navbar_Menu from "./navbar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home2 from './Pages/index';
import Blog from './Pages/blog';
import About from './Pages/about';
import SignUp from './Pages/signup';
import Count_component_return from './Count_Component';
import LineChart from './Pages/LineChart';
import TestChart2 from './Pages/TestChart2'
import TestChart1 from './Pages/TestChart1';
import TestChart3 from './Pages/TestChart3';
import Home from './Pages/Home'


function App() {
  return (

   <Router>
    <Navbar_Menu/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/testchart3' element={<TestChart3/>}/>
      {/* <Route path='/about' element={<About/>}/>
      <Route path='/blogs' element={<Blog/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/test_chart_1' element={<TestChart2/>}/>
      <Route path='/testchart1' element={<TestChart1/>}/>
      <Route path='/testchart3' element={<TestChart3/>}/> */}
    </Routes>
   </Router>
  );
}

export default App;
