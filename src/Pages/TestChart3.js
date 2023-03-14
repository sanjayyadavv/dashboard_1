import React, {useState, useEffect} from "react";
import { Line, Bar, Pie } from "react-chartjs-2";

import {
  Container, Row, Col, Form, Input, Button, Navbar, Nav,
  NavbarBrand,NavLink_CSS, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import LineChart from "./LineChart";




const TestChart3 =()=> {


  const [number,setNumber] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
  const [number_2,setNumber_2] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);

  const [yAxisDataFinal, setYAxisDataFinal] = useState([0,0,0])


   useEffect(()=>{
    const interval = setInterval(()=>{

      const min = 7;
      const max = 100;
      const rand = min + Math.random() * (max - min);
      const rand2 = min + Math.random() * (max - min*4);

if(rand >= 30){
  setYAxisDataFinal([0,number[0],number[1]])
  const abc1 = number.shift()   
  const abc2 = number_2.shift() 
  number.push(Math.floor(rand))
  number_2.push(0)
  setNumber(number)
} else {
  const abc1 = number.shift()   
  const abc2 = number_2.shift()
  number.push(0) 
  number_2.push(Math.floor(rand))
  setNumber_2(number_2)
}



// setYAxisDataFinal([0,number[0],number[1]])
// const abc1 = number.shift()   
// number.push(Math.floor(rand))
// setNumber(number)

     

    },1000)
    return () => clearInterval(interval);
   },[])



var data = {

  labels: number,
  
  datasets: [
    {
      label: "Label",
      fill:true,
      backgroundColor:'rgba(53, 162, 235, 0.5)',
      borderColor: 'rgb(53, 162, 235)',
      data:number,
    },
    {
      label: "Label",
      fill:true,
      backgroundColor:'rgba(256, 162, 235, 0.5)',
      borderColor: 'rgb(53, 162, 235)',
      data:number_2,
    },
  ],

};



 const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Line Chart',
    },
  },
  scales: {
    x: {
        display: true
    },
    y: {
        display: true
    }
}
};


  return (
    <div
    style={{
      display: "block",
      width: 1200,
      height:1500,
      padding: 30
    }}
  >
    <Container>
      <Row>
        <Col><Bar id="chart" options={options} data={data} /></Col>
      </Row>
     
    </Container>
  </div>
  );
};




export default TestChart3;
