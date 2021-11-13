import { Router } from "express"
import { agendarCita, cancelarCita, consultarCita, consultarCitaid, reagendarCita } from "../controllers/citasControllers";

const citasRoutes = (app) => {

    const router=Router();
    app.use('/',router)

    router.post('/agendarCita/', agendarCita);
    router.get('/consularCita/', consultarCita);     
    router.get('/consularCita/:id', consultarCitaid);    
    router.put('/reagendarCita/:id', reagendarCita);    
    router.delete('/cancelarCita/:id',cancelarCita);

}

export default citasRoutes;