const medico = require("../models/medico.model");

const getTodosLosMedicos = async (req, res) => {
  try {
    const todosLosMedicos = await medico.find();
    res.send({ medicosDB: todosLosMedicos });
  } catch (error) {
    console.log(`getTodosLosMedicos - Error: ${error}`);
  }
};

const getOneMedico = async (req, res) => {
  try {
    const oneMedico = await medico.findById(req.params.id);
    res.send({ medicosDB: oneMedico });
  } catch (error) {
    console.log(`getOneMedico - Error: ${error}`);
  }
};

const postMedico = async (req, res) => {
  try {
    const response = await new medico(req.body).save();
    res.send({ response });
  } catch (error) {
    res.status(400).send({ error: "error" });
    console.log(`postMedico - Error: ${error}`);
  }
};

const modificarMedico = async (req, res) => {
  const response = await medico.updateOne({ _id: req.params.id }, req.body);
  res.send({ medicosDB: response });
};

const eliminarMedico = async (req, res) => {
  const response = await medico.deleteOne({ _id: req.params.id });
  res.send({ medicosDB: response });
};

module.exports = {
  getTodosLosMedicos,
  getOneMedico,
  postMedico,
  modificarMedico,
  eliminarMedico,
};

/* const turno = require("./src/models/turno");
const paciente = require("./src/models/paciente");
const medico = require("./src/models/medico"); */

// get solicita informacion
// put y path para actualizar informacion
// envíar/insertar informacións
// delete borrar.
