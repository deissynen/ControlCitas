import { Router } from "express";
import {registrarUsuario, consularUsuarios, consularUsuario, actualizarUsuario, eliminarUsuario} from "../controllers/usuarioControllers";

const usuariosRoutes = (app) => {

    const router=Router();
    app.use('/',router)

    router.post('/registrarUsuario/', registrarUsuario);
    router.get('/consularUsuarios/', consularUsuarios);     
    router.get('/consularUsuario/:id', consularUsuario);    
    router.put('/actualizarUsuario/:id', actualizarUsuario);    
    router.delete('/eliminarUsuario/:id',eliminarUsuario);

}

export default usuariosRoutes;