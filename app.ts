import express  from 'express';
import taskRouter from './src/routes/TaskRoutes.js';
import cors from "cors";

const app = express()
app.use(express.json())
const port = 3005
app.use(cors());
app.use("/" , taskRouter)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
