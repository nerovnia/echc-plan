/** Class representing transport's type. */
export default class TransportType {
  private static id: number = 0;
  static getId(): number { return ++TransportType.id; }
  /**
  * Create transport's type.
  * @param {string} name  - transport's type name.
  */
  constructor(
    private name: string, 
  ) 
  {
    this.name = name;
  }

  getName(): string { return this.name; }
}