const Contenedor = ({nombre, apellido = 'AAA'}) => {
    return (
        <>
            <p>Nombre {nombre} {apellido}</p>
        </>
    )
}

export default Contenedor


/** 
 * 
 * const Contenedor = (props) => {
    const {nombre, apellido} = props;
    return (
        <>
            <p>Nombre {nombre} {apellido}</p>
        </>
    )
}

export default Contenedor
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 *  **/