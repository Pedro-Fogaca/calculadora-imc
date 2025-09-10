function calcularIMC() {
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;

    if (peso === '' || altura === '') {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    let imc = peso / (altura * altura);
    let classificacao = '';

    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc < 25) {
        classificacao = 'Peso normal';
    } else if (imc < 30) {
        classificacao = 'Sobrepeso';
    } else if (imc < 35) {
        classificacao = 'Obesidade Grau I';
    } else if (imc < 40) {
        classificacao = 'Obesidade Grau II';
    } else {
        classificacao = 'Obesidade Grau III';
    }

    document.getElementById('resultado').innerHTML = `
        <p>Seu IMC é: <strong>${imc.toFixed(2)}</strong></p>
        <p>Classificação: <strong>${classificacao}</strong></p>
    `;
}