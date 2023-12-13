export const guardarDatos = (data) => {
    let {datos, token} = data;
    let datosString = JSON.stringify(datos);
    window.localStorage.setItem('usuario', datosString);
    window.localStorage.setItem('token', token);
}


export const getDatos = () => {
    let datos = window.localStorage.getItem('usuario'); 
    return JSON.parse(datos);
}

export const limpiarStorage = () => {
    window.localStorage.removeItem('token'); 
    window.localStorage.removeItem('usuario');
}



export const getToken = () => { 
    return window.localStorage.getItem('token');
}