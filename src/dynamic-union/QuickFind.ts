import { DynamicUnion } from "./types";

export class QuickFind implements DynamicUnion {
  private items: number[] = [];

  constructor(n: number) {
    this.items = Array.from({ length: n }, (_, index) => index);
  }

  public union(a: number, b: number) {
    const aVal = this.find(a);
    const bVal = this.find(b);

    this.items.forEach((val, index) => {
      if (val === aVal) {
        this.items[index] = bVal;
      }
    });
  }

  public connected(a: number, b: number) {
    return this.items[a] === this.items[b];
  }

  public find(a: number) {
    return this.items[a];
  }

  public count() {
    return this.items.length;
  }
}
