import React, {useState, useEffect} from "react";
import { Line, Bar, Pie } from "react-chartjs-2";

import {
  Container, Row, Col, Form, Input, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";



const TestChart3 =()=> {
  const labels = ["January", "February", "March", "April", "May", "June"];
  
  const data_array = [0];

  const [number,setNumber] = useState(1);
  const [data1,setData1] = useState([0]);
  const [yAxisData, setYAxisData] = useState([0])

   useEffect(()=>{
    const interval = setInterval(()=>{
      //setTheArray(oldArray => [...oldArray, newElement]);

      const min = 1;
      const max = 100;
      const rand = min + Math.random() * (max - min);
    
      setData1(data1.push( Math.floor(rand)));
      //setData1( Math.floor(rand))
      //setData1(data1 => [data1, Math.floor(rand)]);

      setNumber(number+1)
      setYAxisData(yAxisData.push(data1.length))

      console.log( data1.toString());
      console.log( yAxisData.toString());
      
      
      //addData(data_live, yAxisData, data1)

    },1000)
    return () => clearInterval(interval);
   },[])

const data = {

  labels: [1,2,3,4,5,6,7],
  
  datasets: [
    {
      label: "Label",
      fill:true,
      backgroundColor:'rgba(53, 162, 235, 0.5)',
      borderColor: 'rgb(53, 162, 235)',
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],

};


const data_live = {
  labels: [],
  
  datasets: [
    {
      label: "Label",
      fill:true,
      backgroundColor:'rgba(53, 162, 235, 0.5)',
      borderColor: 'rgb(53, 162, 235)',
      data: [],
    },
  ],
};




function addData(chart, label, data) {
  chart.data.labels.push(label);
  chart.data.datasets.forEach((dataset) => {
      dataset.data.push(data);
  });
  chart.update();
}



 const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Line Chart',
    },
  },
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
        <Col><h1> ================{data1}  </h1> </Col>
      </Row>
      <Row>
        <Col><h1> ================{yAxisData}  </h1> </Col>
      </Row>
      <Row>
        <Col id="chart"><Bar options={options} data={data_live} /></Col>
        <Col><Bar options={options} data={data} /></Col>
        <Col><Line options={options} data={data} /></Col>
      </Row>
     
    </Container>
  </div>
  );
};




export default TestChart3;
