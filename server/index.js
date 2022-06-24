const express =require("express")
const mysql = require("mysql2")
const cors = require("cors")
const app = express()

//conexao com o banco de dados
const db = mysql.createPool({
    host:"localhost",
    user: "root",
    password:"",
    database: "morfeu"

})

app.use(cors())
app.use(express.json())


// app.get("/", (req,res)=>{
//     let sql = "INSERT INTO usuarios (nome,email,senha,departamento,nivelAcesso) VALUES ('teste','teste','teste','teste','teste')"

//     db.query(sql,(err,result)=>{
//         console.log(err)
//     })
// })
app.get("/ControleAatividades", (req,res)=>{
    let sql = "INSERT INTO tarefas (nome,tarefa,empresa,comentario,data,tempotask) VALUES ('teste','teste','teste','teste','teste')"

    db.query(sql,(err,result)=>{
        console.log(err)
    })
})




app.listen(3000,() =>{
    console.log("Servidor rodando")
})