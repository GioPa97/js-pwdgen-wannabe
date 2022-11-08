let nome = prompt("Inserisci il tuo nome");
let cognome = prompt("Inserisci il tuo cognome");
let colore = prompt("Inserisci il tuo colore preferito");

console.log(
    `
    Informazioni___________________________________________________

        1)Nome:    ${nome}
        2)Cognome: ${cognome}
        3)Colore:  ${colore}

        Password:  ${nome + cognome + colore + 21}

    ____________________________________________________Informazioni
    `
);

document.getElementById("p-nome").innerHTML = nome;
document.getElementById("p-cognome").innerHTML = cognome;
document.getElementById("p-colore").innerHTML = colore;