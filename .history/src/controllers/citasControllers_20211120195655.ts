import { response } from "express";
import executeQuery from "../services/mysql.service"

const agendarCita = async (req, res) => {
    const { cta_fecharegistro, cta_estado, mot_id, con_id, cta_fechaInicio, cta_fechaFin, per_id } = req.body;
    try {
        const response = await executeQuery(`INSERT INTO tbl_citas (cta_fecharegistro, cta_estado, tbl_motivosconsulta_mot_id, tbl_consultorio_con_id, cta_fechaInicio, cta_fechaFin, tbl_paciente_per_id) VALUES ('${cta_fecharegistro}', '${cta_estado}', '${mot_id}','${con_id}','${cta_fechaInicio}', '${cta_fechaFin}', '${per_id}')`);
        //res.send('reagendarCita desde el controlador')
        res.status(201).json({ message: 'created', id: response.insertId });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }

}
const consultarCita = async (req, res) => {
    const response = executeQuery(`SELECT * FROM tbl_citas`).then((response) => {
        res.json(response);
    }).catch((error) => {
        console.log(error);
        res.status(500).send(error);
    })

}
const consultarCitaid = (req, res) => {
    const { cita_id } = req.params;
    executeQuery(`SELECT * FROM tbl_citas WHERE cta_id = ${cita_id}`).then((response) => {
        const data = {
            message: `${response.length} datos encontrados`,
            datos: response.length > 0 ? response[0] : null
        }
        res.json(data);
    }).catch((error) => {
        console.log(error);
        res.status(500).send(error);
    })
}
const reagendarCita = async (req, res) => {
    const { cta_fecharegistro, cta_estado, tbl_motivosconsulta_mot_id, con_id, cta_fechaInicio, cta_fechaFin, per_id } = req.body;
    try {
        const response = await executeQuery(`UPDATE tbl_citas SET cta_fecharegistro = '${cta_fecharegistro}', cta_estado = '${cta_estado}', tbl_motivosconsulta_mot_id = '${tbl_motivosconsulta_mot_id}', tbl_consultorio_con_id = '${con_id}', cta_fechaInicio = '${cta_fechaInicio}', cta_fechaFin = '${cta_fechaFin}', tbl_paciente_per_id= '${per_id}' WHERE cta_id = ${req.params.cta_id}`);
        //res.send('reagendarCita desde el controlador')
        console.log(response);
        res.status(201).json({ message: 'updated', id: response.insertId });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
    //INSERT INTO `mydb`.`tbl_citas` (`cta_id`, `cta_fecharegistro`, `cta_estado`, `tbl_motivosconsulta_mot_id`, `tbl_consultorio_con_id`, `cta_fechaInicio`, `cta_fechaFin`, `tbl_paciente_per_id`) VALUES ('', '2021-11-20 18:50:00', '', '1', '1', '2021-11-22 8:55:00', '2021-11-22 10:00:00', '1');
    //res.send('reagendar Citas desde el controlador')
}

const cancelarCita = (req, res) => { res.send('cancelar Citas desde el controlador') }
export { agendarCita, consultarCita, consultarCitaid, reagendarCita, cancelarCita }