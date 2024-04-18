function exibirTextoNaTela(Id, texto) {
    console.log (Id); 
    let campo = document.getElementById(Id);
    campo.innerHTML = texto;   
    
}
exibirTextoNaTela('presentation1', 'Sou casado, com filhos e netos. Gosto de viajar, explorar novos lugares, mas também aprecio o convívio com familiares e amigos em casa. Tenho interesse em leituras, filmes, séries e música. Sou organizado e proativo, aberto a novas experiências e com facilidade de adaptação.');
exibirTextoNaTela('presentation2', 'Sou um profissional dedicado e apaixonado pela minha área de atuação. No decorrer dos anos de experiência, desenvolvi sólidas habilidades e estou sempre em busca de desafios que me permitam crescer profissionalmente e pessoalmente.');