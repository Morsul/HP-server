import { IPlayer } from '../type';
export class Game {
  private _players: Array<IPlayer>;
  private _gameID: string;
  private _playersMove: number;
  private _level: number;
  
  constructor(){
    this._gameID = '';
    this._players = [];
    this._playersMove = -1;
    this._level = 1;
  }

  setGameID = (number: number): void => {
    this._gameID = 'game'+ String(number);
    this._playersMove = 0;
  };

  endTurtn = (): void =>{
    this._playersMove = this._playersMove+1 > this._players.length ? this._playersMove+1 : 0 ;  
  };
}