import { QuickFind } from "./QuickFind";
import { DynamicUnion } from "./types";

export class QuickUnion extends QuickFind implements DynamicUnion {
  constructor(n: number) {
    super(n);
  }

  private root(a: number) {
    let item = a;
    while (item !== this.items[item]) {
      item = this.items[item];
    }
    return item;
  }

  connected(a: number, b: number) {
    return this.root(a) === this.root(b);
  }

  union(a: number, b: number) {
    const rootA = this.root(a);
    const rootB = this.root(b);

    this.items[rootA] = rootB;
  }

  find(a: number) {
    return this.root(a);
  }
}
