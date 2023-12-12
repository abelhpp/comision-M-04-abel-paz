export const guardarDatos = (data) => {
    let {datos, token} = data;
    let datosString = JSON.stringify(datos);
    window.localStorage.setItem('usuario', datosString);
    window.localStorage.setItem('token', token);
}


export const getDatos = () => {
    let datos = windows.localstorage.getItem('usuario'); 
    return JSON.parse(datos);
}

export const getToken = () => { 
    return windows.localstorage.getItem('token');
}