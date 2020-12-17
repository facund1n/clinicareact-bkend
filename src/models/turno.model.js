const mongoose = require("mongoose");

Schema = mongoose.Schema;

const turnoSchema = new Schema({
  especialidad: { type: String, required: true },
  dia: { type: String, required: true },
  turno: { type: String, required: true },
  problematica: { type: String, required: true },
});

module.exports = mongoose.model("Turno", turnoSchema);
