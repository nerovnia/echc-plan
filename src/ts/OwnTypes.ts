/** Class representing an own's type. */
class OwnType {
  private static id: number = 0;
  static getId(): number { return ++OwnType.id; }
  /**
  * Create an own's type.
  * @param {string} name_a  - an own's type abbreviated name.
  * @param {string} name_f  - an own's type full name.
  */
  private id: number;
   constructor(
    private name: string, 
  ) 
  {
    this.id = OwnType.getId(); 
    this.name = name;
  }

  getName(): string { return this.name; }
}