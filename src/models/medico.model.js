const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const medicoSchema = new Schema({
  legajo: { type: String, required: true },
  nombre: { type: String, required: true },
  password: { type: String, required: true },
  tipo: { type: String, required: true },
});

module.exports = mongoose.model("Medico", medicoSchema);
