import { barbeariaService } from "../service/barbeariaService.js";

export const barbeariaController = {
    async findBYCliente(req, res) {
        try {
            const clientes = await barbeariaService.findBYCliente();
            res.json(clientes);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async createBarbeiro(req, res) {
        try {
            const barbeiro = req.body;
            const newBarbeiro = await barbeariaService.createBarbeiro(barbeiro);
            res.status(201).json(newBarbeiro);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
}