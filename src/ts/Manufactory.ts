/** Class representing a manufactory. */
class Manufactory {
  private static id: number = 0;
  static getId(): number { return ++Manufactory.id; }
  private transport: Array<number>;
  /**
  * Create a manufactory.
  * @param {number} numMan  - Number of manufactory.
  * @param {number} numIter - Name number of manufactory.
  * @param {number} manType - Type of manufactory.
  */
 private id: number;
  constructor(
    private numMan:number, 
    private numIter: number, 
    private manType: number
  ) 
  {
    this.id = Manufactory.getId();
    this.numMan = numMan;
    this.numIter = numIter;
    this.manType = manType;
    this.transport = [];
  }

  addTransport(transport) { this.transport.push(transport); }
  getTransport() { return this.transport; }
}
