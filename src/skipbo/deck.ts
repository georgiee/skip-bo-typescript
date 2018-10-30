import { DoublyLinkedList } from "../utils/doubly-linked-list";

function shuffle(a:any[]):any[] {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}


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
  SkipBo = 0,
  One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten, Eleven, Twelve
}

export class Deck {
  _cards: CardFace[];
  _list: DoublyLinkedList<CardFace>;

  constructor(initialCards = []) {
    this._list = new DoublyLinkedList<CardFace>();
    this._list.fromArray(initialCards);
  }

  get size(): number {
    return this._list.size();
  }

  drawCard():CardFace {
    return this._list.dequeue();
  }

  reset() {
    this._list.fromArray(this.createShuffledCardSet());
  }

  getCardList():CardFace[] {
    return Array.from(this._list.values());
  }

  createShuffledCardSet():CardFace[] {
    // split enum so we can generate our card values dynamically
    const {values} = splitEnumInKeyValues(CardFace);
    const deck:CardFace[] = [];

    for(let cardValue of values) {
      const cards = Array.from(Array(NORMAL_CARD_COUNT), () => parseInt(cardValue) as CardFace);
      deck.push(...cards);
    }

    // add our skipbo cards (there are more than the default faces in the deck)
    const cards = Array.from(Array(SKIPBO_CARD_COUNT), () => CardFace.SkipBo);
    deck.push(...cards);

    return shuffle(deck);
  }
}