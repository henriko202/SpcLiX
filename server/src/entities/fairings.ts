export class Fairings {
  constructor(
    private readonly reused: boolean | null,
    private readonly recovery_attempt: boolean | null,
    private readonly recovered: boolean | null,
    private readonly ships: string[]
  ) {
    Object.freeze(this)
  }

  public static create(reused: boolean | null, recovery_attempt: boolean | null, recovered: boolean | null, ships: string[]): Fairings {
    return new Fairings(reused, recovery_attempt, recovered, ships)
  }

  get getReused(): boolean | null {
    return this.reused
  }

  get getRecovery_attempt(): boolean | null {
    return this.recovery_attempt
  }

  get getRecovered(): boolean | null {
    return this.recovered
  }

  get getShips(): string[] {
    return this.ships
  }
}
