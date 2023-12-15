import { useState } from 'react';
import axios from 'axios';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import { useAuthContext } from '../context/AuthContext';
const FormComment = ({ids}) => {
    const { token } = useAuthContext();
    const [user, setUser] = useState(ids.authorid);
    const [post, setPost] = useState(ids._id);
    const [coment, setComent] = useState("");
    const [list, setList] = useState(ids.comentarios);
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
                console.log("Enviado");
                setList([...list, coment]);
                setComent("");
            }
            
        } catch (error) {
            // Manejar errores
            console.log(error)
        }        
    };// fin cargarDatos



    return (
        <div>
        {token && (
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
        )}
            <div>
                {list.map(id => (
                <div key={id}>
                    <Form.Control
                    as="textarea"
                    style={{ height: '100px' }}
                    value={`Comment: ${id}`}
                    readOnly
                    />
                </div>
                ))}
            </div>
        </div>
    );
};

export default FormComment;
