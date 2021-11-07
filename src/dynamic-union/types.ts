export interface DynamicUnion {
  union(a: number, b: number): void;
  connected(a: number, b: number): boolean;
  find(a: number): number;
  count(): number;
}
