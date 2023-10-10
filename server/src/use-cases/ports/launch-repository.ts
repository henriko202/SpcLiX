import { LaunchDataDTO } from "./launch-data"

export interface LaunchRepository {
  getNextLaunch(): Promise<LaunchDataDTO>
  getLatestLaunch(): Promise<LaunchDataDTO>
  getUpcomingLaunches(): Promise<LaunchDataDTO[] | null>
  getPastLaunches(): Promise<LaunchDataDTO[] | null>
}
