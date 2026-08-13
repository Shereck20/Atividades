import { query } from "../config/db.js";

export const barbeariaRepository = {
    async findBYCliente(){
        const res = await query (" SELECT * FROM agendamento");
        return res.rows;
    },

    async findBYBarbeiro() {
        const res = await query("SELECT * FROM barbeiro");
        return res.rows;
    },

    async findBYServico() {
        const res = await query("SELECT * FROM servico");
        return res.rows;
    },
    async create(barbeiro){
        const res = await query(
            "INSERT INTO barbeiro (nome, especialidade) VALUES ($1, $2) RETURNING *",
            [barbeiro.nome, barbeiro.especialidade]
        );
        return res.rows[0];
    }
}