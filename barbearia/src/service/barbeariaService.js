import {barbeariaRepository} from "../repositories/barbeariaRepoditory.js";

export const barbeariaService = {
    async findBYCliente() {
        return await barbeariaRepository.findBYCliente();
    },
    async createBarbeiro(barbeiro) {
        return await barbeariaRepository.create(barbeiro);
    }
}