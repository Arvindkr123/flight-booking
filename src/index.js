import express from "express"

import apiRoutes from "./routes/index.js";
import allConfig from "./config/index.js";

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api", apiRoutes)


app.listen(allConfig.serverConfig.PORT, () => {
    console.log('server listening on http://localhost:' + allConfig.serverConfig.PORT)
    allConfig.Logger.info('Successfully started server', {});
})