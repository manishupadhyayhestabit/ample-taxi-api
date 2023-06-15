import express from 'express';
import cors from "cors";
import helmet from "helmet";
const server = express();
server.use(express.urlencoded({extended: false}));
server.use(express.json());
const corsOptions = {
    'origin': '*'
};
server.use( helmet() );
server.use( cors( corsOptions ) );
export default server;
