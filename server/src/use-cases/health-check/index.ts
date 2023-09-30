import { UseCase } from "@/use-cases/ports"
import { GenericStatusResponse } from "@/use-cases/ports/health-check"

export class HealthCheck implements UseCase {
  async perform(): Promise<GenericStatusResponse> {
    return Promise.resolve({
      status: "ok",
    })
  }
}
