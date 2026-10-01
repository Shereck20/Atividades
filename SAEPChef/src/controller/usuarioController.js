import { usuarioRepository } from "../repository/usuarioRepository.js";

export const usuarioController = {
    async getByLogin(req, res){
        try {
            const {email, senha} = req.query;
            if(!email){
                return res.status(400).json({erro:'Email vazio'})
            }
            if(!senha){
                return res.status(400).json({erro:'Senha vazia'})
            }
            const usuario = await usuarioRepository.getByLogin(req.body);
            if(!usuario){
                return res.status(404).json({erro:'Usuario não encontrado ou dados incorretos'})
            }
            else{
                return res.status(200).json({id: usuario.id, nome: usuario.nome, email: usuario.email})
            }
        } catch (error) {
            
        }
    }
}