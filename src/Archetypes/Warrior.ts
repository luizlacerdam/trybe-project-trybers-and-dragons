import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static _Warriors = 0;

  constructor(n: string) {
    super(n);
    this._energyType = 'stamina';
    Warrior._Warriors += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances() : number {
    return this._Warriors;
  }
}