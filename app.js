let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let numeroMaximoDeIntentos = 3;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);  
    
    console.log(intentos)
    
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento(`p`,`Acertaste! el numero en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'} `)
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else { 
        if(numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento(`p`,`El numero secreto es menor`);
        }
        else {
                asignarTextoElemento(`p`,`El numero secreto es mayor`);
            }
            intentos++;
            if(intentos > numeroMaximoDeIntentos){
                asignarTextoElemento(`p`,`Llegaste al numero maximo de intentos.`);
                document.getElementById('reiniciar').removeAttribute('disabled');
                
            }
            limpiarCaja();
        }
        
        
        
    }
      
    

function limpiarCaja(){
   document.querySelector('#valorUsuario').value = '';
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

   
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento(`p`,`Ya se sortearon todos los numeros posibles.`);
    } else {
    //si el numero generado esta incluido en lalista 
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    } else {
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
    }

}
}
    


function condicionesIniciales() 
{
    asignarTextoElemento(`h1`,`Juego del numero secreto de Rich!`);
    asignarTextoElemento(`p`,`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

    
}

function reiniciarJuego() {
    // limpiar la caja
    limpiarCaja();
    // Indicar el mensaje de intervalo de numeros
    condicionesIniciales();
    // Generar el numero aleatorio
    
    // Inicializar el numero de intentos
    intentos = 1;
    document.querySelector('#reiniciar').setAttribute('disabled','True');
}    

condicionesIniciales();
