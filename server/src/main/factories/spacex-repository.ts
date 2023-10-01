import { SpaceXApiRepository } from "@/external/repositories/space-x-api-repository"
import { LaunchRepository } from "@/use-cases/ports"

export const makeSpaceXRepository = (): LaunchRepository => {
  return new SpaceXApiRepository()
}
