import setupMiddleware from "@/main/config/setup-middleware"
import setupRoutes from "@/main/config/setup-routes"
import express, { NextFunction, Request, Response } from "express"

const app = express()

setupMiddleware(app)
setupRoutes(app)

// Error handler
// app.use(function (err: Error, req: Request, res: Response, next: NextFunction) {
//   res.status(400).json({ error: err.message })
// })

export default app
