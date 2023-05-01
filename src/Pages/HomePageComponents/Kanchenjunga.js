import {UsernamePass,Password} from "./UsernamePass";
import React, { useState, useEffect } from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import {Link} from 'react-router-dom';


import {
  Container,
  Row,
  Col,
  Form,
  Input,
  Button,
  Navbar,
  Nav,
  NavbarBrand,
  NavLink_CSS,
  NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardHeader,
  Progress,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const Kanchenjunga = () => {

    const [posts, setPosts] = useState([]);

    const [numberXAxis, setNumberXAxis] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,]);
    const [numberYAxis, setNumberYAxis] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,]);
  
  
    const [yAxisDataFinal, setYAxisDataFinal] = useState([0, 0, 0]);

    const [lastUpdateTime, setLastUpdateTime] = useState("");
    const [brhStatus,setBrhStatus] = useState("danger");
    const [ brhStatusText, setBrhStatusText] = useState("Down");
    const [ lastCheckedTime, setLastCheckedTime] = useState("");
    const [ lastCheckedTimeUnix, setLastCheckedTimeUnix] = useState("")

    const modulationTable = ["QPSK","16QAM","64QAM","256QAM","1024QAM","4096QAM"];
    const coderateTable = ["2/15","3/15","4/15","5/15","6/15","7/15","8/15","9/15","10/15","11/15","12/15","13/15"];

    
    const [swVersion, setSwVersion]=useState("");
    const [gpsLock, setGpslock]=useState(false);
    const [paStatus, setpaStatus]= useState(false);
    const [stlRate, setStlRate] = useState("");
    const [emissionRate,setEmissionRate] = useState("");

    const [modulation,setModulation] = useState("0");
    const [codeRate,setCodeRate] = useState("0");

    const [plp0Status, setPlp0Status] = useState(false);
    const [plp1Status, setPlp1Status] =useState(false);
    const [plp2Status, setPlp2Status] =useState(false);
    const [plp3Status, setPlp3Status] = useState(false);

    const [subFrameP0, setSubFrameP0] = useState(false);
    const [subframeP1, setSubFrameP1] = useState(false);
    const [subFrameP2, setSubFrameP2] = useState(false);
    const [subFrameP3, setSubFrameP3] = useState(false);

    const [sysUpTime,setSysUpTime] = useState("NA");
    const [sysRunTime, setSysRunTime] = useState("NA");

    useEffect(() => {

// WARNING: For GET requests, body is set to null by browsers.
var data = JSON.stringify({
    "username": UsernamePass,
    "password": Password
  });
  
  var xhr = new XMLHttpRequest();
  
  
  xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
     // console.log(this.responseText);
     const abc =  JSON.parse(this.responseText).reverse()
    
     if(abc.length>0){
     if(abc.length>=27){
        for(let i = 26; i>=0; i--){
        
            const shiftXAxis = numberXAxis.shift();
            numberXAxis.push(abc[i].system_stats_som_internal_temp);
            const shiftYAxis = numberYAxis.shift();
            var timeNow = Date.parse((abc[i].timestamp));
            timeNow = timeNow+19800000;
            numberYAxis.push(new Date(timeNow).toISOString());

            
         }
     } else {
        for(let i = abc.length; i>=0; i--){
            console.log(abc[i].id)

            const shiftXAxis = numberXAxis.shift();
            numberXAxis.push(abc[i].system_stats_som_internal_temp);
            const shiftYAxis = numberYAxis.shift();
            numberYAxis.push(abc[i].timestamp);
         }
     }
     

            setNumberXAxis(numberXAxis);
            setNumberYAxis(numberYAxis);

            setLastUpdateTime( abc[0].timestamp); 
            setLastCheckedTime( new Date(Date.now() + 19800000).toISOString())
            setLastCheckedTimeUnix( Date.now())
            if(parseInt((setLastCheckedTimeUnix - (Date.parse((abc[0].timestamp))))) > 300000 ){
                setBrhStatus("danger")
                setBrhStatusText("Down");
                console.log((setLastCheckedTimeUnix - (Date.parse((abc[0].timestamp)))))
            } else{
                setBrhStatus("success")
                setBrhStatusText("Up");
                console.log((setLastCheckedTimeUnix - (Date.parse((abc[0].timestamp)))))
            }
            console.log(Date.now()+ 19800000)

            setSwVersion(abc[0].model_version)
            setGpslock(abc[0].gps_lock_status)
            setpaStatus(abc[0].pa_control)
            setStlRate(abc[0].pipeline_sched_stl_out_rate)
            setEmissionRate(abc[0].pipeline_sched_emission_rate)
            setModulation(abc[0].subframe0_plp0_mod_code)
            setCodeRate(abc[0].subframe0_plp0_code_rate)

            setPlp0Status(abc[0].subframe0_plp0_active)
            setPlp1Status(abc[0].subframe0_plp1_active)
            setPlp2Status(abc[0].subframe0_plp2_active)
            setPlp3Status(abc[0].subframe0_plp3_active)


            let seconds_up = abc[0].system_stats_system_uptime;
            const days_up = parseInt (seconds_up / (3600*24));
            seconds_up = seconds_up % (3600*24);
            const hours_up = parseInt( seconds_up / 3600 );
            seconds_up = seconds_up % 3600;
            const minutes_up = parseInt( seconds_up / 60 );
            seconds_up = seconds_up % 60;

            let seconds_run = abc[0].system_stats_active_running_time;
            const days_run = parseInt (seconds_up / (3600*24));
            seconds_up = seconds_up % (3600*24);
            const hours_run = parseInt( seconds_run / 3600 );
            seconds_run = seconds_run % 3600;
            const minutes_run = parseInt( seconds_run / 60 );
            seconds_run = seconds_run % 60;

            setSysUpTime(""+days_up+" Days "+hours_up+":"+minutes_up+":"+seconds_up)
            setSysRunTime(" "+days_run+" Days "+hours_run+":"+minutes_run+":"+seconds_run)

        }
    }
  });
  
//   xhr.open("GET", "https://staging.yoga.saankhyalabs.com/feapi/frontend/devices/B0:7E:11:51:91:64/stats/");
//   xhr.setRequestHeader("Authorization", "Basic YnJob3duZXI6MTIzQEJyaG93bmVy");
//   xhr.setRequestHeader("Content-Type", "application/json");
  
//   xhr.send(data);
xhr.open("GET", "http://174.138.120.85:3008/6");
xhr.send(); 

    }, [lastUpdateTime]);


  useEffect(() => {
      const interval = setInterval(() => {


      ///////////////////////////// fetch from server start /////////////////////////

      var data = JSON.stringify({
        "username": UsernamePass,
        "password": Password
      });
      
      var xhr = new XMLHttpRequest();
      
      
      xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
         // console.log(this.responseText);

         const abc =  JSON.parse(this.responseText).reverse();
         console.log("LastUpdateTimeStamp:"+ lastUpdateTime)

         if((abc.length>0)&&(abc[0].timestamp != lastUpdateTime) && (lastUpdateTime!= undefined)){
         const shiftXAxis = numberXAxis.shift();
         numberXAxis.push(abc[0].system_stats_som_internal_temp);
         const shiftYAxis = numberYAxis.shift();
         var timeNow = Date.parse((abc[0].timestamp));
         timeNow = timeNow+19800000;
         numberYAxis.push(new Date(timeNow).toISOString());

    
        // setYAxisDataFinal([0, numberXAxis[0], numberXAxis[1]]);
         setNumberXAxis(numberXAxis);
         setNumberYAxis(numberYAxis);

         console.log("CurrentTimeStamp:"+ abc[0].timestamp)
         setLastUpdateTime(abc[0].timestamp)

         console.log("setTime update::"+lastUpdateTime)


        }
        else{
            console.log("time is same:")
        }

        const lastTime = lastCheckedTimeUnix;

        setLastCheckedTime( new Date(Date.now() + 19800000).toISOString())
        setLastCheckedTimeUnix(Date.now())

        if(parseInt((lastTime - (Date.parse((abc[0].timestamp))))) > 300000 ){
            setBrhStatus("danger")
            setBrhStatusText("Down");
            
            console.log((lastTime - (Date.parse((abc[0].timestamp)))))
        } else{
            setBrhStatus("success")
            setBrhStatusText("Up");
            console.log((lastTime - (Date.parse((abc[0].timestamp)))))

        }

    }
      });
      
    //   xhr.open("GET", "https://staging.yoga.saankhyalabs.com/feapi/frontend/devices/B0:7E:11:51:91:64/stats/");
    //   xhr.setRequestHeader("Authorization", "Basic YnJob3duZXI6MTIzQEJyaG93bmVy");
    //   xhr.setRequestHeader("Content-Type", "application/json");
      
    //   xhr.send(data);
    xhr.open("GET", "http://174.138.120.85:3008/6");
xhr.send(); 

      //////////////////////////// fetch from server end ////////////////////////////

    //   setYAxisDataFinal([0,numberXAxis[0], numberXAxis[1]]);
    //   const abc1 = numberXAxis.shift();
    //   numberXAxis.push(Math.floor(rand));
    //   setNumberXAxis(numberXAxis); 
    }, 5000);
    return () => clearInterval(interval);
  }, [lastUpdateTime,numberXAxis,numberYAxis,lastCheckedTimeUnix]);

  var data = {
    labels: numberYAxis,

    datasets: [
      {
        label: "Temp SOM:",
        fill: true,
        backgroundColor: (context: ScriptableContext<"line">) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0.5, "rgba( 52, 202, 250  ,1)");
          gradient.addColorStop(1, "rgba( 52, 202, 250  ,0)");
          return gradient;
        },
        borderColor: "rgb(53, 162, 235)",
        data: numberXAxis,
      },
        {
          type: 'line',
          fill: false,
          borderColor: "rgb(240, 20, 35)",
          data: [100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,],
        },
        {
          type: 'line',
          fill: false,
          borderColor: "rgb(00, 00, 00)",
          data: [125],
        },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      colors: {
        enabled: true,
      },
      title: {
        display: false,
        text: "Bar Chart",
      },
    },
    scales: {
        x: {
            display:false,
          },
      y: {
        display: false,
      },
    },
    radius:0,
    borderRadius:50,
  
  };



  return (
    <Container>
      
        <pre></pre>
          <Card style={{}}>
            <CardHeader>
                <Row>
                    <Col>
                Kanchenjunga
                </Col>
                
                
                <Col> 
                <Button size="sm" className="float-right" disabled color={brhStatus}>Status: {brhStatusText}</Button>
                </Col>
                </Row>
                </CardHeader>
            <Bar id="chart1" options={options} data={data} />
            <pre></pre>
            

            <CardBody>
              <CardTitle tag="h5">BRH LPLT</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
              <a href="https://maps.google.com/?q=28.63,77.22528" target="_blank" rel="noopener noreferrer">Location Map</a>
                {/* https://maps.google.com/?q=28.60954,77.22690 */}
              </CardSubtitle>
              
              <CardText>
                    <Row>
                    <Col>
                    <Button size="sm" disabled color={gpsLock? "success" : "danger"}>GPS: {gpsLock? "Locked": "Unlocked"}</Button>
                    </Col>
                    <Col>
                    <Button size="sm" disabled color={paStatus? "success" : "danger"}>RF: {paStatus? "Tx-On": "Tx-Off"}  </Button>
                    </Col>
                    </Row>
                    <pre></pre>
                    <Row>
                    <Col>
                    <Button size="sm" disabled>STL Rate: {stlRate}</Button>
                    </Col>
                    <Col>
                    <Button size="sm" disabled>Emission Rate: {emissionRate}</Button>
                    </Col>
                    
                    <Col>
                    <Button size="sm" disabled>Mod/Cod: {modulationTable[parseInt(modulation)]} {coderateTable[parseInt(codeRate)]}</Button>
                    </Col>
                    </Row>
                    <pre></pre>
                    <Row>
                  
                    </Row>
                    <pre></pre>
                    <Row>
                    <Col>
                    <Button size="sm" disabled>Up Time: {sysUpTime} {"|"} Run Time:{sysRunTime} </Button>
                    </Col>
                    
                </Row>
                    {/* <Row>
                    <Col>
                    <Button size="sm" disabled>SubFrame P0:{"True"} {"|"} P1:{"true"} {"|"} P2: {"true"} {"|"} P3:{"true"}</Button>
                    </Col>
                    
                </Row> */}

          </CardText>

              <Button size="sm" disabled>Last checked: {lastCheckedTime}</Button>
            </CardBody>
          </Card>
        
    </Container>
  );
};

export default Kanchenjunga;
