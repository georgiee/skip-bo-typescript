import { Player, DiscardPileIndex } from "./player";
import { Deck, CardFace } from "../deck";

let deck: Deck;

beforeEach(() => {
  deck = new Deck([3,4,1,2,3,4,5,6,7,8,9,10]);
});

test('create a player', () => {
  const player = new Player(0);

  expect(player).toBeDefined();
});

test('has a name', () => {
  const player = new Player(0);

  expect(player.getName()).toBe("Player 0");
});


test('can have a name', () => {
  const player = new Player(0, "George");

  expect(player.getName()).toBe("George");
});

test('can\'t complete a turn without discarding a card', () => {
  const player = new Player(0, "George");

  expect(() => {
    player.completeTurn();
  }).toThrowError('You have to discard a card to complete the turn');

});


test('can discard a card', () => {
  const player = new Player(0, "George");
  player.fillHandCards(deck);
  const cards = player.getHandCards();
  const discardPile = player.getDiscardPile(DiscardPileIndex.One);
  const sizeDiscardPileBefore = discardPile.size();

  player.discardCard(CardFace.One, DiscardPileIndex.One);
  let cardsAfterDiscard = player.getHandCards();
  let sizeDiscardPileAfter = discardPile.size();

  expect(cardsAfterDiscard).toHaveLength(cards.length - 1);
  expect(sizeDiscardPileAfter).toBe(sizeDiscardPileBefore - 1);
});