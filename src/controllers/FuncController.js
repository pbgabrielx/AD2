const { json } = require('body-parser');
const FuncService = require('../services/FuncService');

module.exports ={
    buscarTodos: async (req,res)=>{
        let json={error:'',result:[]};

        let func = await FuncService.buscarTodos();

        for(let i in func){
            json.result.push({
                id: func[i].id,
                nome: func[i].nome
            });
        }res.json(json);
    },

    buscarUm: async(req, res)=>{
        let json={error:'',result:{}};

        let id = req.params.id;
        let func = await FuncService.buscarUm(id);

        if(func){
            json.result = func;
        }
        res.json(json);
    },

    inserir: async(req, res)=>{
        let json={error:'',result:{}};

        let nome = req.body.nome;
        let funcao = req.body.funcao;
        let salario = req.body.salario;
        

        if(nome && funcao && salario){
            let funcID = await FuncService.inserir(nome, funcao, salario);
            json.result = {
                id: funcID,
                nome,
                funcao,
                salario
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    alterar: async(req, res)=>{
        let json={error:'',result:{}};
        
        let id = req.params.id;
        let nome = req.body.nome;
        let funcao = req.body.funcao;
        let salario = req.body.salario;
        

        if(id && nome && funcao && salario){
           await FuncService.alterar(id, nome, funcao, salario);
            json.result = {
                id,
                nome,
                funcao,
                salario
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    excluir: async(req,res)=>{
        let json={error:'',result:{}};
        await FuncService.excluir(req.params.id);
        res.json(json);
    }



}
