import './App.css';
import Navbar_Menu from "./navbar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


import Home from './Pages/Home'
import Home_Page_1 from './Pages/Home_Page_1';
import Home_Page_2 from './Pages/Home_Page_2';
import Home_Page_3 from './Pages/Home_Page_3';


function App() {
  return (

   <Router>
    <Navbar_Menu/>
    <Routes>
      <Route exact path='/' element={<Home_Page_1/>}/>

      <Route path='/home_page_1' element={<Home_Page_1/>}/>
      <Route path='/home_page_2' element={<Home_Page_2/>}/>
      <Route path='/home_page_3' element={<Home_Page_3/>}/>

  
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
