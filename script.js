// CONFIGURA AQUÍ EL NOMBRE Y EL MENSAJE
const NOMBRE = "Juana";
const MENSAJE = "Te amo";

const animationContainer = document.getElementById('animation-container');
const finalMessage = document.getElementById('final-message');
const nameElem = document.getElementById('name');
const loveMessageElem = document.getElementById('love-message');

function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
}

function createElement(type) {
    const el = document.createElement('div');
    el.className = type;
    // Posición aleatoria en la pantalla
    el.style.left = randomBetween(0, 95) + 'vw';
    el.style.bottom = '-60px';
    el.style.zIndex = 2;
    // Tamaño aleatorio
    const scale = randomBetween(0.7, 1.3);
    el.style.transform = `scale(${scale})`;
    // Retraso de aparición
    el.style.animationDelay = randomBetween(0, 2) + 's';
    animationContainer.appendChild(el);
    // Remover después de la animación
    setTimeout(() => {
        el.remove();
    }, 4000);
}

function launchFlowersAndHearts() {
    let count = 0;
    const interval = setInterval(() => {
        // Alterna entre flor y corazón
        const type = Math.random() < 0.5 ? 'flower' : 'heart';
        createElement(type);
        count++;
        if (count >= 36) {
            clearInterval(interval);
            // Espera a que terminen de flotar y muestra el mensaje
            setTimeout(showFinalMessage, 2500);
        }
    }, 120);
}

function showFinalMessage() {
    nameElem.textContent = NOMBRE;
    loveMessageElem.textContent = MENSAJE;
    finalMessage.classList.remove('hidden');
    finalMessage.classList.add('show');
}

document.addEventListener('DOMContentLoaded', () => {
    const animationContainer = document.getElementById('animation-container');
    const finalMessage = document.getElementById('final-message');
    const nameElem = document.getElementById('name');
    const loveMessageElem = document.getElementById('love-message');

    if (!animationContainer || !finalMessage || !nameElem || !loveMessageElem) {
        console.error('Faltan elementos en el HTML.');
        return;
    }
    finalMessage.classList.add('hidden');
    launchFlowersAndHearts(animationContainer, finalMessage, nameElem, loveMessageElem);
});

// Adaptar las funciones para recibir los elementos
function launchFlowersAndHearts(animationContainer, finalMessage, nameElem, loveMessageElem) {
    let count = 0;
    const interval = setInterval(() => {
        const type = Math.random() < 0.5 ? 'flower' : 'heart';
        createElement(type, animationContainer);
        count++;
        if (count >= 36) {
            clearInterval(interval);
            setTimeout(() => showFinalMessage(finalMessage, nameElem, loveMessageElem), 2500);
        }
    }, 120);
}

function createElement(type, animationContainer) {
    const el = document.createElement('div');
    el.className = type;
    el.style.left = randomBetween(0, 95) + 'vw';
    el.style.bottom = '-60px';
    el.style.zIndex = 2;
    const scale = randomBetween(0.7, 1.3);
    el.style.transform = `scale(${scale})`;
    el.style.animationDelay = randomBetween(0, 2) + 's';
    // SVGs reales de flor y corazón
    if (type === 'flower') {
        el.innerHTML = `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="10" fill="#FFD1DC"/>
            <ellipse cx="24" cy="10" rx="8" ry="12" fill="#FF69B4"/>
            <ellipse cx="24" cy="38" rx="8" ry="12" fill="#FF69B4"/>
            <ellipse cx="10" cy="24" rx="12" ry="8" fill="#FF69B4"/>
            <ellipse cx="38" cy="24" rx="12" ry="8" fill="#FF69B4"/>
        </svg>`;
    } else if (type === 'heart') {
        el.innerHTML = `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 36s-8.5-7.1-13.2-12C2.1 20.5 2 15.5 6 12.5c3.2-2.6 7.6-1.5 10 1.2C18.4 10.9 22.8 9.8 26 12.5c4 3 3.9 8 0.8 11.5C28.5 28.9 20 36 20 36z" fill="#FF4B6E" stroke="#D72660" stroke-width="2"/>
        </svg>`;
    }
    animationContainer.appendChild(el);
    setTimeout(() => {
        el.remove();
    }, 4000);
}


function showFinalMessage(finalMessage, nameElem, loveMessageElem) {
    nameElem.textContent = NOMBRE;
    loveMessageElem.textContent = MENSAJE;
    finalMessage.classList.remove('hidden');
    finalMessage.classList.add('show');
}
