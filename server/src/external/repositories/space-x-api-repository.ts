import { LaunchDataDTO, LaunchDataSchema, LaunchRepository } from "@/use-cases/ports"
import axios from "axios"

export class SpaceXApiRepository implements LaunchRepository {
  async getNextLaunch(): Promise<LaunchDataDTO> {
    const { data } = await axios.get<LaunchDataDTO>("https://api.spacexdata.com/v5/launches/next")

    const retLaunchDataSchema = LaunchDataSchema.validateSync(data, {
      stripUnknown: true,
    })

    return retLaunchDataSchema
  }

  async getLatestLaunch(): Promise<LaunchDataDTO> {
    const { data } = await axios.get<LaunchDataDTO>("https://api.spacexdata.com/v5/launches/latest")

    const retLaunchDataSchema = LaunchDataSchema.validateSync(data, {
      stripUnknown: true,
    })

    return retLaunchDataSchema
  }
}
