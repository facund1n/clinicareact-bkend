const express = require("express");

// importo funciones del controller:
const paciente = require("../controllers/paciente.controller");

const router = express.Router();

router.route("/").get(paciente.getTodosLosPacientes);
router.route("/:id").get(paciente.getOnePaciente);
router.route("/").post(paciente.postPaciente);
router.route("/:id").put(paciente.modificarPaciente);
router.route("/:id").delete(paciente.eliminarPaciente);

module.exports = router;
