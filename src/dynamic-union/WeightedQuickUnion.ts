import { QuickUnion } from "./QuickUnion";
import { DynamicUnion } from "./types";

export class WeightedQuickUnion extends QuickUnion implements DynamicUnion {
  private sizes: number[] = [];

  constructor(n: number) {
    super(n);
    this.sizes = Array.from({ length: n }, () => 1);
  }

  union(a: number, b: number) {
    const aRoot = this.root(a);
    const bRoot = this.root(b);

    if (aRoot === bRoot) {
      return;
    }

    const aSize = this.sizes[aRoot];
    const bSize = this.sizes[aRoot];

    if (aSize > bSize) {
      this.items[bRoot] = aRoot;
      this.sizes[aRoot] += bSize;
    } else {
      this.items[aRoot] = bRoot;
      this.sizes[bRoot] += aRoot;
    }
  }
}
