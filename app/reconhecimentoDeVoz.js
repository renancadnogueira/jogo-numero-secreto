const elementoChute = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; // para conseguir falar no navegador precisamos disso 

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start();

recognition.addEventListener('result', onSpeak) // adicionando um evento para sair no resultado. 

function onSpeak(e) {
    chute = e.results[0][0].transcript // Exibição do número falado no console. 
    exibeChuteNaTela(chute);
    verificaSeOChutePossuiUmValorValido(chute)
}

// proporciona escrever na tela o valor que foi falado pelo reconhecimento de voz.
function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = ` 
        <div>Você disse </div>
        <span class="box">${chute}</span> 
    `
}

recognition.addEventListener('end', () => recognition.start())