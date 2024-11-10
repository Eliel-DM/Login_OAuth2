require('dotenv').config();

const express = require('express');
const axios = require('axios'); 
const app = express();

const cors = require('cors');


app.use(cors());  // Isso permitirá todas as origens, mas em produção você pode querer restringir para origens específicas
app.use(express.json());

app.post('/login', async (req, res) => {
    const { cpf, otp } = req.body;

    
    if (!cpf || !otp) {
        console.log("CPF e OTP são obrigatórios");
        return res.status(400).json({ message: "CPF e OTP são obrigatórios" });
    }
    console.log(process.env.CLIENT_ID);
    const requestBody = {
        client_id : process.env.CLIENT_ID, 
        client_secret: process.env.CLIENT_SECRET, 
        username: cpf,  
        password: otp,  
        grant_type: 'password',
        scope: 'authentication_session',
        lifetime: 3600 
    };

    try {
        const response = await axios.post(process.env.AUTH_ENDPOINT, requestBody, {
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

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em http://localhost:${process.env.PORT}`);
});
