const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const pacienteSchema = new Schema({
  dni: { type: Number, required: true, unique: true },
  nombre: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("Paciente", pacienteSchema);
