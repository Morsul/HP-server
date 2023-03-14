export class Player {
  private _charID: number;
  private _healthPoint: number;
  private _coin: number;
  private _deck: Array<number>;
  private _deckBat: Array<number>;

  constructor() {
    this._charID = -1;
    this._healthPoint = 10;
    this._coin = 0;
    this._deck = [];
    this._deckBat = [];
  }

  setCharID = (number: number): void => {
    this._charID = number;
  };

  updateHP = (number: number): void => {
    this._healthPoint += number;
  };

  updateCoin = (number: number): void => {
    this._coin += number;
  };
}
