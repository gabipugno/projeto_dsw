const express = require('express');
const cors = require('cors');
const app = express();

const Home = require('./models/Home');
const MsgContact = require('./models/MsgContact');
const Cadastrar = require('./models/Cadastrar');
const User = require('./models/User');

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
    app.use(cors());
    next();
});

app.get('/', async(req, res) => {

    await Cadastrar.findOne({
        attributes: ['name', 'email', 'ponto','endereco', 'imagem']
    })
        .then((datahome) => {
            return res.json({
                erro: false,
                datahome
            });
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Nenhum valor encontrado para a página home!"
            });
        });

});

app.get('/cadastrar', async(req, res) => {

    await Cadastrar.findOne({
        attributes: ['name', 'email', 'email','ponto', 'endereco', 'imagem']
    })
        .then((dataForm) => {
            return res.json({
                erro: false,
                dataForm
            });
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Nenhum valor encontrado para a página home!"
            });
        });

});


app.post('/add-home', async (req, res) => {

    const dataHome = await Home.findOne();

    if(dataHome){
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Não cadastrado com sucesso, a página home possui um registro!"
        });
    }

    await Home.create(req.body)
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Dados para página home cadastrado com sucesso!"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Dados para página home não cadastrado com sucesso!"
        });
    });
    
});

app.post("/add-msg-contact", async (req, res) => {
    //console.log(req.body);

    await MsgContact.create(req.body)
    .then((msgContact) => {
        return res.json({
            erro: false,
            id: msgContact.id,
            mensagem: "Mensagem de contato enviando com sucesso!"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Mensagem de contato não envianda com sucesso!"
        });
    });   
    
});

app.post("/cadastrar", async (req, res) => {
    //console.log(req.body);

    await Cadastrar.create(req.body)
    .then((cadastrar) => {
        return res.json({
            erro: false,
            id: cadastrar.id,
            mensagem: "Ponto turístico cadastrado com sucesso!"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Não foi possível cadastrar o ponto turístico!"
        });
    });   
    
});

app.post("/user", async (req, res) => {
    //console.log(req.body);

    await User.create(req.body)
    .then((user) => {
        return res.json({
            erro: false,
            id: user.id,
            mensagem: "Cadastro realizado com sucesso!"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Não foi possível realizar o cadastro!"
        });
    });   
    
});



app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});