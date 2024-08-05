export class Dollar {
  amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  times(multiplier: number) {
    return new Dollar(this.amount * multiplier);
  }

  equals(doller: Dollar) {
    return this.amount === doller.amount;
  }
}
