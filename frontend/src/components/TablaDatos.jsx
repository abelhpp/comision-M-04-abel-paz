import { ButtonGroup, Table, Button } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';



const TablaDatos = (props) => {
  const {lista} = props;

  const navigate = useNavigate();

  const editar = (id) => {
    console.log('Vas a editar el elemento' + id);
    navigate('/ingresar');
  }

  const eliminar = (id) => {
    navigate('/Eliminar');
  }

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>nombre</th>
          <th>Apellido</th>
          <th>Acciones</th>

        </tr>
      </thead>
      <tbody>
        {
          lista.map((item, key) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{item.nombre}</td>
              <td>{item.apellido}</td>
              <td>
                <ButtonGroup style={{ maxWidth: '30px' }}>
                  <Button variant="primary" onClick={() => editar(key)}>Editar</Button>
                  <Button variant="danger" onClick={() => eliminar(key)}>Eliminar</Button>
                </ButtonGroup>
              </td>
            </tr>
          ))
        }
        
      </tbody>
    </Table>
  );
}

export default TablaDatos;