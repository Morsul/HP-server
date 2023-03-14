import { IPlayer, IDeck } from '../../types';
import { playablechars } from '../../assets/pc';
import { Player, Deck } from '../index';

export class Game {
  private _gameStarted: boolean;
  private _players: Array<IPlayer>;
  private _gameID: string;
  private _playerMove: number;
  private _level: number;
  private _deckBank: Deck;
  private _deckVillian: Deck;
  private _deckHorcrux: Deck;
  private _deckLocation: Deck;
  private _deckDarkArt: Deck;
  private _deckProfficenty: Deck;
  private _playersList: Deck;
  private _tokenCurrency: number;
  private _tokenAttack: number;

  constructor() {
    this._gameStarted = false;
    this._gameID = '';
    this._players = [];
    this._playerMove = -1;
    this._level = -1;
    this._deckBank = new Deck();
    this._deckVillian = new Deck();
    this._deckHorcrux = new Deck();
    this._deckLocation = new Deck();
    this._deckDarkArt = new Deck();
    this._deckProfficenty = new Deck();
    this._playersList = new Deck();
    this._tokenCurrency = 25;
    this._tokenAttack = 35;
  }

  setGameID = (number: number): void => {
    this._gameID = 'game' + String(number);
    this._playerMove = 0;
  };

  setGameLVL = (number: number) => {
    this._level = number;
  };

  endTurtn = (): number => {
    this._playerMove = this._playerMove + 1 > this._players.length ? this._playerMove + 1 : 0;
    return this._playerMove;
  };

  startGame = (): void => {
    this._gameStarted = true;
  };

  addPlayer = (charId: number, token: string): void => {
    const player: IPlayer = {
      socket: token,
      playerInfo: new Player(),
    };

    player.playerInfo.setCharID(charId);

    this._players.push(player);
  };

  getPlayerCount = (): number => {
    return this._players.length;
  };
}
