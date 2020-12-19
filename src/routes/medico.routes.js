const express = require("express");

// importo funciones del controller:
const medico = require("../controllers/medico.controller");

const router = express.Router();

router.route("/").get(medico.getTodosLosMedicos);
router.route("/:id").get(medico.getOneMedico);
router.route("/").post(medico.postMedico);
router.route("/:id").put(medico.modificarMedico);
router.route("/:id").delete(medico.eliminarMedico);

module.exports = router;
