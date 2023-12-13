
//import MyNavbar from './components/Navbar.jsx';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Card, Row } from 'react-bootstrap';

import TablaDatos from './../components/TablaDatos.jsx';
import MyModel from './../components/ModelPost.jsx';


const Inicio =() =>{

  const [lista, setLista] = useState([]);


  const cargarLista = async () =>{
    setLista([
      {nombre: 'Rosa', apellido: 'Sosa'},
      {nombre: 'Javier', apellido: 'Andreani'},
      {nombre: 'Martin', apellido: 'Marcelo'},
    ])
  }

  useEffect(()=>{
    cargarLista();
  },[]);
  


  return (
    <>
      
        <Card.Body className="d-flex justify-content-center align-items-center">
          <MyModel/>
        </Card.Body>  
      
      <Row className="mt-2">
        <Card.Body>
          <TablaDatos lista={ lista }/>
        </Card.Body>
      </Row>
    </>
  )
}

export default Inicio
