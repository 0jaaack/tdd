class Money {
}

export class Dollar extends Money {
  private amount: number;

  constructor(amount: number) {
    super();
    this.amount = amount;
  }

  times(multiplier: number) {
    return new Dollar(this.amount * multiplier);
  }

  equals(doller: Dollar) {
    return this.amount === doller.amount;
  }
}

export class Franc {
  private amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  times(multiplier: number) {
    return new Franc(this.amount * multiplier);
  }

  equals(franc: Franc) {
    return this.amount === franc.amount;
  }
}
