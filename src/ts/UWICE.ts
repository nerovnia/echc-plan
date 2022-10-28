/** Class representing unit with an internal combustion engine. */
class UWICE {
  private static id: number = 0;
  static getId(): number { return ++UWICE.id; }
  /**
  * Create transport.
  * @param {number} id        - identify number.
  * @param {number} own       - own.
  * @param {number} ownType   - own's type.
  * @param {string} name      - unit with an internal combustion engine's name.
  * @param {number} type      - unit with an internal combustion engine's type.
  */
  private id: number;
  constructor(
    private own: number,
    private ownType: number,
    private name: string, 
    private type: number
  ) 
  {
    this.id = UWICE.getId();
    this.own = own;
    this.ownType = ownType;
    this.name = name;
    this.type = type;
  }

  getName(): string { return this.name; }
  getType(): number { return this.type; }
  getOwn(): number { return this.own;}
  getOwnType(): number { return this.ownType;}
}