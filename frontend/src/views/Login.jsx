import { Card } from 'react-bootstrap';
import FormularioIngresar from '../components/FormLogin.jsx';


 const Login =() =>{

  return (
    <Card.Body>
        <FormularioIngresar/>
    </Card.Body>
  )
}

export default Login;



/*
import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const Login = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de autenticación aquí (puedes enviar la información a un servidor, etc.)
    // Por ahora, simplemente redirigiremos al usuario a la página de inicio después de hacer clic en "Iniciar sesión".
    history.push('/home');
  };

  const goToRegister = () => {
    history.push('/register');
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
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

      <div style={{ marginTop: '20px' }}>
        <p>¿No tienes una cuenta?</p>
        <Button variant="link" onClick={goToRegister}>
          Registrarse
        </Button>
      </div>
    </div>
  );
};

export default Login;
*/