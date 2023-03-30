import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  private _p1: Character | Fighter;
  private _monsters: Monster[] | SimpleFighter[] | Fighter[];

  constructor(
    p1: Character | Fighter,
    monsters: Monster[] | SimpleFighter[] | Fighter[],
  ) {
    super(p1);
    this._p1 = p1;
    this._monsters = monsters;
  }

  turn = (
    p: Character | Fighter,
    monster: Fighter | SimpleFighter,
  ): void => {
    if (p.lifePoints > 0) {
      monster.receiveDamage(p.strength);
    }
    if (monster.lifePoints > 0) {
      p.receiveDamage(monster.strength);
    }
  };

  fight(): number {
    while (this._p1.lifePoints > 0 
    && this._monsters.some((monster) => monster.lifePoints > 0)) {
      this._monsters.forEach((m) => this.turn(this._p1, m));
    }
    return super.fight();
  }
}