import { Deck } from "./deck";

// 144 1-12 cards  + 18 Joker/Wild (Skip-bo) = 162 cards
// empty stock pile to win.
// draw pile in center
// 4 building piles in the center
// 4 discard piles per player

// 2 -4 players: 30 cards per player -> stock pile
// 5 or more: 20 cards per player dealt -> stock pile
// face down

// 1. shuffle deck

// 12 cards per face


export class SkipboGame {
  private _deck: Deck;

  constructor(private playerCount: number = 2) {
    this._deck = new Deck();
  }

  run() {
    this._deck.reset();
  }

  shuffle() {
  }
}
