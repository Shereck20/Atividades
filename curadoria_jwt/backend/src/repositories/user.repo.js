const db = require("../config/db");

async function findByEmail(email) {
  const { rows } = await db.query("SELECT * FROM users WHERE email = $1", [email]);
  return rows[0];
}

async function createUser(name, email, password_hash) {
  const { rows } = await db.query(
    "INSERT INTO users (name, email, password_hash) VALUES ($1, $2, $3) RETURNING id",
    [name, email, password_hash]
  );
  return rows[0].id;
}

async function findById(id) {
  const { rows } = await db.query(
    "SELECT id, name, email, created_at FROM users WHERE id = $1",
    [id]
  );
  return rows[0];
}

// Lista todos os usuários sem retornar hashes de senha.
async function findAll() {
  const { rows } = await db.query(
    "SELECT id, name, email, created_at FROM users ORDER BY id"
  );
  return rows;
}

module.exports = { findByEmail, createUser, findById, findAll };
