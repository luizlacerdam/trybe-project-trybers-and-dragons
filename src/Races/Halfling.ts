import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints;
  private static _Halflings = 0;
  constructor(n: string, dex: number) {
    super(n, dex);
    this._maxLifePoints = 60;
    Halfling._Halflings += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._Halflings;
  }
}