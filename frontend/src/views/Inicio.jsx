
//import MyNavbar from './components/Navbar.jsx';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Card, Row, Toast, Col, Button } from 'react-bootstrap';

import CardPost from '../components/CardPost.jsx';
import MyModel from './../components/ModelPost.jsx';


const Inicio = () => {
  const [toastStates, setToastStates] = useState({});
  const [posts, setPost] = useState([]);

  const cargarLista = async () => {
    const data =[
      {"_id":"657a5d9fa609f5e317e31240","title":"uno","description":"es el post uno","imageURL":"as.js","state":true,"authorid":"65752e6e98e8a90c71af1811","nombre":"ABEL HUMBERTO"},
      {"_id":"657a74bb999f0a4fd459ce39","title":"dos","description":"Descripcion Dos","imageURL":"dos.git","state":true,"authorid":"65752e6e98e8a90c71af1811","nombre":"ABEL HUMBERTO"},
      {"_id":"657a7a83999f0a4fd459ce40","title":"tres","description":"descripcion tres","imageURL":"https://docmed.ar/wp-content/uploads/2023/07/DOCMED-IMAGEN-PARALIMPICOS-CARRERA-519-X-370.png","state":true,"authorid":"65752e6e98e8a90c71af1811","nombre":"ABEL HUMBERTO"},
      {"_id":"657a7a9b999f0a4fd459ce42","title":"tres","description":"descripcion tres","imageURL":"https://docmed.ar/wp-content/uploads/2023/07/DOCMED-IMAGEN-PARALIMPICOS-CARRERA-519-X-370.png","state":true,"authorid":"65752e6e98e8a90c71af1811","nombre":"ABEL HUMBERTO"}
    ];




    setPost(data);
    // Inicializar el estado de los Toasts
    const toastStatesInit = {};
    data.forEach(post => {
      toastStatesInit[post._id] = false;
    });
    setToastStates(toastStatesInit);
  };

  useEffect(() => {
    cargarLista();
  }, []);

  const toggleShow = (postId) => {
    setToastStates((prevStates) => ({
      ...prevStates,
      [postId]: !prevStates[postId],
    }));
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <MyModel/>
      {posts.map((post) => (
        <div key={post._id}>
          <Button onClick={() => toggleShow(post._id)} className="mb-2"> 
            <CardPost post={post}/>  
          </Button> 
          <Toast show={toastStates[post._id]} onClose={() => toggleShow(post._id)}>
            <div style={{ width: '100%', height: '60px', background: 'red' }}>{post._id}</div>
            <div style={{ width: '100%', height: '60px', background: 'pink' }}></div>
            <div style={{ width: '100%', height: '60px', background: 'blue' }}></div>
            <div style={{ width: '100%', height: '60px', background: 'azure' }}></div>  
          </Toast>
        </div>
      ))}
    </div>
  );
};

export default Inicio;