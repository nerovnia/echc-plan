/** Class representing a manufactory's type. */
export default class ManufactoryType {
  private static id: number = 0;
  static getId(): number { return ++ManufactoryType.id; }
  /**
  * Create manufactory's type.
  * @param {string} name  - manufactory's type name.
  */
   constructor(
    private name: string, 
  ) 
  {
    this.name = name;
  }

  getName(): string { return this.name; }
}