import { useState } from 'react';
import axios from 'axios';
import { guardarDatos} from '../utils/login';
import { useAuthContext } from '../context/AuthContext';
import { Card, Row, FloatingLabel, Form, Button } from 'react-bootstrap';

const FormComment = ({ids}) => {
    const [user, setUser] = useState(ids.authorid);
    const [post, setPost] = useState(ids._id);
    const [coment, setComent] = useState("");

    const cargarDatos = async() =>{
        try {

            const url = 'http://localhost:3000/comment';
            const nuevo = {
                comentario: coment,
                post: post,
                author: user
            }
            console.log(nuevo);
            //envio nuevo a crear
            const response = await axios.post(url, nuevo);
            if(response.status === 200){
                console.log("Enviado")
            }
            
        } catch (error) {
            // Manejar errores
            console.log(error)
        }        
    };// fin cargarDatos

    return (
        <div>
        <Form>
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: '100px' }}
                value={coment}
                onChange={(e) => setComent(e.target.value)}
                />
            </FloatingLabel>
            <Button variant="primary" onClick={cargarDatos}>
                Comentar
            </Button>
        </Form>
        </div>
    );
};

export default FormComment;
