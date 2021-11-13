const agendarCita = (req, res) => { res.send('agendar Citas desde el controlador')}
const consultarCita = (req, res) => {res.send('consultar Citas desde el controlador')}
const consultarCitaid = (req, res) => {res.send('consultar Cita desde el controlador')}
const reagendarCita = (req, res) => {res.send('reagendar Citas desde el controlador')}
const cancelarCita = (req, res) => {res.send('cancelar Citas desde el controlador')}
export {agendarCita, consultarCita, consultarCitaid, reagendarCita, cancelarCita}