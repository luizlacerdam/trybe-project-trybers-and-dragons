import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints;
  private static _Orcs = 0;
  constructor(n: string, dex: number) {
    super(n, dex);
    this._maxLifePoints = 74;
    Orc._Orcs += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._Orcs;
  }
}