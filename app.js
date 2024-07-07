let numeroSecreto = 0;
let intentos = 0;
let numerosSorteados = [];
let numeroMaximo = 10;


function asignarElement(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return; 
}



function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsu').value);

    if(numeroDeUsuario === numeroSecreto){
        asignarElement('p', `Acertaste el número secreto en ${intentos} ${(intentos == 1) ? 'vez' : 'veces' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        //Si no se acerta el numero realiza lo siguientes 
        if(numeroDeUsuario > numeroSecreto){
            asignarElement('p', 'El número secreto es menor')
        }else{
            asignarElement('p', 'El número secreto es mayor')
        }

        intentos ++;
        limpiarInput();


    }
    return;
};

function limpiarInput(){
    document.querySelector('#valorUsu').value = '';
    return;
};




function generearNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //Si el numero generado se encuentra en la lista 
    //Si ya se sorteron los numeros
    if(numerosSorteados.length == numeroMaximo){
        asignarElement('p', 'Ya se sorteron todos los números posibles')
    }else{
        if(numerosSorteados.includes(numeroGenerado)){
            return generearNumeroSecreto();
        }else{
            numerosSorteados.push(numeroGenerado)
            return numeroGenerado;
        }
    }
    
};

function condicionesIniciales(){
    asignarElement('h1', 'Juego del número secreto');
    asignarElement('p', `indica o ingresa un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generearNumeroSecreto();
    intentos = 1;
};

function reinicarJuego(){
    //Se limpar el input;
    limpiarInput();
    //intentos sera igual a 1
    //agregar el atibute disabled
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    //indicar el mensaje de interbalos de numeros
    condicionesIniciales();
    //generar el numero aleatorio
    

};

condicionesIniciales();

