import { LaunchData } from "global"

import Carousel from "./components/Carousel"
import Header from "./components/Header"
import RocketCard from "./components/RocketCard"

async function getLaunch(url: string): Promise<LaunchData> {
  if (!process.env.HOST) throw new Error("HOST not defined")
  const res = await fetch(`${process.env.HOST}/${url}`)

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

async function getLaunches(url: string): Promise<LaunchData[]> {
  if (!process.env.HOST) throw new Error("HOST not defined")
  const res = await fetch(`${process.env.HOST}/${url}`)

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

export default async function Home() {
  const nextLaunchdata = await getLaunch("api/v1/launches/next")
  const latestLaunchdata = await getLaunch("api/v1/launches/latest")
  const upcomingLaunchdata = await getLaunches("api/v1/launches/upcoming")
  const pastLaunchdata = await getLaunches("api/v1/launches/past")

  return (
    <main className="">
      <Header />
      <h2 className="text-3xl text-center pt-[70px]" id="next-launch">
        Próximo Lançamento
      </h2>
      <div className="flex justify-center">
        <RocketCard {...nextLaunchdata} />
      </div>
      <h2 className="text-3xl text-center pt-[70px]" id="last-launch">
        Último Lançamento
      </h2>
      <div className="flex justify-center">
        <RocketCard {...latestLaunchdata} />
      </div>
      <h2 className="text-3xl text-center pt-[70px]" id="next-launches">
        Próximos Lançamentos
      </h2>
      <Carousel {...upcomingLaunchdata} />
      <h2 className="text-3xl text-center pt-[70px]" id="past-launches">
        Lançamentos passados
      </h2>
      <Carousel {...pastLaunchdata} />
    </main>
  )
}
