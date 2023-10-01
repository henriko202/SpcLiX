import { Core } from "./core"
import { Crew } from "./crew"
import { Failure } from "./failure"
import { Fairings } from "./fairings"
import { Links } from "./links"

export class Launch {
  private constructor(
    private readonly flight_number: number,
    private readonly name: string,
    private readonly date_utc: string,
    private readonly date_unix: number,
    private readonly date_local: string,
    private readonly date_precision: "half" | "quarter" | "year" | "month" | "day" | "hour",
    private readonly static_fire_date_utc: string | null,
    private readonly static_fire_date_unix: number | null,
    private readonly tdb: boolean,
    private readonly net: boolean,
    private readonly window: number | null,
    private readonly rocket: string | null,
    private readonly success: boolean | null,
    private readonly failures: Failure[],
    private readonly upcoming: boolean,
    private readonly details: string | null,
    private readonly fairings: Fairings,
    private readonly crew: Crew[],
    private readonly ships: string[],
    private readonly capsules: string[],
    private readonly payloads: string[],
    private readonly launchpad: string | null,
    private readonly cores: Core[],
    private readonly links: Links,
    private readonly auto_update: boolean
  ) {
    Object.freeze(this)
  }

  public static create(
    flight_number: number,
    name: string,
    date_utc: string,
    date_unix: number,
    date_local: string,
    date_precision: "half" | "quarter" | "year" | "month" | "day" | "hour",
    static_fire_date_utc: string | null,
    static_fire_date_unix: number | null,
    tdb: boolean,
    net: boolean,
    window: number | null,
    rocket: string | null,
    success: boolean | null,
    failures: Failure[],
    upcoming: boolean,
    details: string | null,
    fairings: Fairings,
    crew: Crew[],
    ships: string[],
    capsules: string[],
    payloads: string[],
    launchpad: string | null,
    cores: Core[],
    links: Links,
    auto_update: boolean
  ): Launch {
    return new Launch(
      flight_number,
      name,
      date_utc,
      date_unix,
      date_local,
      date_precision,
      static_fire_date_utc,
      static_fire_date_unix,
      tdb,
      net,
      window,
      rocket,
      success,
      failures,
      upcoming,
      details,
      fairings,
      crew,
      ships,
      capsules,
      payloads,
      launchpad,
      cores,
      links,
      auto_update
    )
  }

  public getFlightNumber(): number {
    return this.flight_number
  }

  public getName(): string {
    return this.name
  }

  public getDateUtc(): string {
    return this.date_utc
  }

  public getDateUnix(): number {
    return this.date_unix
  }

  public getDateLocal(): string {
    return this.date_local
  }

  public getDatePrecision(): "half" | "quarter" | "year" | "month" | "day" | "hour" {
    return this.date_precision
  }

  public getStaticFireDateUtc(): string | null {
    return this.static_fire_date_utc
  }

  public getStaticFireDateUnix(): number | null {
    return this.static_fire_date_unix
  }

  public getTdb(): boolean {
    return this.tdb
  }

  public getNet(): boolean {
    return this.net
  }

  public getWindow(): number | null {
    return this.window
  }

  public getRocket(): string | null {
    return this.rocket
  }

  public getSuccess(): boolean | null {
    return this.success
  }

  public getFailures(): Failure[] {
    return this.failures
  }

  public getUpcoming(): boolean {
    return this.upcoming
  }

  public getDetails(): string | null {
    return this.details
  }

  public getFairings(): Fairings {
    return this.fairings
  }

  public getCrew(): Crew[] {
    return this.crew
  }

  public getShips(): string[] {
    return this.ships
  }

  public getCapsules(): string[] {
    return this.capsules
  }

  public getPayloads(): string[] {
    return this.payloads
  }

  public getLaunchpad(): string | null {
    return this.launchpad
  }

  public getCores(): Core[] {
    return this.cores
  }

  public getLinks(): Links {
    return this.links
  }

  public getAutoUpdate(): boolean {
    return this.auto_update
  }
}
