/** Class representing unit with an internal combustion engine condition in plan. */
class PlanUWICECondition {
  private static id: number = 0;
  static getId(): number { return ++PlanUWICECondition.id; }
  /**
  * Create unit with an internal combustion engine condition in plan.
  * @param {number} plan       - work's plan.
  * @param {number} uwice      - unit with an internal combustion engine
  * @param {number} condition  - condition.
  * @param {string} comment    - comment.
  */
  private id: number;
  constructor(
    private own: number,
    private ownType: number,
    private name: string, 
    private type: number
  ) 
  {
    this.id = PlanUWICECondition.getId();
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