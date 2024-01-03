// Dados dos estudantes
const students = [
    { email: "estudante1@gmail.com", password: "senha1", code: 123 },
    { email: "estudante2@gmail.com", password: "senha2", code: 456 },
    // Adicione aqui outros estudantes
];

// Função para verificar o login
function login(event) {
    event.preventDefault(); // Evita o envio do formulário

    const email = document.getElementById("emailInput").value;
    const password = document.getElementById("passwordInput").value;

    let isLoggedIn = false; // Variável para controlar se o login foi feito com sucesso
    let code = null; // Variável para armazenar o código do estudante logado

    for (let i = 0; i < students.length; i++) {
        if (students[i].email === email && students[i].password === password) {
            isLoggedIn = true;
            code = students[i].code;
            break;
        }
    }

    if (isLoggedIn) {
        // Redirecionar para a página principal passando o código do estudante como parâmetro
        window.location.href = "pagina_principal.html?code=" + code;
    } else {
        document.getElementById("status").textContent = "Email ou senha incorretos";
    }
}

// Adicionar o evento de submit ao formulário
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", login);
 
