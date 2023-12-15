import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



const CardPost = ({post}) => {

  const navigate = useNavigate();

  const editar = (id) => {
    console.log('Vas a editar el elemento' + id);
    navigate('/ingresar');
  }

  const eliminar = (id) => {
    navigate('/Eliminar');
  }

  return (
    <div>
        <Card border="primary" key={post._id} style={{ width: '18rem', marginBottom: '10px' }}>
          {post.imageURL && <Card.Img variant="top" src={post.imageURL} />}
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.description}</Card.Text>
            {post.nombre && <Card.Text>Autor: {post.nombre}</Card.Text>}
          </Card.Body>
        </Card>
    </div>  
  );
}

export default CardPost;