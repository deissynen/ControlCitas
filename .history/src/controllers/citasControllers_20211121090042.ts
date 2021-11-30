import { response } from "express";
import executeQuery from "../services/mysql.service"

const agendarCita = async (req, res) => {
    const { cta_fecharegistro, cta_estado, mot_id, con_id, cta_fechaInicio, cta_fechaFin, per_id } = req.body;
    try {
        const response = await executeQuery(`INSERT INTO tbl_citas (cta_fecharegistro, cta_estado, tbl_motivosconsulta_mot_id, tbl_consultorio_con_id, cta_fechaInicio, cta_fechaFin, tbl_paciente_per_id) VALUES ('${cta_fecharegistro}', '${cta_estado}', '${mot_id}','${con_id}','${cta_fechaInicio}', '${cta_fechaFin}', '${per_id}')`);
        res.status(201).json({ message: 'created', id: response.insertId });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}
const consultarCita = async (req, res) => {
    try {
        const response = await executeQuery(`SELECT * FROM tbl_citas`);
        const data = {
            message: `${response.length} datos encontrados`,
            datos: response.length > 0 ? response : null
        }
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }



    /*const response = executeQuery(`SELECT * FROM tbl_citas`).then((response) => {
        res.json(response);
    }).catch((error) => {
        console.log(error);
        res.status(500).send(error);
    })
*/
}
const consultarCitaid = (req, res) => {
    const { id } = req.params;
    executeQuery(`SELECT * FROM tbl_citas WHERE cta_id = ${id}`).then((response) => {
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
    const { cta_fecharegistro, cta_estado, mot_id, con_id, cta_fechaInicio, cta_fechaFin, per_id } = req.body;
    try {
        const response = await executeQuery(`UPDATE tbl_citas SET cta_fecharegistro = '${cta_fecharegistro}', cta_estado = '${cta_estado}', tbl_motivosconsulta_mot_id = '${mot_id}', tbl_consultorio_con_id = '${con_id}', cta_fechaInicio = '${cta_fechaInicio}', cta_fechaFin = '${cta_fechaFin}', tbl_paciente_per_id= '${per_id}' WHERE cta_id = ${req.params.id}`);
        console.log(response);
        if (response.affectedRows > 0) {
            res.json({ message: 'updated' });
        } else {
            res.status(404).json({ message: `No existe registro con ID:response.insertId ${req.params.id}` })
        }
        //res.json({ message: response.affectedRows > 0 ? 'updated' : `No existe registro con ID:response.insertId ${req.params.cta_id}` });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

const cancelarCita = async (req, res) => {
    try {
        const response = await executeQuery(`DELETE FROM tbl_citas  WHERE cta_id = ${req.params.id} `);
        console.log(response);
        if (response.affectedRows > 0) {
            res.json({ message: 'deleted' });
        } else {
            res.status(404).json({ message: `No existe registro con ID:response.insertId ${req.params.id}` })
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
    //res.send('cancelar Citas desde el controlador')
}
export { agendarCita, consultarCita, consultarCitaid, reagendarCita, cancelarCita }

/* Datos para probar el insert
{
    "cta_fecharegistro" : "2021-11-20 18:50:00",
    "cta_estado" : "1",
    "tbl_motivosconsulta_mot_id ": "1",
    "tbl_consultorio_con_id" : "1",
    "cta_fechaInicio " : "2021-11-20 18:50:00",
    "cta_fechaFin" : "2021-11-20 18:50:00",
    "tbl_paciente_per_id": "1"
}*/