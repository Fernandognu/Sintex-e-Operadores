var frase;
function verificando() {
    function soma() {
        resultado = n1 + n2;
        console.log(`Sua soma é ${resultado} `);
        frase = frase + (`Sua soma é ${resultado} `);
        verifica();
    }
    
    function verifica() {
        if (resultado < 10) {
            console.log(`que é menor que 10 `);
            frase = frase + (`que é menor que 10 e `);
        } else {
            console.log(`que é maior que 10 `);
            frase = frase + (`que é maior que 10 e `);
        }
        if (resultado < 20) {
            console.log(`que é menor que 20 `);
            alert(frase + (`que é menor que 20 `));
        } else {
            console.log(`que é maior que 20 `);
            alert(frase + (`que é maior que 20 `))
        }
    }

    let n1 = Number(prompt(`Insira o primeiro valor:`));
    let n2 = Number(prompt(`Insira o segundo valor:`));
    let resultado;
    // verificando se as variáveis são válidas
    if (n1 === n2) {
        console.log(`Os números ${n1} e ${n2} são iguais. `);
        frase = (`Os números ${n1} e ${n2} são iguais. `)
        soma()
    } else {
        console.log(`Os números ${n1} e ${n2} não são iguais. `);
        frase = (`Os números ${n1} e ${n2} não são iguais. `)
        soma();
    }
}    
verificando();