export default abstract class Race {
  private _name: string;
  private _dexterity: number;
  private static _racesQuantity = 0;

  constructor(n: string, dex: number) {
    this._name = n;
    this._dexterity = dex;
  }
  
  public get name() : string {
    return this._name;
  }
  
  public get dexterity() : number {
    return this._dexterity;
  }

  abstract get maxLifePoints(): number;

  static createdRacesInstances() : number { 
    throw new Error('Not implemented');
    
    return this._racesQuantity;
  }
}