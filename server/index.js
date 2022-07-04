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

//Inserindo tabela tarefas
app.post("/register",(req,res)=>{
    const {nomeUsuario} = req.body;
    const {tarefa} = req.body;
    const {empresa} = req.body;
    const {comentario} = req.body;
    const {data} = req.body;
    const {tempotask} = req.body; 
    
    let sql = "INSERT INTO tarefas (nomeUsuario,tarefa,empresa,comentario,data,tempotask) VALUES (?,?,?,?,?,?)"

    db.query(sql,[nomeUsuario,tarefa,empresa,comentario,data,tempotask],(err,result)=>{
        console.log(err)
    })
})

//Inserindo tabela usuarios
app.post("/register2",(req,res)=>{
    const {userName} = req.body;
    const {userEmail} = req.body;
    const {userSenha} = req.body;
    const {userConfirmeSenha} = req.body;
    const {userDepartamento} = req.body;
    const {userNivelAcesso} = req.body;       
    let sql2 = "INSERT INTO usuarios (nome,email,senha,confirmaSenha,departamento,nivelAcesso) VALUES (?,?,?,?,?,?)"
    db.query(sql2,[userName,userEmail,userSenha,userConfirmeSenha,userDepartamento,userNivelAcesso],(err,result)=>{
        console.log(err)
    })
})

//Pegando os dados dos usuario no banco
app.get("/getUsers", (req, res) =>{
    let sql = "SELECT * from usuarios"

    db.query(sql, (err, result) =>{
        if(err) console.log(err)
        else res.send(result)
    })
})




app.listen(3000,() =>{
    console.log("Servidor rodando")
})