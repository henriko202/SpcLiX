import { makeSpaceXRepository } from "@/main/factories"
import { GetPastLaunchesOperation, WebController } from "@/presentation/controllers"
import { GetPastLaunches } from "@/use-cases/get-past-launches"

export const makePastLaunchesController = (): WebController => {
  const launchRepository = makeSpaceXRepository()
  const usecase = new GetPastLaunches(launchRepository)
  const controller = new WebController(new GetPastLaunchesOperation(usecase))
  return controller
}
