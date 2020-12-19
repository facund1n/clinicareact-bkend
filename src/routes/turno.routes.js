const express = require("express");

// importo funciones del controller:
const turno = require("../controllers/turno.controller");

const router = express.Router();

router.route("/").get(turno.getTodosLosTurnos);
router.route("/:id").get(turno.getOneTurno);
router.route("/").post(turno.postTurno);
router.route("/:id").put(turno.modificarTurno);
router.route("/:id").delete(turno.eliminarTurno);

module.exports = router;

/* router
  .route("/:id")
  .get(turno.getOneTurno)
  .delete(turno.eliminarTurno)
  .put(turno.modificarTurno);
router.route("/").get(turno.getTodosLosTurnos).post(turno.postTurno); */
