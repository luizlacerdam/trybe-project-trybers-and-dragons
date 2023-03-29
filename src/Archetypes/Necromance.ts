import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static _Necromancers = 0;

  constructor(n: string) {
    super(n);
    this._energyType = 'mana';
    Necromancer._Necromancers += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances() : number {
    return this._Necromancers;
  }
}