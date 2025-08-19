# 📊 Calculadora de IMC

Uma aplicação web simples para calcular o **Índice de Massa Corporal (IMC)**, desenvolvida com **C#, HTML, CSS e JavaScript**.

## 🚀 Tecnologias Utilizadas
- **Backend:** C# (.NET)
- **Frontend:** HTML, CSS e JavaScript
- **Containerização:** Docker
- **Hospedagem:** Render (em andamento)

- ## 📂 Estrutura do Projeto
```bash
.
├── README.md
├── IMC
│   ├── IMC.sln                  # Solução principal em C#
│   └── CalculadoraImcApi/        # Projeto da API
│       ├── Program.cs
│       ├── ImcResult.cs
│       ├── Controllers/
│       │   └── ImcController.cs
│       ├── FrontEnd/             # Frontend estático
│       │   ├── index.html
│       │   ├── script.js
│       │   ├── styles.css
│       │   └── img/
│       │       ├── abaixo-do-peso.png
│       │       ├── peso-normal.png
│       │       ├── sobrepeso.png
│       │       └── obesidade.png
│       └── Properties/
│           └── launchSettings.json
└── Dockerfile
