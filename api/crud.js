const db = require('./db.js')

class UserDAO{
    constructor(){
        this.db = new db();
    }

    addUser(req, res){
        const q = "INSERT INTO user `nome`, `email`, `password`) VALUES(?)";
    
        const values = [
            req.body.nome,
            req.body.email,
            req.body.password,
        ];

        this.db.query(q, [values], (err) => {
            if(err) return res.json(err);

            return res.status(200).json("Usuário inserido.");
        })
    }

    getUser(req, res){
        const userId = req.params.id;
        const q = "SELECT * FROM user WHERE id = ?";

        this.db.query(q, [userId], (err, results) => {
            if(err) return res.json(err);

            if(results.length === 0){
                return res.status(404).json("Usuáriuo não encontrado");
            }

            const user = results[0];
            return res.status(200).json(user);
        });
    }

    updateUser(req, res){
        const userId = req.params.id;
        const{ nome, email, password } = req.body;
        const q = "UPDATE user SET nome = ?, email = ?, password = ? WHERE id = ?"

        const values = [nome, email, password, userId];

        this.db.query(q, values, (err) => {
            if(err) return res.json(err);

            return res.status(200).json("Usuário atualizado");
        });
    }

    deleteUser(req, res) {
        const userId = req.params.id;
        const q = "DELETE FROM user WHERE id = ?";

        this.db.query(q, [userId], (err) => {
            if(err) return res.json(err) ;

            return res.status(200).json("Usuário deletado com sucesso.");
        });
    }
}

module.exports = UserDAO;