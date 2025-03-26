import express from "express";
import { router } from "./routes/routes";
import path from 'path';
const config = JSON.parse(await Bun.file(path.join(__dirname, 'config', 'config.json')).text());

const server = express()
    .use(express.json())
    .use('/api', router)
    .listen(config.PORT, () => { console.log(`escutando na porta ${config.PORT}`) });

