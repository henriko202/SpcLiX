import { ControllerOperation, HttpResponse } from "@/presentation/controllers/ports"
import { ok } from "@/presentation/controllers/util"
import { UseCase } from "@/use-cases/ports"

export class HealthCheckOperation implements ControllerOperation {
  private useCase: UseCase

  readonly requiredParams = null

  constructor(useCase: UseCase) {
    this.useCase = useCase
  }

  async specificOp(): Promise<HttpResponse> {
    const response = await this.useCase.perform()
    return ok(response)
  }
}
