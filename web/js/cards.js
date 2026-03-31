const SUITS = ['C', 'D', 'S', 'H'];

const SWAP_MAP = {
    'C': 'S',  // clubs → spades
    'S': 'C',  // spades → clubs
    'D': 'H',  // diamonds → hearts
    'H': 'D'   // hearts → diamonds
};

const RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', '0', 'J', 'Q', 'K', 'A'];

const IMG_BASE = 'https://deckofcardsapi.com/static/img/';

function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

export function generateInitialCards(count = 6) {
    const ranks = shuffle(RANKS).slice(0, count);
    const suits = ranks.map(() => SUITS[Math.floor(Math.random() * 4)]);
    return ranks.map((rank, i) => ({ rank, suit: suits[i] }));
}

export function generateRevealCards(originals) {
    const swapped = originals.map(c => ({
        rank: c.rank,
        suit: SWAP_MAP[c.suit]
    }));
    const removeIdx = Math.floor(Math.random() * swapped.length);
    swapped.splice(removeIdx, 1);
    return swapped;
}

export function cardImageUrl(card) {
    return `${IMG_BASE}${card.rank}${card.suit}.png`;
}
