import server from './config/server.mjs';
import dotenv from 'dotenv';
import dbConnect, {db} from "./config/database.mjs";
dotenv.config();
const PORT = process.env.PORT
const MONGODB_URL = process.env.MONGODB_URL
dbConnect(MONGODB_URL);





server.listen( PORT ).on( 'error', ( err ) => {
    console.log( '✘ Application failed to start' );
    console.error( '✘', err.message );
} ).on( 'listening', () => {
    console.log( `✔ Application Started at PORT : ${PORT} ` );
} );