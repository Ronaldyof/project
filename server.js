const express = require('express');
const path = require('path');
const db = require('./db');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/submit', async (req, res) => {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: 'Nome é obrigatório' });

    try {
        await db.query('INSERT INTO names (name) VALUES (?)', [name]);
        res.json({ message: 'Nome salvo com sucesso!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erro ao salvar no banco de dados' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
