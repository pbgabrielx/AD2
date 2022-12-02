const { inserir } = require('../controllers/FuncController');
const db = require('../db');

module.exports = {
    buscarTodos: ()=>{
        return new Promise((aceito,rejeitado)=>{
            db.query('SELECT * FROM func',(error, results)=>{
                if(error){rejeitado(error);return;}
                aceito(results);
            });
        });
    },

    buscarUm: (id)=>{
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM func WHERE ID = ?', [id], (error, results)=>{

                if(error){rejeitado(error);return;}
                if(results.length>0){
                    aceito(results[0]);
                }else{
                    aceito(false);
                }
            })
        })
    },

    inserir: (nome, funcao, salario)=>{
        return new Promise((aceito, rejeitado)=>{

            db.query('INSERT INTO func (nome, funcao, salario) VALUES( ?, ?, ?)',
             [nome, funcao, salario],
              (error, results)=>{

                if(error){rejeitado(error);return;}
                    aceito(results.insertId);
        
                }
              );
         });   
    },

    alterar: (id, nome, funcao, salario)=>{
        return new Promise((aceito, rejeitado)=>{

            db.query('UPDATE func SET nome= ?, funcao = ?, salario = ? WHERE id = ?',
             [nome, funcao, salario, id],
              (error, results)=>{

                if(error){rejeitado(error);return;}
                    aceito(results);
        
                }
              );
         });   
    },

    excluir: ()=>{
        return new Promise((aceito,rejeitado)=>{
            db.query('DELETE FROM func WHERE id =?',[id],(error, results)=>{
                if(error){rejeitado(error);return;}
                aceito(results);
            });
        });
    }


};