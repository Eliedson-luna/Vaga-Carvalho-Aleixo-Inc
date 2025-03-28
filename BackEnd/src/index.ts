import express from "express";
import { router } from "./routes/routes";
import path from 'path';
import cors from 'cors'
const config = JSON.parse(await Bun.file(path.join(__dirname, 'config', 'config.json')).text());

const Server = express()
    .use(express.json())
    .use(cors({
        origin: config.CORS.ORIGINS,
        methods: config.CORS.METHODS,
        allowedHeaders: config.CORS.HEADERS,
    }))
    .use('/api', router)


    .listen(config.SERVER.PORT, () => { console.log(`Listening on PORT: ${config.SERVER.PORT}`) })