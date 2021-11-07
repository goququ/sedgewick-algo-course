import { QuickFind } from "./QuickFind";

// input 1–2 3–4 5–6 7–8 7–9 2–8 0–5 1–9
// output {0,5,6}, {3, 4}, {1, 2, 7, 8, 9}

const TEST_CASES = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
  [7, 9],
  [2, 8],
  [5, 0],
  [1, 9],
];
const LENGTHS = [100, 333, 4233];

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
