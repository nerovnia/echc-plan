/** Class representing railway stopping point. */
class StoppingPoint {
  private static id: number = 0;
  static getId(): number { return ++StoppingPoint.id; }
  /**
  * Create stopping point.
  * @param {string} name  - railway stopping point's name.
  */
  private id: number;
  constructor(
    private name: string, 
  ) 
  {
    this.id = StoppingPoint.getId();
    this.name = name;
  }

  getName(): string { return this.name; }
}