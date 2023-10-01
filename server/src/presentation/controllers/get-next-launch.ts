import { ControllerOperation, HttpResponse } from "@/presentation/controllers/ports"
import { notFound, ok } from "@/presentation/controllers/util"
import { Either } from "@/shared"
import { LaunchData, UseCase } from "@/use-cases/ports"

export class GetNextLaunchOperation implements ControllerOperation {
  private useCase: UseCase

  constructor(useCase: UseCase) {
    this.useCase = useCase
  }

  async specificOp(): Promise<HttpResponse> {
    const useCaseResponse: Either<Error, LaunchData> = await this.useCase.perform()

    if (useCaseResponse.isRight()) {
      return ok(useCaseResponse.value)
    }

    return notFound(useCaseResponse.value)
  }
}
