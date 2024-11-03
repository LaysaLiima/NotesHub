const express = require('express');
  const routes = require('./routes/notes');

  const app = express();
  app.use(express.json());
  app.use('/', routes);

  const iniciarServer = async () => {
      app.listen(3000, () => {
        console.log("Servidor iniciado na porta 3000");
      });
  };

  iniciarServer();