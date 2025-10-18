const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hola desde el backend!');
});

app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT} - index.js:15`));
