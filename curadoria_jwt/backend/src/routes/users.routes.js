const express = require("express");
const { me, listarUsuarios } = require("../controllers/users.controller");
const { authRequired } = require("../middlewares/auth.middleware");

const router = express.Router();

// Consulta o próprio usuário autenticado.
router.get("/me", authRequired, me);

// Lista os usuários cadastrados (somente campos públicos).
router.get("/", authRequired, listarUsuarios);

module.exports = router;
