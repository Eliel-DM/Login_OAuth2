const express = require('express');
const axios = require('axios'); 
const app = express();
const PORT = 3001;
const cors = require('cors');
app.use(cors());  // Isso permitirá todas as origens, mas em produção você pode querer restringir para origens específicas


app.use(express.json());


app.post('/login', async (req, res) => {
    const { cpf, otp } = req.body;

    
    if (!cpf || !otp) {
        console.log("CPF e OTP são obrigatórios");
        return res.status(400).json({ message: "CPF e OTP são obrigatórios" });
    }

    const requestBody = {
        client_id: 'c7da6c69348aa2198da7a4b137e949cec07bc0a5', 
        client_secret: '46ef7a9fa6414b41f72dc27a8f16f124f88d759f', 
        username: cpf,  
        password: otp,  
        grant_type: 'password',
        scope: 'authentication_session',
        lifetime: 3600 
    };

    try {
        const response = await axios.post('https://api.birdid.com.br/v0/oauth/pwd_authorize', requestBody, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });

        console.log('Token gerado com sucesso:', response.data);
        return res.status(200).json(response.data); 
    } catch (error) {
        console.error('Erro ao solicitar o token:', error.message);
        return res.status(500).json({ message: 'Erro ao solicitar o token', error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
