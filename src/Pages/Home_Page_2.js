import React, { useState, useEffect } from "react";
import { Line, Bar, Pie } from "react-chartjs-2";

import { Map, Marker } from "pigeon-maps";
import antenna_on from "./../Images/antenna_on.png";

import {
  Container,
  Row,
  Col,
  CardGroup,
  Form,
  Input,
  Button,
  Navbar,
  Nav,
  NavbarBrand,
  NavLink_CSS,
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
import LineChart from "./LineChart";
import UpscBhavan from "./HomePageComponents/UpscBhavan";
import Shangrila from "./HomePageComponents/Shangrila";
import Dhawandeep from "./HomePageComponents/Dhawandeep";
import K_51 from "./HomePageComponents/K_51";
import Kanchenjunga from "./HomePageComponents/Kanchenjunga";
import Uco from "./HomePageComponents/Uco";
import EnhancedTable from "./LandingPage/BrhTable";
import { MyMap } from "./MyMap";

const Home_Page_2 = () => {
  //  ||||||||||||||||||||||||||||||||||||||||||| Map state start ||||||||||||||||||||||||||||||||||||||||||||||||||

  const deviceState = ["Down", "Provisioned", "Init", "Config", "UP"];

  const [stateUco, setStateUco] = useState("red");
  const [stateUpsc, setStateUpsc] = useState("red");
  const [stateShangrila, setStateShangrila] = useState("red");
  const [stateDhawandeep, setStateDhawandeep] = useState("red");
  const [stateK51, setStateK51] = useState("red");
  const [stateKanchenjunga, setStateKanchenjunga] = useState("red");


  // |||||||||||||||||||||||||||||||||||||||||||| Map State End   ||||||||||||||||||||||||||||||||||||||||||||||||||

  // ||||||||||||||||||||||||||||||||||||||||||||| Map Live status On page laod start|||||||||||||||||||||||||||||||||||||||||||

  React.useEffect(() => {


    var xhr2 = new XMLHttpRequest();
    xhr2.withCredentials = false;
    xhr2.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        const abc = JSON.parse(this.responseText).reverse();
        if (abc.length > 0) {
          const setLastCheckedTimeUnix = Date.now();
          if ( parseInt(setLastCheckedTimeUnix - Date.parse(abc[0].timestamp)) > 300000) {
            setStateUpsc("red")
          } else {
            if (Math.floor(abc[0].system_stats_som_internal_temp) > 100) {
              setStateUpsc("orange")

            } else {
              setStateUpsc("green")

            }
          }
        }
      }
    });
    xhr2.open("GET", "http://174.138.120.85:3008/2");
    xhr2.send();

    var xhr3 = new XMLHttpRequest();
    xhr3.withCredentials = false;
    xhr3.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        const abc = JSON.parse(this.responseText).reverse();
        if (abc.length > 0) {
          const setLastCheckedTimeUnix = Date.now();
          if ( parseInt(setLastCheckedTimeUnix - Date.parse(abc[0].timestamp)) > 300000) {
            setStateShangrila("red")
          } else {
            if (Math.floor(abc[0].system_stats_som_internal_temp) > 100) {
              setStateShangrila("orange")

            } else {
              setStateShangrila("green")

            }
          }
        }
      }
    });
    xhr3.open("GET", "http://174.138.120.85:3008/3");
    xhr3.send();

    var xhr4 = new XMLHttpRequest();
    xhr4.withCredentials = false;
    xhr4.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        const abc = JSON.parse(this.responseText).reverse();
        if (abc.length > 0) {
          const setLastUpdateTime = abc[0].timestamp;
          const setLastCheckedTimeUnix = Date.now();
          if ( parseInt(setLastCheckedTimeUnix - Date.parse(abc[0].timestamp)) > 300000) {
            setStateDhawandeep("red")
          } else {
            if (Math.floor(abc[0].system_stats_som_internal_temp) > 100) {
              setStateDhawandeep("orange")

            } else {
              setStateDhawandeep("green")

            }
          }
        }
      }
    });
    xhr4.open("GET", "http://174.138.120.85:3008/4");
    xhr4.send();

    var xhr5 = new XMLHttpRequest();
    xhr5.withCredentials = false;
    xhr5.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        const abc = JSON.parse(this.responseText).reverse();
        if (abc.length > 0) {
          const setLastCheckedTimeUnix = Date.now();
          if ( parseInt(setLastCheckedTimeUnix - Date.parse(abc[0].timestamp)) > 300000) {
            setStateK51("red")
          } else {
            if (Math.floor(abc[0].system_stats_som_internal_temp) > 100) {
              setStateK51("orange")

            } else {
              setStateK51("green")

            }
          }
        }
      }
    });
    xhr5.open("GET", "http://174.138.120.85:3008/5");
    xhr5.send();

    var xhr6 = new XMLHttpRequest();
    xhr6.withCredentials = false;
    xhr6.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        const abc = JSON.parse(this.responseText).reverse();
        if (abc.length > 0) {

          const setLastCheckedTimeUnix = Date.now();
          if ( parseInt(setLastCheckedTimeUnix - Date.parse(abc[0].timestamp)) > 300000) {
            setStateKanchenjunga("red")
          } else {
            if (Math.floor(abc[0].system_stats_som_internal_temp) > 100) {
              setStateKanchenjunga("orange")
            } else {
              setStateKanchenjunga("green")
            }
          }
        }
      }
    });
    xhr6.open("GET", "http://174.138.120.85:3008/6");
    xhr6.send();

    var xhr7 = new XMLHttpRequest();
    xhr7.withCredentials = false;
    xhr7.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        const abc = JSON.parse(this.responseText).reverse();
        if (abc.length > 0) {
          const setLastCheckedTimeUnix =  Date.now()
          if ( parseInt(setLastCheckedTimeUnix - Date.parse(abc[0].timestamp)) > 300000) {
            setStateUco("red")
          } else {
            if (Math.floor(abc[0].system_stats_som_internal_temp) > 100) {
              setStateUco("orange")
            } else {
              setStateUco("green")
            }
          }
        }
      }
    });
    xhr7.open("GET", "http://174.138.120.85:3008/7");
    xhr7.send();
  }, []);

  // ||||||||||||||||||||||||||||||||||||||||||||| Map Live status On page laod end   |||||||||||||||||||||||||||||||||||||||||||


  // ||||||||||||||||||||||||||||||||||||||||||||| Map Live status update with timer start ||||||||||||||||||||||||||||||||||||||||
  React.useEffect(() => {
    const interval = setInterval(() => {

      var xhr2 = new XMLHttpRequest();
      xhr2.withCredentials = false;
      xhr2.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
          const abc = JSON.parse(this.responseText).reverse();
          if (abc.length > 0) {
            const setLastCheckedTimeUnix = Date.now();
            if ( parseInt(setLastCheckedTimeUnix - Date.parse(abc[0].timestamp)) > 300000) {
              setStateUpsc("red")
            } else {
              if (Math.floor(abc[0].system_stats_som_internal_temp) > 100) {
                setStateUpsc("orange")
  
              } else {
                setStateUpsc("green")
  
              }
            }
          }
        }
      });
      xhr2.open("GET", "http://174.138.120.85:3008/2");
      xhr2.send();
  
      var xhr3 = new XMLHttpRequest();
      xhr3.withCredentials = false;
      xhr3.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
          const abc = JSON.parse(this.responseText).reverse();
          if (abc.length > 0) {
            const setLastCheckedTimeUnix = Date.now();
            if ( parseInt(setLastCheckedTimeUnix - Date.parse(abc[0].timestamp)) > 300000) {
              setStateShangrila("red")
            } else {
              if (Math.floor(abc[0].system_stats_som_internal_temp) > 100) {
                setStateShangrila("orange")
  
              } else {
                setStateShangrila("green")
  
              }
            }
          }
        }
      });
      xhr3.open("GET", "http://174.138.120.85:3008/3");
      xhr3.send();
  
      var xhr4 = new XMLHttpRequest();
      xhr4.withCredentials = false;
      xhr4.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
          const abc = JSON.parse(this.responseText).reverse();
          if (abc.length > 0) {
            const setLastUpdateTime = abc[0].timestamp;
            const setLastCheckedTimeUnix = Date.now();
            if ( parseInt(setLastCheckedTimeUnix - Date.parse(abc[0].timestamp)) > 300000) {
              setStateDhawandeep("red")
            } else {
              if (Math.floor(abc[0].system_stats_som_internal_temp) > 100) {
                setStateDhawandeep("orange")
  
              } else {
                setStateDhawandeep("green")
  
              }
            }
          }
        }
      });
      xhr4.open("GET", "http://174.138.120.85:3008/4");
      xhr4.send();
  
      var xhr5 = new XMLHttpRequest();
      xhr5.withCredentials = false;
      xhr5.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
          const abc = JSON.parse(this.responseText).reverse();
          if (abc.length > 0) {
            const setLastCheckedTimeUnix = Date.now();
            if ( parseInt(setLastCheckedTimeUnix - Date.parse(abc[0].timestamp)) > 300000) {
              setStateK51("red")
            } else {
              if (Math.floor(abc[0].system_stats_som_internal_temp) > 100) {
                setStateK51("orange")
  
              } else {
                setStateK51("green")
  
              }
            }
          }
        }
      });
      xhr5.open("GET", "http://174.138.120.85:3008/5");
      xhr5.send();
  
      var xhr6 = new XMLHttpRequest();
      xhr6.withCredentials = false;
      xhr6.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
          const abc = JSON.parse(this.responseText).reverse();
          if (abc.length > 0) {
  
            const setLastCheckedTimeUnix = Date.now();
            if ( parseInt(setLastCheckedTimeUnix - Date.parse(abc[0].timestamp)) > 300000) {
              setStateKanchenjunga("red")
            } else {
              if (Math.floor(abc[0].system_stats_som_internal_temp) > 100) {
                setStateKanchenjunga("orange")
              } else {
                setStateKanchenjunga("green")
              }
            }
          }
        }
      });
      xhr6.open("GET", "http://174.138.120.85:3008/6");
      xhr6.send();
  
      var xhr7 = new XMLHttpRequest();
      xhr7.withCredentials = false;
      xhr7.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
          const abc = JSON.parse(this.responseText).reverse();
          if (abc.length > 0) {
            const setLastCheckedTimeUnix =  Date.now()
            if ( parseInt(setLastCheckedTimeUnix - Date.parse(abc[0].timestamp)) > 300000) {
              setStateUco("red")
            } else {
              if (Math.floor(abc[0].system_stats_som_internal_temp) > 100) {
                setStateUco("orange")
              } else {
                setStateUco("green")
              }
            }
          }
        }
      });
      xhr7.open("GET", "http://174.138.120.85:3008/7");
      xhr7.send();

    }, 10000)
    return () => clearInterval(interval);
  }, [])

  // ||||||||||||||||||||||||||||||||||||||||||||| map Live status update with timer end |||||||||||||||||||||||||||||||||||||||||

  // |||||||||||||||||||||||||||||||||||||||||||| Map Start |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

  const [hue, setHue] = useState("green");
  const [deviceName, setDeviceName] = useState("");
  const color = `hsl(${hue % 360}deg 9% 70%)`;

  const MouseOver = (e, index) => {
    //window.alert("Mouse Over at :" + index);
  };

  const MouseClick = (e, index) => {
    //window.alert("Mouse Over at :" + index);
    switch (index) {
      case "UPSC_BHAVAN":
        return setDeviceName("Site Name: Upsc");
      case "SHANGRI_LA":
        return setDeviceName("Site Name: Shangri La");

      case "DHAWANDEEP":
        return setDeviceName("Site Name: Dhawandeep");
      case "K_51":
        return setDeviceName("Site Name: K 51");

      case "KANCHENJUNGA":
        return setDeviceName("Site Name: Kanchenjunga");
      case "UCO_BANK":
        return setDeviceName("Site Name: Uco");
      default:
        return setDeviceName("...");
    }
  };

  //||||||||||||||||||||||||||||||||||||||||||||| Map End ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

  const divStyle = {
    // margin: '3px',
    // border: '5px #e300de',
    backgroundColor: " #e3e9de",
  };

  return (
    <Container style={divStyle}>
      <Row>
        <>
          <pre></pre>
          <pre></pre>
        </>
      </Row>

      <Row>
        <Col>
          {/* <MyMap style={{height: 1400}}/> */}

          <Row>
            <Col class="shadow p-3 mb-5 bg-white rounded">
              <Map
                height={500}
                defaultCenter={[28.62092, 77.21824]}
                defaultZoom={14}
              >
                {/* Upsc Bhavan */}
                <Marker
                  width={40}
                  anchor={[28.60954, 77.2269]}
                  color={stateUpsc}
                  onClick={(e) => MouseClick(e, "UPSC_BHAVAN")}
                />

                {/* Shangri LA */}
                <Marker
                  width={40}
                  anchor={[28.62092, 77.21824]}
                  color={stateShangrila}
                  onClick={(e) => MouseClick(e, "SHANGRI_LA")}
                />

                {/* Dhawandeep*/}
                <Marker
                  width={40}
                  anchor={[28.62306, 77.215]}
                  color={stateDhawandeep}
                  onClick={(e) => MouseClick(e, "DHAWANDEEP")}
                />

                {/* K-51*/}
                <Marker
                  width={40}
                  anchor={[28.635, 77.22028]}
                  color={stateK51}
                  onClick={(e) => MouseClick(e, "K_51")}
                  // onMouseOver={(e) => MouseOver(e, "K_51")}
                />

                {/* Kanchenjunga*/}
                <Marker
                  width={40}
                  anchor={[28.63, 77.22528]}
                  color={stateKanchenjunga}
                  onClick={(e) => MouseClick(e, "KANCHENJUNGA")}
                />

                {/* UCO Bank*/}
                <Marker
                  width={40}
                  anchor={[28.6232528, 77.2094234]}
                  color={stateUco}
                  onClick={(e) => MouseClick(e, "UCO_BANK")}
                />
              </Map>
            </Col>
          </Row>

          <Row>
            <>
              <pre></pre>
              <pre></pre>
            </>
          </Row>

          <Row>
            <Col class="shadow p-3 mb-5 bg-white rounded">
              <Form className="text-center">
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder={deviceName}
                  disabled
                />
              </Form>
            </Col>
            <Col class="shadow p-3 mb-5 bg-white rounded"></Col>
            <Col class="shadow p-3 mb-5 bg-white rounded"></Col>
          </Row>
          <Row>
            <>
              <pre></pre>
              <pre></pre>
            </>
          </Row>
        </Col>
        <>
          <pre></pre>
          <pre></pre>
        </>
      </Row>
      <Row>
        <Col class="shadow p-3 bg-white rounded">
          <Container>
            {" "}
            <EnhancedTable />{" "}
          </Container>
        </Col>
      </Row>
      <Row>
        <>
          <pre></pre>
          <pre></pre>
        </>
      </Row>
    </Container>
  );
};

export default Home_Page_2;
