import { Player } from './component/player/player';

export interface IPlayer {
  socket: string;
  playerInfo: Player;
}

export interface IDeck {
  new: Array<number>;
  bat: Array<number>;
}
