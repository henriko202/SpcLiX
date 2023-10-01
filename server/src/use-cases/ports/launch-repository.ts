import { LaunchData } from "./launch-data"

export interface LaunchRepository {
  getNextLaunch(): Promise<LaunchData>
}
