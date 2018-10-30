const NORMAL_CARD_COUNT = 12;
const SKIPBO_CARD_COUNT = 18;


const splitEnumInKeyValues = (enumType: any) => {
  const keys = Object.keys(enumType)
  .filter(k => typeof CardFace[k as any] === "number")
  .filter(k => CardFace[k] !== CardFace.SkipBo)

  const values = keys.map(k => CardFace[k as any]);
  return { keys, values }
}

export enum CardFace {
  SkipBo = 1,
  One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten, Eleven, Twelve
}

export class Deck {
  cards: CardFace[];

  constructor() {
    this.cards = [];
  }

  get count() {
    return this.cards.length;
  }

  reset() {
    // split enum so we can generate our card values dynamically
    const {values} = splitEnumInKeyValues(CardFace);
    const deck = [];

    for(let cardValue of values) {
      const cards = Array.from(Array(NORMAL_CARD_COUNT), () => cardValue);
      deck.push(...cards);
    }

    // add our skipbo cards (there are more than the default faces in the deck)
    const cards = Array.from(Array(SKIPBO_CARD_COUNT), () => CardFace.SkipBo);
    deck.push(...cards);

    console.log(deck)
  }
}