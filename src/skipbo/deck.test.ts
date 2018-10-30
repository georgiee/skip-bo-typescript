import { Deck } from './deck';

test('deck is empty at the beginning', () => {
  const deck = new Deck();

  expect(deck.size).toBe(0);
});

test('deck should reset with all 162 cards', () => {
  const deck = new Deck();
  deck.reset();
  expect(deck.size).toBe(162);
});

test('deck should be shuffled after creation', () => {
  const deck = new Deck();
  deck.reset();
  const list1 = deck.getCardList();

  deck.reset();
  const list2 = deck.getCardList();

  expect(list1).not.toEqual(list2);
});

test('can draw a card', () => {
  const deck = new Deck();
  deck.reset();
  const list = deck.getCardList();
  const sizeBefore = deck.size
  const card = deck.drawCard();
  const sizeAfter = deck.size;

  expect(list[0]).toEqual(card);
  expect(sizeAfter).toEqual(sizeBefore - 1);
});