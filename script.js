let nome = prompt("Inserisci il tuo nome");
let cognome = prompt("Inserisci il tuo cognome");
let colore = prompt("Inserisci il tuo colore preferito");
let numero1 = prompt("Inserisci un numero")
let numero2 = prompt("Inserisci un altro numero")


console.log(
    `
    Informazioni___________________________________________________

        1)Nome:           ${nome}
        2)Cognome:        ${cognome}
        3)Colore:         ${colore}
        4)Primo numero:   ${numero1}
        5)Secondo numero: ${numero2}

        Password:  ${nome + cognome + colore + (numero1 / numero2)}

    ____________________________________________________Informazioni
    `
);

document.getElementById("p-nome").innerHTML = nome;
document.getElementById("p-cognome").innerHTML = cognome;
document.getElementById("p-colore").innerHTML = colore;