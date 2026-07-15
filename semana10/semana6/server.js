const express = require('express');
const app = express();
app.use(express.json());

app.post('/registro', (req, res) => {
  res.json({
    estado: "Datos recibidos",
    nombre: req.body.nombre,
    mensaje: req.body.mensaje
  });
});

app.post('/incidencia', (req, res) => {
  res.json({
    mensaje: "Incidencia registrada",
    tipo: req.body.tipo,
    descripcion: req.body.descripcion
  });
});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});
