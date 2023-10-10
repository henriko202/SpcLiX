import * as dotenv from "dotenv"
import { Express } from "express"
import path from "path"
import swaggerUi from "swagger-ui-express"

import swaggerDocument from "./swagger.json"

dotenv.config({
  path: path.resolve(__dirname, "..", "..", ".env"),
})

if (process.env.ENVIRONMENT === "development") {
  swaggerDocument.servers[0].url = `${process.env.HOST}:${process.env.PORT}/api/v1`
} else {
  swaggerDocument.servers[0].url = `${process.env.HOST}/api/v1`
}

export default (app: Express): void => {
  app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))
}
