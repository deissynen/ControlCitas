import express from 'express';
import citasRoutes from './routers/citas';
import usuariosRoutes from './routers/usuarios';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

citasRoutes(app);
usuariosRoutes(app);

app.listen(port, ()=>{
    return console.log(`Servidor Corriendo Sobre El Puerto ${port}`)

})
