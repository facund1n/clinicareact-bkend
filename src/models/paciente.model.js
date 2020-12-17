const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const pacienteSchema = new Schema({
  dni: { type: String, required: true },
  nombre: { type: String, required: true },
  password: { type: String, required: true },
  fecha: { type: String, required: true },
  tipo: { type: String, required: true },
});

module.exports = mongoose.model("Paciente", pacienteSchema);
