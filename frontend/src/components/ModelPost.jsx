import React, { useState } from 'react';
import axios from 'axios';
import {Modal, Button, Form, Alert} from 'react-bootstrap';
import { useAuthContext } from '../context/AuthContext';


const MyModel = () => {
    const { usuario:user, token, logout } = useAuthContext();
    const [usuario, setUsuario] = useState('');
    const [errorSession, setErrorSession] = useState({});
    const [showModal, setShowModal] = useState(false);

    const [datosPost, setDatosPost] = useState({
        title: '',
        description: '',
        imageURL: '',
        author: '',
    });
    
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setDatosPost({ ...datosPost, [name]: value });
    };
    

    const handleClose = () => {
        setShowModal(false);
    };

    const handleShow = async() => {
        try {
            const url = 'http://localhost:3000/verificarToken';
            const tokenObj = { token: token };
            
            // Hacer la solicitud al servidor
            const respuesta = await axios.post(url, tokenObj);
            // Establecer Nombre(auth)
            setUsuario(respuesta.data.datos.nombre);
            //Establecer author del post id(auth)
            setDatosPost({ ...datosPost, author: respuesta.data.datos.id });
            setShowModal(true);
          } catch (error) {
            // Manejar el error
            setShowModal(false);
            logout();
            setErrorSession({out:"Inicie sesion, token expirado."});
          }
          // Mostrar el modal fuera del bloque try-catch para asegurar que se muestre incluso en caso de error
    };

    
    const handleSubmit = async () => {
        try {
            const url = "http://localhost:3000/post"
            const response = await axios.post(url, datosPost);

            handleClose();
        } catch (error) {
            console.error('Error al crear un nuevo postModel:', error.message);
        }
    };

    return (
        <>
            
                <Button className="mb-2" variant="primary" onClick={handleShow}>
                    Nuevo POST
                </Button>
                {errorSession.out && (
                    <Alert style={{ marginBottom: 0 }} variant="warning" dismissible onClose={() => setErrorSession({ error: '' })}>
                        {errorSession.out}
                    </Alert>
                )}
                    
            <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Nuevo postModel de {usuario && `"${usuario}"`}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formTitle">
                        <Form.Label>Título</Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="Ingrese el título"
                        name="title"
                        value={datosPost.title}
                        onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formDescription">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control
                        as="textarea"
                        placeholder="Ingrese la descripción"
                        name="description"
                        value={datosPost.description}
                        onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formImageURL">
                        <Form.Label>URL de la imagen</Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="Ingrese la URL de la imagen"
                        name="imageURL"
                        value={datosPost.imageURL}
                        onChange={handleChange}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Cerrar
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                POST
                </Button>
            </Modal.Footer>
            </Modal>
        </>
  );
};

export default MyModel;