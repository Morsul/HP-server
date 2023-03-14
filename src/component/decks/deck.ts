export class Deck {
  private _new: Array<number>;
  private _hand: Array<number>;
  private _bat: Array<number>;
  constructor() {
    this._new = [];
    this._hand = [];
    this._bat = [];
  }

  crearteDeck = (cards: Array<number>) => {
    this._new = [...cards];
    this._hand = [0];
    this._bat = [0];
  };

  getCard = (): Array<number> => {
    if (this._new.length === 0) {
      this.shuffleBat();
    }

    this._hand.push(this._new.pop()!);

    return this._hand;
  };

  private shuffleBat = (): void => {
    this._new = [...this._bat];

    for (let i = 0; i < this._new.length; i++) {
      const rng = Math.floor(Math.random() * (i + 1));
      [this._new[i], this._new[rng]] = [this._new[rng], this._new[i]];
    }
  };
}
