using Microsoft.AspNetCore.Mvc;
using System.Globalization;

[ApiController]
[Route("[controller]")]
public class ImcController : ControllerBase
{
    [HttpGet]
    public ActionResult<string> Calcular(string peso, string altura)
    {
        // 1. Validar e converter os valores de entrada com segurança
        if (!double.TryParse(peso, NumberStyles.Any, CultureInfo.InvariantCulture, out double pesoConvertido) || 
            !double.TryParse(altura, NumberStyles.Any, CultureInfo.InvariantCulture, out double alturaConvertida))
        {
            // 2. Se a conversão falhar, retornamos uma mensagem de erro clara
            return BadRequest("Os valores de peso e altura são inválidos.");
        }

        // 3. Sua lógica de cálculo
        double imc = pesoConvertido / (alturaConvertida * alturaConvertida);

        string classificacao;

        if (imc < 18.5)
        {
            classificacao = "abaixo do peso";
        }
        else if (imc >= 18.5 && imc <= 24.9)
        {
            classificacao = "Parabénsss, peso normal";
        }
        else if (imc >= 25 && imc <= 29.9)
        {
            classificacao = "sobrepeso";
        }
        else
        {
            classificacao = "Obesidade";
        }

        // 4. Retorna o resultado
        return Ok($"Seu IMC é: {imc.ToString("F2")}, {classificacao}");
    }
}