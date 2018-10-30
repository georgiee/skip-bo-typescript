import { CardFace } from "../deck";
import { HAND_LIMIT_COUNT } from "./player";

export class HandCards {
  private _cards: CardFace[] = [];
  get size() {
      return this._cards.length;
  }

  // Order doesn't matter so we just append
  add(card: CardFace) {
    this._cards.push(card);
  }

  // We remove a card with the values. Just take the first one.
  remove(card: CardFace):CardFace {
    const index = this._cards.indexOf(card);
    if(index === -1) {
      throw new Error(`You don't have the card ${card}`);
    }
    return this._cards.splice(index, 1)[0];
  }

  isFull() {
    return this.size === HAND_LIMIT_COUNT;
  }

  toArray() {
    return this._cards.concat([]);
  }
}
