import setupMiddleware from "@/main/config/setup-middleware"
import setupRoutes_v1 from "@/main/config/setup-routes-v1"
import express from "express"

import setupSwagger from "./setup-swagger"

const app = express()

setupSwagger(app)
setupMiddleware(app)
setupRoutes_v1(app)

export default app
