let entradaTextoUsuario;
let textoCriptografado="";
let arrayTextoUsuario;
let textoDescriptografado;

function codificarTexto(){
    extrairTexto();
    console.log(textoCriptografado);
    arrayTextoUsuario = entradaTextoUsuario.split(""); //Transforma o texto em um array letra por letra;

    arrayTextoUsuario.forEach(letra => {
        let posicao = arrayTextoUsuario.indexOf(letra); // coleta a posição dentro do array

        if (letra == "a"){
            arrayTextoUsuario[posicao] = "ai"; //Utiliza a posição da letra para troca-la pela string "ai""
        } else if (letra == "e"){
            arrayTextoUsuario[posicao] = "enter";
        } else if (letra == "i"){
            arrayTextoUsuario[posicao] = "imes";
        } else if (letra == "o"){
            arrayTextoUsuario[posicao] = "ober";
        } else if (letra == "u"){
            arrayTextoUsuario[posicao] = "ufat";
        } 

        let conversaoLetra = arrayTextoUsuario[posicao].toString();  //Converte a posição do array em String
        textoCriptografado = textoCriptografado + conversaoLetra; //Concatena a posição do array na string para formar o texto 
    });

    exibirTexto(textoCriptografado);
    textoCriptografado="";
    //limparTexto(textoCriptografado);    
}

function decodificarTexto(){
    extrairTexto();    
    while (entradaTextoUsuario.includes("ai")){ //Verifica a String enquanto encontrar a incidência "ai"
        entradaTextoUsuario = entradaTextoUsuario.replace("ai", "a"); //Substitui a string "ai"por "a" 
    }
    while (entradaTextoUsuario.includes("enter")){
        entradaTextoUsuario = entradaTextoUsuario.replace("enter", "e");  
    }
    while (entradaTextoUsuario.includes("imes")){
        entradaTextoUsuario = entradaTextoUsuario.replace("imes", "i");
    }
    while (entradaTextoUsuario.includes("ober")){
        entradaTextoUsuario = entradaTextoUsuario.replace("ober", "o");
    }
    while (entradaTextoUsuario.includes("ufat")){
        entradaTextoUsuario = entradaTextoUsuario.replace("ufat", "u");
    }
    exibirTexto(entradaTextoUsuario);
    console.log(textoCriptografado);
}

function extrairTexto() { //função que extrai o texto do input do usuário.
    entradaTextoUsuario = document.querySelector('textarea').value; // Coletar o texto escrito pelo usuário
}

function habilitarItemHtmlId(id){
    let habilitarImagem = document.getElementById(id);
    habilitarImagem.style.display = '';

}

function desabilitarItemTagName(tag, posicao){
    let desabilitarImagem = document.getElementsByTagName(tag)[posicao]; //vincula a ID da imagem
    desabilitarImagem.style.display = 'none';// seta a propriedade de none que "desabilita a imagem"

}

function exibirTexto(texto) { //criação de função para mostrar os resultados no HTML

    let campoTexto = document.querySelector('#textarea_criptografia');//vincula o a tag do corpo do texto
    campoTexto.innerHTML = texto;// seta o texto processado

    desabilitarItemTagName('h2',0)
    desabilitarItemTagName('img', 2);
    desabilitarItemTagName('p',1);
    habilitarItemHtmlId('textarea_criptografia');
    habilitarItemHtmlId('botao_copiar');
}

function copiarTexto() {
    let copiarTextoatual = document.querySelector('#botao_copiar');    
    copiarTextoatual.addEventListener('click',(e) =>{ //adiciona o envento de clique na id #botao_copiar
    
        let textoCopiado = document.getElementById('textarea_criptografia').innerHTML;  
        navigator.clipboard.writeText(textoCopiado);
        
        alert("Texto copiado com sucesso.");
});
}
function limparTexto(texto) {
    texto = "";
}