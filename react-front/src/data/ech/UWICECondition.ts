/** Class representing unit with an internal combustion engine condition. */
class UWICECondition {
  private static id: number = 0;
  static getId(): number { return ++UWICECondition.id; }
  /**
  * Create unit with an internal combustion engine condition.
  * @param {string} name       - condition name.
  */
  private id: number;
  constructor(
    private name: string, 
  ) 
  {
    this.id = UWICECondition.getId();
    this.name = name;
  }

  getName(): string { return this.name; }
}