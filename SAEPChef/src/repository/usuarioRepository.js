import {query} from "../config/db.js";

export const usuarioRepository = {
   async getByLogin(email, senha){
    const sql = "SELECT * FROM usuarios WHERE email = $1 AND senha = $2";
    const res = await query(sql, [email, senha]);
    return res.rows[0];
   }

   
}