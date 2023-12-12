import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IcoSalir, IcoLogin } from './Ico';

const MyNavbar = ()=> {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="/">Argentina Programa</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/ingresar">Ingresar</Nav.Link>
            <Nav.Link href="/registrarse">Registrarse</Nav.Link>
            <Nav.Link href="/login"><IcoLogin/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default MyNavbar;