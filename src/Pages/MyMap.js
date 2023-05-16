import React, { useState } from "react";
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

export function MyMap() {
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
        return setDeviceName("Site Name: Upsc Bhavan");
      case "SHANGRI_LA":
        return setDeviceName("Site Name: Shangri La");

      case "DHAWANDEEP":
        return setDeviceName("Site Name: Dhawandeep");
      case "K_51":
        return setDeviceName("Site Name: K 51");

      case "KANCHENJUNGA":
        return setDeviceName("Site Name: Kanchenjunga");
      case "UCO_BANK":
        return setDeviceName("Site Name: Uco Bank");
      default:
        return setDeviceName("...");
    }
  };

  return (
    <Container>
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
              color={hue}
              onClick={(e) => MouseClick(e, "UPSC_BHAVAN")}
            />

            {/* Shangri LA */}
            <Marker
              width={40}
              anchor={[28.62092, 77.21824]}
              color={hue}
              onClick={(e) => MouseClick(e, "SHANGRI_LA")}
            />

            {/* Dhawandeep*/}
            <Marker
              width={40}
              anchor={[28.62306, 77.215]}
              color={hue}
              onClick={(e) => MouseClick(e, "DHAWANDEEP")}
            />

            {/* K-51*/}
            <Marker
              width={40}
              anchor={[28.635, 77.22028]}
              color={hue}
              onClick={(e) => MouseClick(e, "K_51")}
              // onMouseOver={(e) => MouseOver(e, "K_51")}
            />

            {/* Kanchenjunga*/}
            <Marker
              width={40}
              anchor={[28.63, 77.22528]}
              color={hue}
              onClick={(e) => MouseClick(e, "KANCHENJUNGA")}
            />

            {/* UCO Bank*/}
            <Marker
              width={40}
              anchor={[28.6232528, 77.2094234]}
              color={hue}
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
    </Container>
  );
}
