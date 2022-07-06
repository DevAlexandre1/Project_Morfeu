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

//Alter  senha do usuário
app.put("/changepassword", (req,res)=>{
    
    const {usuarioLogado} = req.body;
    const {userNovaSenha} = req.body;
    let sql3 = "UPDATE usuarios SET senha = ? WHERE nome = ?"

    db.query(sql3,[userNovaSenha,usuarioLogado],(err, result)=>{
        if(err) console.log(err)
        else res.send(result)
    })   
})

//Pegando os dados dos usuarios no banco
app.get("/getUsers", (req, res) =>{
    let sql = "SELECT * from usuarios"

    db.query(sql, (err, result) =>{
        if(err) console.log(err)
        else res.send(result)
    })
})

//Dashboard geral do usuario corrente
app.get("/getTasks", (req,res) =>{
    let sql4 = "SELECT * from tarefas WHERE nomeUsuario = ?"

    db.query(sql4,[nomeUsuario],(err, result)=>{
        if(err) console.log(err)
        else res.send(result)    
    })
})


app.listen(3000,() =>{
    console.log("Servidor rodando")
})