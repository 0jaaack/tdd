class Money {
  protected amount: number;

  constructor() {
    this.amount = 0;
  }

  equals(money: Money) {
    return this.amount === money.amount;
  }
}

export class Dollar extends Money {
  constructor(amount: number) {
    super();
    this.amount = amount;
  }

  times(multiplier: number) {
    return new Dollar(this.amount * multiplier);
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
