import { WebController } from "@/presentation/controllers"
import { HealthCheckOperation } from "@/presentation/controllers/health-check"
import { HealthCheck } from "@/use-cases/health-check"

export const makeHealthCheckController = (): WebController => {
  const usecase = new HealthCheck()
  const controller = new WebController(new HealthCheckOperation(usecase))
  return controller
}
