document.getElementById('loginForm').addEventListener('submit', async (event) => {
event.preventDefault(); // Evita o envio padrão do formulário

const cpf = document.getElementById('cpf').value;
const otp = document.getElementById('otp').value;


//tu vai integrar a API aqui:
try {
    const response = await fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ cpf, otp })
    });

    if (response.ok) {
    const data = await response.json();
    // Lógica para sucesso no login, como redirecionar ou armazenar token
    console.log('Login bem-sucedido', data);
    window.location.href = 'telaacesso.html';

    } else {
    console.error('Erro de autenticação');
    }
} catch (error) {
    console.error('Erro de rede', error);
}
});

//O JAVA SCRIPT TÁ LINKADO NA PARTE INFERIOR DO CÓDIGO HTML TAG "<script>"