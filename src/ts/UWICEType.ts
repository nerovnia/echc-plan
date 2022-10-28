/** Class representing units with an internal combustion engine's type. */
class UWICEType {
  private static id: number = 0;
  static getId(): number { return ++UWICEType.id; }
  /**
  * Create units with an internal combustion engine's type.
  * @param {string} name_a  - units with an internal combustion engine's abbreviation type name.
  * @param {string} name_f  - units with an internal combustion engine's full type name.
  */
   private id: number;
  constructor(
    private name_a: string, 
    private name_f: string, 
  ) 
  {
    this.id = UWICEType.getId();
    this.name_a = name_a;
    this.name_f = name_f;
  }

  getNameAbbr(): string { return this.name_a; }
  getNameFull(): string { return this.name_f; }
}