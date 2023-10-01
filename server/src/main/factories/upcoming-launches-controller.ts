import { makeSpaceXRepository } from "@/main/factories"
import { GetUpcomingLaunchesOperation, WebController } from "@/presentation/controllers"
import { GetUpcomingLaunches } from "@/use-cases/get-upcoming-launches"

export const makeUpcomingLaunchesController = (): WebController => {
  const launchRepository = makeSpaceXRepository()
  const usecase = new GetUpcomingLaunches(launchRepository)
  const controller = new WebController(new GetUpcomingLaunchesOperation(usecase))
  return controller
}
