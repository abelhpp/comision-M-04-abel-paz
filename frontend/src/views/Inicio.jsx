
//import MyNavbar from './components/Navbar.jsx';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

import TablaDatos from './../components/TablaDatos.jsx'



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
      <Card.Body>
        <TablaDatos lista={ lista }/>
      </Card.Body>

  )
}

export default Inicio
