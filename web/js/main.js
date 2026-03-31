import { generateInitialCards, generateRevealCards } from './cards.js';
import { renderCards, renderHeading, renderSubtext, renderButton } from './render.js';

const stage = document.getElementById('stage');
let initialCards = [];

function clear() {
    stage.innerHTML = '';
}

function stepIntro() {
    clear();
    stage.appendChild(renderHeading('Mind Reader'));
    stage.appendChild(renderSubtext(
        'I will remove your chosen card without ever knowing what it is.'
    ));
    stage.appendChild(renderButton('Begin', 'btn-primary', stepPickCard));
}

function stepPickCard() {
    clear();
    initialCards = generateInitialCards(6);
    stage.appendChild(renderHeading(
        'Choose any card in your mind. <em>Do not click it.</em>'
    ));
    stage.appendChild(renderCards(initialCards));
    stage.appendChild(renderButton(
        'Got it. Next step.',
        'btn-primary',
        stepSayAloud
    ));
}

function stepSayAloud() {
    clear();
    stage.appendChild(renderHeading(
        'Picture your card clearly. Say its name out loud.'
    ));
    stage.appendChild(renderSubtext('Focus on it...'));

    setTimeout(() => {
        stage.appendChild(renderButton('Ready.', 'btn-primary', stepReveal));
    }, 1500);
}

function stepReveal() {
    clear();
    const revealCards = generateRevealCards(initialCards);
    stage.appendChild(renderHeading('Your card has been removed.'));
    stage.appendChild(renderCards(revealCards));

    setTimeout(() => {
        stage.appendChild(renderButton('Again.', 'btn-primary', stepPickCard));
    }, 1000);
}

stepIntro();
