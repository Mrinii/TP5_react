import {React} from 'react';
import { Link } from 'react-router-dom' ;
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CalcState from './CalcState';

export default function Tp5() {
return (
    <div >
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">NavBArLinks</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/TP5_react/CalcState">Calculatrice</Nav.Link>
          <Nav.Link href="/TP5_react/Slider">Slider</Nav.Link>
          <Nav.Link href="/TP5_react/Formtasks">To Do Tasks</Nav.Link>
          <Nav.Link href="/TP5_react/UseEffectTp">API</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </div>
)
}


