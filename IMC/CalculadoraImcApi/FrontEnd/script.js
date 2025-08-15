// 1. Selecionar os elementos do HTML que vamos usar
const form = document.getElementById('imcForm');
const pesoInput = document.getElementById('peso');
const alturaInput = document.getElementById('altura');
const resultadoDiv = document.getElementById('resultado');
const limparBtn = document.getElementById('limparBtn'); 

// 2. Adicionamos um ouvinte de evento ao formulário
form.addEventListener('submit', function(event) {
    // 3. Prevenimos o comportamento padrão do formulário
    event.preventDefault();

    // 4. Capturamos os valores peso e altura
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

//  Adicionado: permitir Enter disparar submit explicitamente em qualquer input (opcional, reforço)
[pesoInput, alturaInput].forEach(input => {
    input.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            form.dispatchEvent(new Event('submit', { cancelable: true }));
        }
    });
});

// 4. Adicionamos um ouvinte para o novo botão de limpar
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
        // URL da API, passando peso e altura como parâmetros
        // A API C# precisa estar rodando para isso funcionar usando comando dotnet run na pasta onde esta o csproj
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
        // 10. mensagem de erro, caso precise
        console.error('Erro:', error);
        resultadoDiv.textContent = 'Ocorreu um erro ao calcular o IMC. Tente novamente.';
    }
}