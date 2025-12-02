import express, { response } from "express"
import cors from "cors"
import mysql from "mysql2"
import { people } from "./people.js"

const app = express()
const port = 3333

app.use(cors())
app.use(express.json())

app.post("/Cadastrar",(request,response) =>{
   const {name,email,age,password} = request.body.user


const incerCommand = `
INSERT INTO
`

   console.log(
    `
    Nome: ${name},
    Email: ${email},
    Idade: ${age},
    Senha : ${password}
    `
   )


   response.status(201).json({message: "Usuário cadatrado com sucesso!"})
})

app.get("/", (request, response) => {
    response.json(people)
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})

mysql.createPool({
    database: "web_02mc",
    host: "benserverplex.ddns.net",
    user:"alunos",
    password:"senhaAlunos",
    connectionLimit:10
})