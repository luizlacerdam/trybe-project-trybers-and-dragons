import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _energyType: EnergyType;
  private static _Rangers = 0;

  constructor(n: string) {
    super(n);
    this._energyType = 'stamina';
    Ranger._Rangers += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances() : number {
    return this._Rangers;
  }
}