import { cardImageUrl } from './cards.js';

export function renderCards(cards) {
    const container = document.createElement('div');
    container.className = 'cards';

    cards.forEach((card, i) => {
        const el = document.createElement('div');
        el.className = 'card';
        el.style.animationDelay = `${i * 0.08}s`;

        const img = document.createElement('img');
        img.src = cardImageUrl(card);
        img.alt = `${card.rank} of ${card.suit}`;
        img.draggable = false;
        el.appendChild(img);

        container.appendChild(el);
    });

    return container;
}

export function renderHeading(text) {
    const h = document.createElement('div');
    h.className = 'heading fade-in';
    h.innerHTML = text;
    return h;
}

export function renderSubtext(text) {
    const p = document.createElement('p');
    p.className = 'subtext fade-in';
    p.innerHTML = text;
    return p;
}

export function renderButton(text, className, onClick) {
    const btn = document.createElement('button');
    btn.className = `btn ${className} fade-in`;
    btn.textContent = text;
    btn.addEventListener('click', onClick);
    return btn;
}
