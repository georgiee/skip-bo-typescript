import { Deck, CardFace } from "./deck";
import { DoublyLinkedList, DoublyLinkedListNode } from "../utils/doubly-linked-list";
import { BuildingPile } from "./building-pile";
import { Player } from "./player/player";

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

class Pile {
  addCard(card: CardFace) {

  }
}


export class SkipboGame {
  private _deck: Deck;
  private _players: DoublyLinkedList<Player>;
  private _currentPlayer: DoublyLinkedListNode<Player>;
  private _buildingPiles: BuildingPile[] = [];

  constructor(private playerCount: number = 2) {
    this._deck = new Deck();

    const players = [];
    for(let playerIndex = 0; playerIndex < playerCount; playerIndex++) {
      players.push(new Player(playerIndex));
    }

    this._players = new DoublyLinkedList<Player>(players);

    this._buildingPiles.push(new BuildingPile(0));
    this._buildingPiles.push(new BuildingPile(1));
    this._buildingPiles.push(new BuildingPile(2));
    this._buildingPiles.push(new BuildingPile(3));

    this._deck.reset();
  }

  getBuildingPiles(): BuildingPile[] {
    return this._buildingPiles;
  }

  getPlayers(): Player[] {
    return Array.from(this._players.values());
  }

  nextPlayer() {
    if(this._currentPlayer && this._currentPlayer.next) {
      this._currentPlayer = this._currentPlayer.next;
    } else{
      this._currentPlayer = this._players.head;
    }
  }

  run() {
    // this.currentPlayer.fillHandCards(this._deck);
  }

  start() {
    this.dealCards();
    this.nextPlayer();

    this.currentPlayer.fillHandCards(this._deck);

    // const cards = this.currentPlayer.getHandCards();
    // const piles = this.currentPlayer.getDiscardPiles();
    // this.currentPlayer.discardCard(cards[0], piles[0]);
  }


  get currentPlayer():Player {
    return this._currentPlayer!.value;
  }

  dealCards() {
    const CARDS_PER_PLAYER = 30;
    for(let i = 0; i<CARDS_PER_PLAYER; i++) {
      for(let player of this._players.values()) {
        player.drawStockCardFrom(this._deck);
      }
    }
  }

  shuffle() {
  }
}
