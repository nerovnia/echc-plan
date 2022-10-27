/** Class representing transport. */
class Transport {
  private static id: number = 0;
  static getId(): number { return ++Manufactory.id; }
  /**
  * Create transport.
  * @param {number} id    - identify number.
  * @param {string} name  - transport's name.
  * @param {number} type  - transport's type.
  */
  constructor(
    private name: string, 
    private type: number
  ) 
  {
    this.name = name;
    this.type = type;
  }

  getName(): string { return this.name; }
  getType(): number { return this.type; }
}