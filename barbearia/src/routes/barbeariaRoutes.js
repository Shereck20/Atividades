import { barbeariaController } from "../controllers/barbeariaController.js";
import { Router } from "express";

const router = Router();
router.get("/agendamento/:agendamento_id", barbeariaController.findBYCliente);
router.get("/barbeiro/:barbeiro_id", barbeariaController.createBarbeiro);
router.get("/servico/:servico_id", barbeariaController.findBYServico);