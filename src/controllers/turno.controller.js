const turno = require("../models/turno.model");

const getTodosLosTurnos = async (req, res) => {
  try {
    const todosLosTurnos = await turno.find();
    res.send({ data: todosLosTurnos });
  } catch (error) {
    console.log(`getTodosLosTurnos - Error: ${error}`);
  }
};

const getOneTurno = async (req, res) => {
  try {
    const oneTurno = await turno.findById(req.params.id);
    res.send({ data: oneTurno });
  } catch (error) {
    console.log(`getOneTurno - Error: ${error}`);
  }
};

const postTurno = async (req, res) => {
  const response = await new turno(req.body).save();
  res.send({ response });
};

const modificarTurno = async (req, res) => {
  const response = await turno.updateOne({ _id: req.params.id }, req.body);
  res.send({ data: response });
};

const eliminarTurno = async (req, res) => {
  const response = await turno.deleteOne({ _id: req.params.id });
  res.send({ data: response });
};

module.exports = {
  getTodosLosTurnos,
  getOneTurno,
  postTurno,
  modificarTurno,
  eliminarTurno,
};

/* const turno = require("./src/models/turno");
const paciente = require("./src/models/paciente");
const medico = require("./src/models/medico"); */

// creo primer endpoint a traves del protoclo http para hacer una solicitud

/* app.get("/panel-turnos", async function (req, res) {
  const todosLosTurnos = await turno.find(); //aquí devuelve TODOS los turnos solicitados, mejorar lógica para devolver los turnos del paciente que los solicitó, no de todos. ( se puden pasar parámetros para filtrar, ver luego)
  res.send({ data: todosLosTurnos });
});

app.get("/panel-turnos/:id", async function (req, res) {
  const Turno = await turno.findById(req.params.id); //aquí devuelve TODOS los turnos solicitados, mejorar lógica para devolver los turnos del paciente que los solicitó, no de todos. ( se puden pasar parámetros para filtrar, ver luego)
  res.send({ data: unSoloTurno });
});

app.post("/panel-turnos", async function (req, res) {
  const response = await new turno(req.body).save(); // nos permite guardar un turno en la BD
  res.send(response);
});

app.put("/panel-turnos/:id", async function (req, res) {
  const response = await turno.updateOne({ _id: req.params.id }, req.body);
  res.send({ data: response });
});

app.delete("/panel-turnos/:id", async function (req, res) {
  const response = await turno.deleteOne({ _id: req.params.id });
  res.send({ data: response });
}); */

// get solicita informacion
// put y path para actualizar informacion
// envíar/insertar informacións
// delete borrar.
