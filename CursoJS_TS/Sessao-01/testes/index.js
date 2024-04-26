let nomeCliente = window.prompt("Informe seu nome");
window.alert(nomeCliente);

document.body.innerHTML+=nomeCliente;
document.body.innerHTML+=`Seu nome tem ${nomeCliente.length} letras`;
