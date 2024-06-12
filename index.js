import connection from "./database/connection.js"
import express, { json, urlencoded } from "express"
import cors from "cors"

connection()

const app = express()
const puerto = 3900

app.use(cors())

app.use(json())
app.use(urlencoded({ extended: true }))

app.get('/test-route', (req, res) => {
    res.status(200).json({
        id: 1,
        name: 'A ver',
        username: 'veremos'
    })
})

app.listen(puerto, () => console.log(`Servidor en puerto ${puerto}`))