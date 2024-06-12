import mongoose from "mongoose";

const HOST_DB = "mongodb://localhost:27017"
const NAME_DB = "bd_socialnet"

const connection = async() => {
    try {
        await mongoose.connect(`${HOST_DB}/${NAME_DB}`)
        console.log(`Conectado correctamente a la BD: ${NAME_DB}`);
    } catch (error) {
        console.log(error);
        throw new Error(`No se pudo conectar a la base de datos: ${error}`)
    }
}

export default connection