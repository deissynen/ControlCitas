import express from 'express';
import citasRoutes from './routers/citas';
import usuariosRoutes from './routers/usuarios';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((_, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

citasRoutes(app);
usuariosRoutes(app);

app.listen(port, () => {
    return console.log(`Servidor Corriendo Sobre El Puerto ${port}`)
})


app.get('/prueba', async (req, res, next) => {
    const datos = {
        nombre: 'Deissy',
        apellido: 'Neita',
        genero: 'femenino'
    }
    const newDatos = {
        ...datos,
        ciudad: 'Sogamoso',
        profesion: 'Ing Sistemas'
    }

    const { apellido, nombre } = datos;
    res.status(200).json({ datos: newDatos });
});

