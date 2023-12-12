import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const FormularioIngresar = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    
    const cambiarNombre = (e) => {
        setNombre(e.target.value)
    }
    const cambiarApellido = (e) => {
        setApellido(e.target.value)
    }

    const cargarDatos = () => {
        console.log(nombre);
        console.log(apellido);
    }; 
    
    return (
    <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingresa tu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleLogin}>
          Iniciar sesión
        </Button>
      </Form>
    );
}

export default FormularioIngresar;