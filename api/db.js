const mysql = require('mysql');

class Database{
    constructor(){
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '15082015kaure',
            database: 'user'
        })
    }

    connect(){
        this.connection.connect((err) => {
            if(err){
                console.error('Erro ao conectar o banco de dados: ', err)
                return;
            }
            console.log('Conexão estabelecida com o bando de dados')
        })
    }
}

module.exports = Database;