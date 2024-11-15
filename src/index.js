const express = require('express');
const app = express();
const router = require('./routes');  

app.use(express.json());
app.use('/', router); 

const iniciarServer = async () => {
    app.listen(3000, () => {
        console.log("Servidor iniciado na porta 3000");
    });
};

iniciarServer();