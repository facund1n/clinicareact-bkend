const mongoose = require("mongoose");
const config = require("./config");

const uri = `mongodb://localhost:27017/${config.db.name}`;

mongoose
  .connect(uri, { useNewUrlParser: true })
  .then(() =>
    console.log(
      `Conectado a Base de Datos: IP: ${config.db.ip}, Port: ${config.db.port}, Nombre BD: ${config.db.name}`
    )
  )
  .catch((err) => console.log(err));

/* module.exports = uri; */
