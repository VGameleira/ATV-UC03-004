function solicitarNumeros() {

    const num1 = parseInt(prompt("Digite o primeiro número:"));

    const num2 = parseInt(prompt("Digite o segundo número:"));

    if (num1 === num2) {

        alert("Impossível incrementar ou decrementar!");
        return;
    }

    let resultado = `${num1} - INÍCIO\n`;

    if (num1 < num2) {
        for (let i = num1 + 1; i < num2; i++) {
            resultado += `${i}\n`;
        }

    } else {
        for (let i = num1 - 1; i > num2; i--) {
            resultado += `${i}\n`;
        }
    }
    resultado += `${num2} - Fim \n`;
    alert(resultado);
}

solicitarNumeros();