import { NextFunction, Request, Response } from "express"

export const cors = (req: Request, res: Response, next: NextFunction) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "GET")
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type")
  next()
}
