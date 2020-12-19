const turno = require("../models/turno.model");

const getTodosLosTurnos = async (req, res) => {
  try {
    const todosLosTurnos = await turno.find();
    res.send({ turnosDB: todosLosTurnos });
  } catch (error) {
    console.log(`getTodosLosTurnos - Error: ${error}`);
  }
};

const getOneTurno = async (req, res) => {
  try {
    const oneTurno = await turno.findById(req.params.id);
    res.send({ turnosDB: oneTurno });
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
  res.send({ turnosDB: response });
};

const eliminarTurno = async (req, res) => {
  const response = await turno.deleteOne({ _id: req.params.id });
  res.send({ turnosDB: response });
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

// get solicita informacion
// put y path para actualizar informacion
// envíar/insertar informacións
// delete borrar.
