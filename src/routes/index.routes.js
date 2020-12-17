const express = require("express");

const turnoRoutes = require("./turno.routes");

const router = express.Router();

// defino una ruta para ver el estado, devuelve un mensaje
router.get("/status", (req, res) => {
  res.status(200).json({ Status: "Todo OK - (200)" });
});

router.use("/panel-turnos", turnoRoutes);

module.exports = router;
