const paciente = require("../models/paciente.model");

const getTodosLosPacientes = async (req, res) => {
  try {
    const todosLosPacientes = await paciente.find();
    res.send({ pacientesDB: todosLosPacientes });
  } catch (error) {
    console.log(`todosLosPacientes - Error: ${error}`);
  }
};

const getOnePaciente = async (req, res) => {
  try {
    const onePaciente = await paciente.findById(req.params.id);
    res.send({ pacientesDB: onePaciente });
  } catch (error) {
    console.log(`getOnePaciente - Error: ${error}`);
  }
};

const postPaciente = async (req, res) => {
  try {
    const response = await new paciente(req.body).save();
    res.send({ response });
  } catch (error) {
    res.status(400).send({ error: "error" });
    console.log(`postPaciente - Error: ${error}`);
  }
};

const modificarPaciente = async (req, res) => {
  const response = await paciente.updateOne({ _id: req.params.id }, req.body);
  res.send({ pacientesDB: response });
};

const eliminarPaciente = async (req, res) => {
  const response = await paciente.deleteOne({ _id: req.params.id });
  res.send({ pacientesDB: response });
};

module.exports = {
  getTodosLosPacientes,
  getOnePaciente,
  postPaciente,
  modificarPaciente,
  eliminarPaciente,
};

// get solicita informacion
// put y path para actualizar informacion
// envíar/insertar informacións
// delete borrar.
