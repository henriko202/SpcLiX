export type PatchData = {
  small: string | null
  large: string | null
}

export type LinksData = {
  patch: PatchData
  presskit: string | null
  webcast: string | null
  youtube_id: string | null
  article: string | null
  wikipedia: string | null
}

export type FailureData = {
  time: number
  altitude: number | null
  reason: string
}

export type CrewData = {
  crew: string | null
  role: string | null
}

export type CoreData = {
  core: string | null
  flight: number | null
  gridfins: boolean | null
  legs: boolean | null
  reused: boolean | null
  landing_attempt: boolean | null
  landing_success: boolean | null
  landing_type: string | null
  landpad: string | null
}

export type FairingsData = {
  reused: boolean | null
  recovery_attempt: boolean | null
  recovered: boolean | null
  ships: string[] | null
}

export type LaunchData = {
  flight_number: number
  name: string
  date_utc: string
  date_unix: number
  date_local: string
  date_precision: "half" | "quarter" | "year" | "month" | "day" | "hour"
  static_fire_date_utc: string | null
  static_fire_date_unix: number | null
  tdb: boolean
  net: boolean
  window: number | null
  rocket: string | null
  success: boolean | null
  failures: FailureData[] | null
  upcoming: boolean
  details: string | null
  fairings: FairingsData | null
  crew: CrewData[] | null
  ships: string[] | null
  capsules: string[] | null
  payloads: string[] | null
  launchpad: string | null
  cores: CoreData[] | null
  links: LinksData
  auto_update: boolean
}
