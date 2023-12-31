import { bodyParser, contentType, cors, logFormat } from "@/main/middleware"
import { Express } from "express"

export default (app: Express): void => {
  app.use(bodyParser)
  app.use(cors)
  app.use(contentType)
  app.use(logFormat)
}
