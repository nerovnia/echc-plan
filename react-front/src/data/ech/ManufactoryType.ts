/** Class representing a manufactory's type. */
class ManufactoryType {
  private static id: number = 0;
  static getId(): number { return ++ManufactoryType.id; }
  /**
  * Create manufactory's type.
  * @param {string} name_a  - manufactory's type abbreviated name.
  * @param {string} name_f  - manufactory's type full name.
  */
  private id: number;
   constructor(
    private name_a: string, 
    private name_f: string, 
  ) 
  {
    this.id = ManufactoryType.getId(); 
    this.name_a = name_a;
    this.name_f = name_f;
  }

  getNameAbbr(): string { return this.name_a; }
  getNameFull(): string { return this.name_f; }
}