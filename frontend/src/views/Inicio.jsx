//import MyNavbar from './components/Navbar.jsx';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Card, Row, Toast, Col, Button } from 'react-bootstrap';

import CardPost from '../components/CardPost.jsx';
import MyModel from './../components/ModelPost.jsx';
import FormComment from './../components/FormComment.jsx';

const Inicio = () => {
  //variables
  const [toastStates, setToastStates] = useState({});
  const [posts, setPost] = useState([]);


  //API get posts
  const cargarLista = async () => {
    try {
      const response = await axios.get('http://localhost:3000/posts');
    
      setPost(response.data);
      console.log(response.data);

      // Estado de Toasts false:
      const toastStatesInit = {};
      response.data.forEach(post => { toastStatesInit[post._id] = false; });
      setToastStates(toastStatesInit);
    
    } catch (error) {
      // Manejar errores
      console.log(error);
      const caido =[
        {"_id":"Nulls","title":"Nulls","description":"Nulls","imageURL":"https://bicis.frangandara.net/wp-content/uploads/2022/12/fuera-de-servicio.jpg","state":true,"authorid":"Nulls","nombre":"Nulls"},
      ];
      setPost(caido);
      const toastStatesInit = {};
      caido.forEach(post => { toastStatesInit[post._id] = false; });
      setToastStates(toastStatesInit);

    }
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
          <FormComment  ids={ post }/> 
          </Toast>
        </div>
      ))}
    </div>
  );
};

export default Inicio;