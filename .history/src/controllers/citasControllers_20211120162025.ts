import { response } from "express";
import executeQuery from "../services/mysql.service"

const agendarCita = (req, res) => { res.send('agendar Citas desde el controlador') }
const consultarCita = async (req, res) => {
    const response = executeQuery('SELECT * FROM tbl_citas').then((response) => {
        res.json(response);
    }).catch((error) => {
        console.log(error);
        res.status(500).send(error);
    })

}
const consultarCitaid = (req, res) => {
    const { cita_id } = req.params;
    executeQuery(`SELECT * FROM tbl_citas WHERE cita_id = ${cita_id}`).then((response) => {
        const data = {

        }
        res.json(response);
    }).catch((error) => {
        console.log(error);
        res.status(500).send(error);
    })
    //res.send('consultar Cita desde el controlador') 

}
const reagendarCita = (req, res) => { res.send('reagendar Citas desde el controlador') }
const cancelarCita = (req, res) => { res.send('cancelar Citas desde el controlador') }
export { agendarCita, consultarCita, consultarCitaid, reagendarCita, cancelarCita }