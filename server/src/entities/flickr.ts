export class Flickr {
  constructor(
    private readonly small: string[],
    private readonly original: string[]
  ) {
    Object.freeze(this)
  }

  public static create(small: string[], original: string[]): Flickr {
    return new Flickr(small, original)
  }

  getSmall(): string[] {
    return this.small
  }

  getOriginal(): string[] {
    return this.original
  }
}
