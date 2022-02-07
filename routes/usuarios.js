const express = require("express");
const router = express.Router();

const UsuariosController = require("../controllers/usuarios_controller");

router.post("/cadastro", UsuariosController.cadastroUsuario);
router.post("/login", UsuariosController.Login);

module.exports = router;
