interface HasId {
  id?: number;
}

/**
 * Generic Constraints
 * Sync<T extends HasId>で、
 * Tはidを持った何かとして定義できる。
 */
export class Sync<T extends HasId> {
  save(data: T): void {
    // Genericをやっていてたまにこまるパターン。
    // data.id をやろうとするとコンパイルエラーになってしまう。
    // この時に、T extends HasId にすることで、id を持っている T という縛りをつけることが可能になる。
    const { id } = data;
  }
}
