import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints;
  private static _Dwarfs = 0;
  constructor(n: string, dex: number) {
    super(n, dex);
    this._maxLifePoints = 80;
    Dwarf._Dwarfs += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._Dwarfs;
  }
}