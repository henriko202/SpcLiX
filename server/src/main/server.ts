import * as dotenv from "dotenv"
import "module-alias/register"
import path from "path"

import app from "./config/app"

dotenv.config({
  path: path.resolve(__dirname, "..", ".env"),
})

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000

app.listen(port, () => {
  console.log(`🚀 Server listening at localhost:${port}`)
})
