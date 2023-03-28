import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints;
  private static _Elfs = 0;
  constructor(n: string, dex: number) {
    super(n, dex);
    this._maxLifePoints = 99;
    Elf._Elfs += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._Elfs;
  }
}