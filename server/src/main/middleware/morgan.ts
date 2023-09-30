import { Request, Response } from "express"
import moment from "moment-timezone"
import morgan from "morgan"

// Definindo o formato dos logs
morgan.token("date", (_req: Request, _res: Response, timezone: string | number | boolean | undefined) => {
  const zone = timezone?.toString() || "America/Sao_Paulo"
  return moment().tz(zone).format("DD/MM/YYYY HH:mm:ss:SSS")
})
morgan.format("GMTFormat", "[:date[America/Sao_Paulo]] :remote-addr :method :url [:status] :response-time ms - :res[content-length]")

export const logFormat = morgan("GMTFormat")
