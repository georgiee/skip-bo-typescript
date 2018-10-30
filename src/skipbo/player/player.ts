import { CardFace, Deck } from "../deck";
import { DiscardPile } from "./discard-pile";
import { HandCards } from "./hand-cards";

export const HAND_LIMIT_COUNT = 5;


export enum DiscardPileIndex {
  One = 1, Two, Three, Four
}

export class Player {
  stockPile: CardFace[] = [];
  discardPiles: DiscardPile[] = [];
  hand : HandCards;
  _turnCompleted: boolean = false;

  constructor(
    private _playerIndex: number,
    private _name: string = null
  ) {
    this.hand = new HandCards();
    // there are a maximum of four discard piles per player
    this.discardPiles[DiscardPileIndex.One] = new DiscardPile();
    this.discardPiles[DiscardPileIndex.Two] = new DiscardPile();
    this.discardPiles[DiscardPileIndex.Three] = new DiscardPile();
    this.discardPiles[DiscardPileIndex.Four] = new DiscardPile();
  }

  getName() {
    if(this._name) {
      return this._name;
    }

    return `Player ${this._playerIndex}`;
  }

  get sizeStock() {
    return this.stockPile.length;
  }

  drawStockCardFrom(deck: Deck) {
    this.stockPile.push(deck.drawCard());
  }

  // draw cards to hold five cards
  fillHandCards(deck: Deck){
    while(!this.hand.isFull()) {
      this.hand.add(deck.drawCard());
    }
  }

  discardCard(card: CardFace, discardPileIndex: DiscardPileIndex) {
    const pile = this.getDiscardPile(discardPileIndex);
    pile.add(this.hand.remove(card));

    this._turnCompleted = true;
  }

  getHandCards() {
    return this.hand.toArray();
  }

  getDiscardPile(index: DiscardPileIndex) {
    return this.discardPiles[index];
  }

  startTurn() {
    this._turnCompleted = false;
  }

  completeTurn() {
    if(this._turnCompleted === false) {
      throw new Error("You have to discard a card to complete the turn");
    }
  }
}
