import { LaunchData, LaunchDataSchema, LaunchRepository } from "@/use-cases/ports"
import axios from "axios"

export class SpaceXApiRepository implements LaunchRepository {
  async getNextLaunch(): Promise<LaunchData> {
    const { data } = await axios.get<LaunchData>("https://api.spacexdata.com/v5/launches/next")

    const retLaunchDataSchema = LaunchDataSchema.validateSync(data, {
      stripUnknown: true,
    })

    return retLaunchDataSchema
  }

  async getLatestLaunch(): Promise<LaunchData> {
    const { data } = await axios.get<LaunchData>("https://api.spacexdata.com/v5/launches/latest")

    const retLaunchDataSchema = LaunchDataSchema.validateSync(data, {
      stripUnknown: true,
    })

    return retLaunchDataSchema
  }
}
