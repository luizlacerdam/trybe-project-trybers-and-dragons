import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType: EnergyType;
  private static _mageQuantity = 0;

  constructor(n: string) {
    super(n);
    this._energyType = 'mana';
    Mage._mageQuantity += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances() : number {
    return this._mageQuantity;
  }
}