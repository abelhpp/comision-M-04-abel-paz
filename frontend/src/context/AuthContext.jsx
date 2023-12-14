import { createContext, useContext, useState } from "react";
import {
    guardarDatos,
    getDatos,
    limpiarStorage,
    getToken,
} from "../utils/login";

const AuthContext = createContext();

const AuthProvider = (props) => {
    const { children } = props;

    const [usuario, setUsuario] = useState(getDatos());
    const [token, setToken] = useState(getToken());

    const loginContext = () => {
        setUsuario(getDatos());
        setToken(getToken());
    }

    const logout = () => {
        limpiarStorage();
        setUsuario(null);
        setToken(null);
    }

    return (
        <AuthContext.Provider value={{ usuario, token, loginContext, logout }}>
            { children }
        </AuthContext.Provider>
    );
}

const useAuthContext = () => useContext(AuthContext);

export {
    AuthProvider,
    useAuthContext,
}
