import { Either, left, right } from "@/shared"
import { LaunchDataDTO, LaunchRepository, UseCase } from "@/use-cases/ports"

export class GetLatestLaunch implements UseCase {
  private readonly launchRepository: LaunchRepository

  constructor(launchRepository: LaunchRepository) {
    this.launchRepository = launchRepository
  }

  public async perform(): Promise<Either<Error, LaunchDataDTO>> {
    const latestLaunch = await this.launchRepository.getLatestLaunch()

    if (!latestLaunch) {
      return left(new Error("No launch found"))
    }

    return right(latestLaunch)
  }
}
