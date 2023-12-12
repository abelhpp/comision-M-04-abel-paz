//import MyNavbar from './components/Navbar.jsx';
import { Card, Alert, Button, ButtonGroup } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';


const Eliminar =() =>{
    const navigate = useNavigate();

    const volver = () =>{
        navigate('/')
    }

    const eliminar = () => {
        //eliminar
    }

    return (
        <>
    
            <Card.Body>
                <Alert variant='warning'>
                    Estas seguro que desea eliminar el usuario?
                </Alert>
            </Card.Body>
            <ButtonGroup style={{ maxWidth: '30px' }}>
                <Button variant="primary" onClick={volver}>Volver</Button>
                <Button variant="danger" onClick={eliminar}>Eliminar</Button>
            </ButtonGroup>
        </>
  )
}

export default Eliminar