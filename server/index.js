const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors({
  origin: '*',
  methods: 'GET,POST,OPTIONS',
  allowedHeaders: 'Content-Type,Authorization',
}));

// Conexión a la base de datos
mongoose.connect("mongodb+srv://maximo98:BMOPpineda1@cluster0.gqrlqzi.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Conexión a la base de datos establecida');
  })
  .catch(error => {
    console.error('Error de conexión a la base de datos:', error);
  });

// Definición del esquema de usuario
const userSchema = new mongoose.Schema({
  Nombre: String,
  Apellido: String,
  mail: String,
  password: String
});

// Definición del modelo de usuario
const User = mongoose.model('users', userSchema);

// Endpoint para manejar la solicitud de registro
app.post('/registro', async (req, res) => {
  const { nombre, apellido, correo, contraseña } = req.body;
  try {
    const nuevoUsuario = new User({ Nombre: nombre, Apellido: apellido, mail: correo, password: contraseña });
    await nuevoUsuario.save();
    res.json("Se insertó con éxito");
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    res.status(500).json({ mensaje: 'Error al registrar usuario' });
  }
});

app.get('/registro/:username/:password', async(req, res)=>{
  const { username, password } = req.params;
  try{
    const usuario = await User.findOne({ mail: username, password: password });
    if (usuario) {
      res.json({ mensaje: 'Usuario autenticado correctamente', usuario: usuario });
    } else {
      res.json({ mensaje: 'Credenciales incorrectas' });
    }
  }catch (error){
    console.error('Error al verificar usuario:', error);
    res.status(500).json({ mensaje: 'Error al registrar usuario' });
  }
});

app.get('/datos/:id', async(req, res)=>{
  const { id } = req.params;
  try{
    const usuario = await User.findById(id);
    res.json(usuario);
  }catch (error){
    console.error('Error al verificar usuario:', error);
    res.status(500).json({ mensaje: 'Error al registrar usuario' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en el puerto ${PORT}`);
});
