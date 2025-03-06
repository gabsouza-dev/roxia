const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('../'));

app.post('/chat', async (req, res) => {
    const userMessage = req.body.message;

    try {
        const apiResponse = await axios.post('SUA_URL_DA_API', {
            prompt: userMessage,
            max_tokens: 50
        }, { headers: { 'Authorization': 'Bearer SUA_CHAVE_API' } });
      
        res.json({ reply: apiResponse.data.choices[0].text.trim() });
    } catch (error) { res.json({ reply: "Desculpe, algo deu errado! Tente novamente." }); }
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
