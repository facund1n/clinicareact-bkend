const express = require("express");

const turnoRoutes = require("./turno.routes");
const pacienteRoutes = require("./paciente.routes");
const medicoRoutes = require("./medico.routes");

const router = express.Router();

// defino una ruta para ver el estado, devuelve un mensaje
router.get("/status", (req, res) => {
  res.status(200).json({ Status: "Todo OK - (200)" });
});

router.use("/turnos", turnoRoutes);
router.use("/pacientes", pacienteRoutes);
router.use("/medicos", medicoRoutes);

module.exports = router;
