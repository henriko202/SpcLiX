import { adaptRoute } from "@/main/adapters"
import { HealthCheckController } from "@/main/factories"
import { Express, Router } from "express"

export default (app: Express): void => {
  const router = Router()
  app.use("/api/v1", router)
  router.get("/health-check", adaptRoute(HealthCheckController()))
}
