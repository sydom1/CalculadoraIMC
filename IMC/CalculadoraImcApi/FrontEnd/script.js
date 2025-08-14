// 1. Selecionar os elementos do HTML que vamos usar
const form = document.getElementById('imcForm');
const pesoInput = document.getElementById('peso');
const alturaInput = document.getElementById('altura');
const resultadoDiv = document.getElementById('resultado');
const limparBtn = document.getElementById('limparBtn'); 

// 2. Adicionamos um "ouvinte" de evento ao formulário
form.addEventListener('submit', function(event) {
    // 3. Prevenimos o comportamento padrão do formulário
    event.preventDefault();

    // 4. Capturamos os valores de peso e altura
    const peso = pesoInput.value;
    const altura = alturaInput.value;

    // 5. Verificamos se os campos estão preenchidos
    if (peso && altura) {
    // 6. Chamamos a função que vai se comunicar com a API
        calcularImc(peso, altura);
    } else {
    // Se algo estiver faltando, mostramos uma mensagem de erro
        resultadoDiv.textContent = 'Por favor, preencha todos os campos.';
    }
});

// 4. Adicionamos um "ouvinte" para o novo botão de limpar
limparBtn.addEventListener('click', function() {
    // 5. Limpamos os valores dos campos de input
    pesoInput.value = '';
    alturaInput.value = '';
    // 6. Limpamos o conteúdo da div de resultado
    resultadoDiv.textContent = '';
});

// 7. Função para enviar os dados para a sua API em C#
async function calcularImc(peso, altura) {
    try {
        // Montamos a URL da sua API, passando peso e altura como parâmetros
        // Lembre-se de que a sua API C# precisa estar rodando para isso funcionar
        const url = `http://localhost:5251/imc?peso=${peso}&altura=${altura}`;

        // Fazemos uma requisição HTTP do tipo GET para a URL
        const response = await fetch(url);

        // Verificamos se a resposta da API foi bem-sucedida
        if (!response.ok) {
            throw new Error('Erro na requisição à API.');
        }

        // 8. Pegamos o resultado (a string) da resposta
        const resultadoTexto = await response.text();

        // 9. Exibimos o resultado na tela
        resultadoDiv.textContent = resultadoTexto;

    } catch (error) {
        // 10. Se houver um erro, mostramos a mensagem na tela
        console.error('Erro:', error);
        resultadoDiv.textContent = 'Ocorreu um erro ao calcular o IMC. Tente novamente.';
    }
}