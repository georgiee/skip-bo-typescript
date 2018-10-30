import { CardFace } from "../deck";

export class DiscardPile {
  private _cards: CardFace[] = [];

  // Add a card only to the top of the pile
  add(card: CardFace) {
    this._cards.push(card);
  }

  // Remove the top card. Player can't get any other card.
  pop() {
    this._cards.pop();
  }

  // only peek into the value of the top card
  peek() {
    this._cards[this._cards.length - 1];
  }

  size() {
    return this._cards.length;
  }
}
