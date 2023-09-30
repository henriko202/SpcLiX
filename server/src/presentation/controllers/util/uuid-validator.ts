import { HttpRequest } from "@/presentation/controllers/ports"
import { Either, left, right } from "@/shared"
import { z } from "zod"

export const uuidValidator = (request: HttpRequest): Either<Error, string> => {
  const paramsSchema = z.object({
    id: z.string().uuid(),
  })

  if (!request.params.id) {
    return left(new Error("Missing UUID in request params"))
  }

  // If the request body does not match the schema, return a 400 error
  if (!paramsSchema.safeParse(request.params).success) {
    return left(new Error("Invalid UUID in request params"))
  }

  const { id } = paramsSchema.parse(request.params)

  return right(id)
}
