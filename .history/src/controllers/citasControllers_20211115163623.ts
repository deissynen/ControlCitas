import { response } from "express";
import executeQuery from "../services/mysql.service"

const agendarCita = (req, res) => { res.send('agendar Citas desde el controlador')}
const consultarCita = async(req, res) => {
    try{
        const response = executeQuery('SELECT * FROM tbl_citas');
        res.send(response);
    }catch(error){
        response.status(500).send(error); 
    }
    
}
const consultarCitaid = (req, res) => {res.send('consultar Cita desde el controlador')}
const reagendarCita = (req, res) => {res.send('reagendar Citas desde el controlador')}
const cancelarCita = (req, res) => {res.send('cancelar Citas desde el controlador')}
export {agendarCita, consultarCita, consultarCitaid, reagendarCita, cancelarCita}