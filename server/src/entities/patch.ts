export class Patch {
  constructor(
    private readonly small: string | null,
    private readonly large: string | null
  ) {
    Object.freeze(this)
  }

  public static create(small: string | null, large: string | null): Patch {
    return new Patch(small, large)
  }

  getSmall(): string | null {
    return this.small
  }

  getLarge(): string | null {
    return this.large
  }
}
