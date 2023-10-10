export class Failure {
  constructor(
    private readonly time: number,
    private readonly altitude: number,
    private readonly reason: string
  ) {
    Object.freeze(this)
  }

  public static create(time: number, altitude: number, reason: string): Failure {
    return new Failure(time, altitude, reason)
  }

  get getTime(): number {
    return this.time
  }

  get getAltitude(): number {
    return this.altitude
  }

  get getReason(): string {
    return this.reason
  }
}
