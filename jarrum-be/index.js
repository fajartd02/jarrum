import express from "express"
import router from "./routes/index.js"

const app = express()

app.use(router)

app.listen(2000, () => {
  console.log("Server running at port 2000")
}) 