import { useState } from 'react';
import { Alert, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { guardarDatos} from '../utils/login';
import { useAuthContext } from '../context/AuthContext';



const FormularioIngresar = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errores, setErrores] = useState({});
    const { loginContext } = useAuthContext();



    const cargarDatos = async () => {
        try {
            const response = await axios.post('http://localhost:3000/login', {
                email: email,
                password: password,
            });
            if(response.status === 200){
                guardarDatos(response.data);
                loginContext();
                navigate('/')
            }else{
                setErrores({error:"Los datos ingresados no son validos: "})
            }
            
        } catch (error) {
            // Manejar errores
            console.log(error)
            if(error.response.status === 401){
                setErrores({error: error.response.data.mensaje});
            }else if(error.response.status === 402){
                setErrores({error: error.response.data.mensaje});
            }else{
                console.log('Error de respuesta:', error.response.status);
                console.log('Datos del error:', error.response.data);
            }
        }
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
            {errores.error && (

                        <Alert variant="warning">
                            {errores.error}
                        </Alert>
                    )}
            <Button variant="primary" onClick={cargarDatos}>
                Iniciar sesión
            </Button>
        </Form>
    );
};

export default FormularioIngresar;
