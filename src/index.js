const express = require('express');
const app = express();
const PORT = 8080;

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Definir ruta para la página de inicio
app.get('/', (req, res) => {
  // Envía el archivo HTML de la página de inicio
  res.sendFile(__dirname + '/public/index.html');
});

// Definir rutas para otras páginas
app.get('/about', (req, res) => {
  // Envía el archivo HTML de la página 'about'
  res.sendFile(__dirname + '/public/about.html');
});

// Definir más rutas según sea necesario

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});

