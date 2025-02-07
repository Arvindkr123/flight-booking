import dotenv from "dotenv"
import path from "path"



dotenv.config({
    path: path.join(path.resolve(), '.env')
})

export const server_config = {
    PORT: process.env.PORT
}