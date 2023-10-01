import { Either, left, right } from "@/shared"
import { LaunchData, LaunchRepository, UseCase } from "@/use-cases/ports"

export class GetNextLaunch implements UseCase {
  private readonly launchRepository: LaunchRepository

  constructor(launchRepository: LaunchRepository) {
    this.launchRepository = launchRepository
  }

  public async perform(): Promise<Either<Error, LaunchData>> {
    const nextLaunch = await this.launchRepository.getNextLaunch()

    if (!nextLaunch) {
      return left(new Error("No launch found"))
    }

    return right(nextLaunch)
  }
}
