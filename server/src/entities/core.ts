export class Core {
  constructor(
    private readonly core: string | null,
    private readonly flight: number | null,
    private readonly gridfins: boolean | null,
    private readonly legs: boolean | null,
    private readonly reused: boolean | null,
    private readonly landing_attempt: boolean | null,
    private readonly landing_success: boolean | null,
    private readonly landing_type: string | null,
    private readonly landpad: string | null
  ) {
    Object.freeze(this)
  }

  public static create(
    core: string | null,
    flight: number | null,
    gridfins: boolean | null,
    legs: boolean | null,
    reused: boolean | null,
    landing_attempt: boolean | null,
    landing_success: boolean | null,
    landing_type: string | null,
    landpad: string | null
  ): Core {
    return new Core(core, flight, gridfins, legs, reused, landing_attempt, landing_success, landing_type, landpad)
  }

  getCore(): string | null {
    return this.core
  }

  getFlight(): number | null {
    return this.flight
  }

  getGridfins(): boolean | null {
    return this.gridfins
  }

  getLegs(): boolean | null {
    return this.legs
  }

  getReused(): boolean | null {
    return this.reused
  }

  getLanding_attempt(): boolean | null {
    return this.landing_attempt
  }

  getLanding_success(): boolean | null {
    return this.landing_success
  }

  getLanding_type(): string | null {
    return this.landing_type
  }

  getLandpad(): string | null {
    return this.landpad
  }
}
