import { makeSpaceXRepository } from "@/main/factories"
import { GetNextLaunchOperation, WebController } from "@/presentation/controllers"
import { GetNextLaunch } from "@/use-cases/get-next-launch"

export const makeLaunchController = (): WebController => {
  const launchRepository = makeSpaceXRepository()
  const usecase = new GetNextLaunch(launchRepository)
  const controller = new WebController(new GetNextLaunchOperation(usecase))
  return controller
}
