const express = require("express");
const Router = require("./Routes/Router")

const app = express();
const { sequelize } = require("./models/index")

//configuraciones
const PORT = process.env.PORT || 3000;

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Rutas
app.use("/api/v1", Router);

app.listen(PORT, function () {
  console.log("server on port: ", PORT);
  sequelize.authenticate().then(() => {
    console.log("Nos hemos conectado a la DB")
  })
});
