export class InvalidUUIDError extends Error {
  public readonly name = "InvalidUUIDError"
  constructor(uuid: string) {
    super("Invalid UUID: " + uuid)
  }
}
