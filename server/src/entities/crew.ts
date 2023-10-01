export class Crew {
  constructor(
    private readonly crew: string | null,
    private readonly role: string | null
  ) {
    Object.freeze(this)
  }

  public static create(crew: string | null, role: string | null): Crew {
    return new Crew(crew, role)
  }

  get getCrew(): string | null {
    return this.crew
  }

  get getRole(): string | null {
    return this.role
  }
}
