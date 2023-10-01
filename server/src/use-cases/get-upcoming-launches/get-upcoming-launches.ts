import { Either, left, right } from "@/shared"
import { LaunchDataDTO, LaunchRepository, UseCase } from "@/use-cases/ports"

export class GetUpcomingLaunches implements UseCase {
  private readonly launchRepository: LaunchRepository

  constructor(launchRepository: LaunchRepository) {
    this.launchRepository = launchRepository
  }

  public async perform(): Promise<Either<Error, LaunchDataDTO[]>> {
    const upcomingLaunches = await this.launchRepository.getUpcomingLaunches()

    if (!upcomingLaunches) {
      return left(new Error("No launches found"))
    }

    return right(upcomingLaunches)
  }
}
