const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'new343i',
  password: 'New343117',
  database: 'Fusiones'
});

connection.connect(error => {
  if (error) {
    console.error('Error al conectar a la base de datos:', error);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});

app.post('/guardar-datos', (req, res) => {
  const { nombreI, edadI, fechaN, selFut, selChar } = req.body; 
  const datos = { nombreI, edadI, fechaN, selFut, selChar };

  connection.query('INSERT INTO Fusion SET ?', datos, (error, results) => {
    if (error) {
      console.error('Error al guardar los datos:', error);
      res.status(500).json({ error: 'Error al guardar los datos' });
    } else {
      console.log('Datos guardados exitosamente');
      res.status(200).json({ message: 'Datos guardados exitosamente' });
    }
  });
});

app.get('/obtenerD', (req, res) => {
  const query = 'SELECT * FROM Fusion';

  connection.query(query, (error, results) => {
    if (error){
      console.error('Error al obtener los datos:', error);
      res.status(500).json({ error: 'Error al obtener los datos' });
    } else {
      res.json(results);
    }
  })
});

app.put('/update-datos/:id', (req, res) => {
  const id = req.params.id;
  const values = req.body;

  connection.query('UPDATE Fusion SET ? WHERE idF = ?', [values, id], (error, results) => {
    if (error) {
      console.error('Error al actualizar los datos:', error);
      res.status(500).json({ error: 'Error al guardar los datos' });
    } else {
      console.log('Datos guardados exitosamente');
      res.status(200).json({ message: 'Datos guardados exitosamente' });
    }
  });
});


const port = 9000; // Puedes ajustar el puerto según tu preferencia

app.listen(port, () => {
  console.log(`Servidor backend escuchando en el puerto ${port}`);
});

