import {Nav, Navbar, Container, } from 'react-bootstrap';
import { IcoSalir, IcoLogin } from './Ico';
import { useAuthContext } from '../context/AuthContext';

const MyNavbar = ()=> {
  const { usuario, logout } = useAuthContext();
  const desconect = () =>{
    logout();
    
  }
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="/">Argentina Programa</Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll'/>
          <Navbar.Collapse className='justify-comtent-end' id='navbarScroll'>
            <Nav className="ml-auto mx-2 my-2 my-lg-0 " navbarScroll>
              <Nav.Link href="/">Inicio</Nav.Link>
              {usuario ? (
                <>
                  <Nav.Link onClick={ desconect }><IcoSalir/></Nav.Link>  
                </>  
              ):(
                <>
                  <Nav.Link href="/registrarse">Registrarse</Nav.Link>
                  <Nav.Link href="/login"><IcoLogin/></Nav.Link>
  
                </>
              )
              }
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default MyNavbar;


