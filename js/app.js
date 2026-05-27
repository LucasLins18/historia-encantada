// ===== ÁUDIO INTERATIVO =====

document.querySelectorAll('.interactive-sound').forEach((button) => {

    // pega o card correto do botão atual
    const container = button.closest('.sound-card');

    // pega elementos APENAS desse card
    const slider = container.querySelector('.volume-slider');
    const volumeValue = container.querySelector('.volume-value');

    // cria um áudio único para esse botão
    const audio = new Audio(button.dataset.audio);

    audio.loop = true;

    // volume inicial
    audio.volume = slider.value;

    button.addEventListener('click', () => {

        if(audio.paused){

            audio.play();

            button.classList.add('playing');
            container.classList.add('active');

            // troca ícone
            if(!button.innerHTML.includes('⏸')){

                button.innerHTML =
                    button.innerHTML.replace('▶','⏸');

            }

        } else {

            audio.pause();

            button.classList.remove('playing');
            container.classList.remove('active');

            // troca ícone
            if(button.innerHTML.includes('⏸')){

                button.innerHTML =
                    button.innerHTML.replace('⏸','▶');

            }

        }

    });

    // CONTROLE INDIVIDUAL
    slider.addEventListener('input', (e) => {

        audio.volume = e.target.value;

        volumeValue.innerText =
            Math.round(e.target.value * 100) + '%';

    });

});


// ===== COPIAR PIX =====

function copyPix(){

    navigator.clipboard.writeText(
        "lucas.barbosa.lins@gmail.com"
    );

    showMagicPopup(
    "✨ Chave PIX copiada com sucesso!");

}

// ===== POPUP MÁGICO =====

function showMagicPopup(message){

    // remove popup antigo
    const oldPopup =
        document.querySelector('.magic-popup');

    if(oldPopup){
        oldPopup.remove();
    }

    // cria popup
    const popup = document.createElement('div');

    popup.classList.add('magic-popup');

    popup.innerHTML = `
        <div class="magic-popup-icon">
            ✨
        </div>

        <div class="magic-popup-text">
            ${message}
        </div>
    `;

    document.body.appendChild(popup);

    // anima entrada
    setTimeout(() => {
        popup.classList.add('show');
    }, 50);

    // remove depois
    setTimeout(() => {

        popup.classList.remove('show');

        setTimeout(() => {
            popup.remove();
        }, 400);

    }, 2500);

}