import * as yup from "yup"

const PatchDataSchema = yup.object().shape({
  small: yup.string().nullable(),
  large: yup.string().nullable(),
})

const LinksDataSchema = yup.object().shape({
  patch: PatchDataSchema,
  presskit: yup.string().nullable(),
  webcast: yup.string().nullable(),
  youtube_id: yup.string().nullable(),
  article: yup.string().nullable(),
  wikipedia: yup.string().nullable(),
})

const FailureDataSchema = yup.object().shape({
  time: yup.number().required(),
  altitude: yup.number().nullable(),
  reason: yup.string().required(),
})

const CrewDataSchema = yup.object().shape({
  crew: yup.string().nullable(),
  role: yup.string().nullable(),
})

const CoreDataSchema = yup.object().shape({
  core: yup.string().nullable(),
  flight: yup.number().nullable(),
  gridfins: yup.boolean().nullable(),
  legs: yup.boolean().nullable(),
  reused: yup.boolean().nullable(),
  landing_attempt: yup.boolean().nullable(),
  landing_success: yup.boolean().nullable(),
  landing_type: yup.string().nullable(),
  landpad: yup.string().nullable(),
})

const FairingsDataSchema = yup.object().shape({
  reused: yup.boolean().nullable(),
  recovery_attempt: yup.boolean().nullable(),
  recovered: yup.boolean().nullable(),
  ships: yup.array().of(yup.string()).nullable(),
})

export const LaunchDataSchema = yup.object().shape({
  flight_number: yup.number().required(),
  name: yup.string().required(),
  date_utc: yup.string().required(),
  date_unix: yup.number().required(),
  date_local: yup.string().required(),
  date_precision: yup.string().oneOf(["half", "quarter", "year", "month", "day", "hour"]).required(),
  static_fire_date_utc: yup.string().nullable(),
  static_fire_date_unix: yup.number().nullable(),
  tdb: yup.boolean().required().default(false),
  net: yup.boolean().required(),
  window: yup.number().nullable(),
  rocket: yup.string().nullable(),
  success: yup.boolean().nullable(),
  failures: yup.array().of(FailureDataSchema).nullable(),
  upcoming: yup.boolean().required(),
  details: yup.string().nullable(),
  fairings: FairingsDataSchema.nullable(),
  crew: yup.array().of(CrewDataSchema).nullable(),
  ships: yup.array().of(yup.string()).nullable(),
  capsules: yup.array().of(yup.string()).nullable(),
  payloads: yup.array().of(yup.string()).nullable(),
  launchpad: yup.string().nullable(),
  cores: yup.array().of(CoreDataSchema).nullable(),
  links: LinksDataSchema,
  auto_update: yup.boolean().required(),
})

export const LaunchDataArraySchema = yup.array().of(LaunchDataSchema)

export type LaunchDataDTO = yup.InferType<typeof LaunchDataSchema>
