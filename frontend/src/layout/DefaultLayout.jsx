import MyNavbar from '../components/Navbar'
import { Container } from 'react-bootstrap';


const DefaultLayout =(props) =>{
    const children = props.children; 

    return (
        <>
        <MyNavbar/>
        
        <Container style={{padding: 20}}>
            
            { children }
            
        </Container>
        </>
    )
}

export default DefaultLayout