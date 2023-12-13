import React, { useState } from 'react';
import {Modal, Button, Form} from 'react-bootstrap';

const MyModel = () => {
    const [showModal, setShowModal] = useState(false);

    const [datosPost, setDatosPost] = useState({
        title: '',
        description: '',
        imageURL: '',
      });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setDatosPost({ ...datosPost, [name]: value });
    };
    
    const handleClose = () => {
        setShowModal(false);
    };

    const handleShow = () => {
        setShowModal(true);
    };

    const handleSubmit = async () => {
        try {
            
            //const response = await axios.post('URL_DE_TU_BACKEND/crearNuevoPost', datosPost);

            // Maneja la respuesta del backend según tus necesidades
            console.log(datosPost);

            // Cierra el modal después de guardar cambios
            handleClose();
        } catch (error) {
            console.error('Error al crear un nuevo postModel:', error.message);
        }
    };

  return (
    <>
        <Button variant="primary" onClick={handleShow}>
            Nuevo POST
        </Button>
        
        <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Nuevo postModel</Modal.Title>
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

