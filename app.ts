import express  from 'express';
import taskRouter from './src/routes/TaskRoutes.js';
import cors, { type CorsOptions } from "cors";

const app = express()
app.use(express.json())
const port = 3005
const corsOptions: CorsOptions = {origin:true}
app.use(cors(corsOptions));

app.use("/" , taskRouter)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
