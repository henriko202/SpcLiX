import { makeSpaceXRepository } from "@/main/factories"
import { GetLatestLaunchOperation, WebController } from "@/presentation/controllers"
import { GetLatestLaunch } from "@/use-cases/get-latest-launch"

export const makeLatestLaunchController = (): WebController => {
  const launchRepository = makeSpaceXRepository()
  const usecase = new GetLatestLaunch(launchRepository)
  const controller = new WebController(new GetLatestLaunchOperation(usecase))
  return controller
}
