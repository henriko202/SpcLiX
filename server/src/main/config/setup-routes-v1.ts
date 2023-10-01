import { adaptRoute } from "@/main/adapters"
import { makeHealthCheckController, makeLaunchController } from "@/main/factories"
import { Express, Router } from "express"

export default (app: Express): void => {
  const router = Router()
  app.use("/api/v1", router)
  router.get("/health-check", adaptRoute(makeHealthCheckController()))
  router.get("/launches/next", adaptRoute(makeLaunchController()))
}
