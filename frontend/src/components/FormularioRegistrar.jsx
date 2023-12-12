import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const FormularioIngresar = () => {
    const [deshabilitarBoton, setDesha] = useState(false);
    const [errores, setErrores] = useState({});

    const navigate = useNavigate();

    const [datos, setDatos] = useState({
        email: '',
        name: '',
        lastname: '',
        age: '',
        password: ''
    });

    const cambiarDato = (campo, valor) => {
        setDatos({
            ...datos,
            [campo]: valor
        });
    };

    const cargarDatos = async() => {
        let misErrores = {};
        if (datos.email.length === 0) {
            misErrores.email = 'Debe introducir un correo';
        }
        if (datos.name.length === 0) {
            misErrores.name = 'Debe introducir un Nombre';
        }
        if (datos.lastname.length === 0) {
            misErrores.lastname = 'Debe introducir un Apellido';
        }
        if (datos.age.length === 0) {
            misErrores.age = 'Debe introducir una edad';
        }
        if (datos.password.length === 0) {
            misErrores.password = 'Debe introducir una contraseña';
        }

        setErrores(misErrores);
        if(Object.entries(misErrores).length === 0){
            setDesha(true);

            await mandarDatos();
        } 
    };

    const mandarDatos = async () => {
        const url = 'http://127.0.0.1:3000/usuario';
        try{
            
            const respuesta = await axios.post(url,datos);
            if (respuesta.status >= 200 && respuesta.status < 300){
                return navigate('/');
            }else{
                setErrores({error: 'Ocurrio un error servidor'});
            }


        } catch(error){
            setErrores({error: 'Ocurrio un error inesperado'});
        }
        setDesha(false);
    }

    
    return (
        <Form>
            <Form.Group as={Row} className='mb.3' controlId='formPlaintextEmail'>
                <Form.Label column sm='2'>
                    Correo
                </Form.Label>
                <Col sm='10'>
                    <Form.Control type="email" onInput={(e) => cambiarDato('email', e.target.value)} />
                    {errores.email && (
                        <span style={{ color: 'red' }}>
                            {errores.email}
                        </span>
                    )}
                </Col>
            </Form.Group>
            <Form.Group as={Row} className='mb.3' controlId='formPlaintextName'>
                <Form.Label column sm='2'>
                    Nombre
                </Form.Label>
                <Col sm='10'>
                    <Form.Control type="text" onInput={(e) => cambiarDato('name', e.target.value)} />
                    {errores.name && (
                        <span style={{ color: 'red' }}>
                            {errores.name}
                        </span>
                    )}
                </Col>
            </Form.Group>
            <Form.Group as={Row} className='mb.3' controlId='formPlaintextLastname'>
                <Form.Label column sm='2'>
                    Apellido
                </Form.Label>
                <Col sm='10'>
                    <Form.Control type="text" onInput={(e) => cambiarDato('lastname', e.target.value)} />
                    {errores.lastname && (
                        <span style={{ color: 'red' }}>
                            {errores.lastname}
                        </span>
                    )}
                </Col>
            </Form.Group>


            <Form.Group as={Row} className='mb.3' controlId='formPlaintextAge'>
                <Form.Label column sm='2'>
                    Edad
                </Form.Label>
                <Col sm='10'>
                    <Form.Control type="number" onInput={(e) => cambiarDato('age', e.target.value)} />
                    {errores.age && (
                        <span style={{ color: 'red' }}>
                            {errores.age}
                        </span>
                    )}
                </Col>
            </Form.Group>
            <Form.Group as={Row} className='mb.3' controlId='formPlaintextPassword'>
                <Form.Label column sm='2'>
                    Contraseña
                </Form.Label>
                <Col sm='10'>
                    <Form.Control type="password" onInput={(e) => cambiarDato('password', e.target.value)} />
                    {errores.password && (
                        <span style={{ color: 'red' }}>
                            {errores.password}
                        </span>
                    )}
                </Col>
            </Form.Group>
            {
                errores.error && (
                    <Alert variant="warning">
                        {errores.error}
                    </Alert>
                )
            }
            <Button variant='primary' onClick={cargarDatos} disabled={deshabilitarBoton}>
                Crear Usuario
            </Button>
        </Form>
    );
}

export default FormularioIngresar;