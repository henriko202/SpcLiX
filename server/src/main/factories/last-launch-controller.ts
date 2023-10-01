import { makeSpaceXRepository } from "@/main/factories"
import { GetLatestLaunchOperation, WebController } from "@/presentation/controllers"
import { GetNextLaunch } from "@/use-cases/get-next-launch"

export const makeLatestLaunchController = (): WebController => {
  const launchRepository = makeSpaceXRepository()
  const usecase = new GetNextLaunch(launchRepository)
  const controller = new WebController(new GetLatestLaunchOperation(usecase))
  return controller
}
