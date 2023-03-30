import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  private _p1: Character;
  private _monsters: Monster[] | SimpleFighter[] | Fighter[];

  constructor(
    p1: Character,
    monsters: Monster[] | SimpleFighter[] | Fighter[],
  ) {
    super(p1);
    this._p1 = p1;
    this._monsters = monsters;
  }

  turn = (
    player: Character | Fighter,
    monsters: Fighter[] | SimpleFighter[],
  ) => {
    this._monsters.forEach((monster) => {
      do {
        monster.receiveDamage(this._p1.strength);
        if (monster.lifePoints <= 0 || this._p1.lifePoints <= 0) break;
      } while (monster.lifePoints > 0 || this._p1.lifePoints > 0);
    });
  };

  fight(): number {
    return this._p1.lifePoints === -1 ? -1 : 1;
  }
}