import { QuickFind } from "./QuickFind";

import { TEST_CASES, LENGTHS } from "./consts";

const setupQF = (qf: QuickFind, unions: number[][]) => {
  unions.forEach(([a, b]) => {
    qf.union(a, b);
  });
};

describe("QuickFind structure implementation tests", () => {
  let qf: QuickFind;

  beforeEach(() => {
    const newQF = new QuickFind(10);
    setupQF(newQF, TEST_CASES);

    qf = newQF;
  });

  test("QuickFind union/connected method test", () => {
    expect(qf.connected(0, 6)).toBe(true);
    expect(qf.connected(3, 4)).toBe(true);
    expect(qf.connected(1, 9)).toBe(true);
    expect(qf.connected(2, 7)).toBe(true);

    expect(qf.connected(7, 0)).toBe(false);
    expect(qf.connected(6, 3)).toBe(false);
    expect(qf.connected(9, 5)).toBe(false);
  });

  test("QuickFind find method test", () => {
    expect(qf.find(7)).not.toBe(qf.find(0));
    expect(qf.find(6)).not.toBe(qf.find(3));

    expect(qf.find(0)).toBe(qf.find(6));
    expect(qf.find(3)).toBe(qf.find(4));
  });

  test("QuickFind count method test", () => {
    expect(qf.count()).toBe(10);

    LENGTHS.forEach((len) => {
      expect(new QuickFind(len).count()).toBe(len);
    });
  });
});
