import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) =>{
    res.send('prueba de servidor')
})

app.listen(port, ()=>{
    return console.log('Servidor Corriendo Sober El Puerto ${port}')

})
