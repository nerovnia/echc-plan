/** Class representing an own. */
class Own {
  private static id: number = 0;
  static getId(): number { return ++Own.id; }
  /**
  * Create an own.
  * @param {number} own  - an own.
  * @param {number} type  - an own's type.
  */
   private id: number;
  constructor(
    private own: number, 
    private type: number, 
  ) 
  {
    this.id = Own.getId();
    this.own = own;
    this.type = type;
  }

  getOwn(): number { return this.own; }
  getType(): number { return this.type; }
}