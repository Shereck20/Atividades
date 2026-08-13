const pool = require('../db/connection');

async function listarAtividade() {
  const result = await pool.query(`
    SELECT 
      atividade.usuario_id,
      atividade.tipo,
      atividade.distancia_metros,
      atividade.duracao_minutos,
      atividade.tempo_preparo,
      atividade.co2_kg,
      atividade.data_iso,
    FROM atividade
    INNER JOIN usuarios ON usuario_id = id
  `);

  return result.rows;
}

async function resumoPedidos() {
  const result = await pool.query(`
    SELECT 
      COUNT(pedidos.id) AS total_pedidos,
      COALESCE(SUM(produtos.preco * pedidos.quantidade), 0) AS total_valor
    FROM pedidos
    INNER JOIN produtos ON produtos.id = pedidos.produto_id
  `);

  return result.rows[0];
}

async function criarPedido(produtoId, quantidade) {
  const result = await pool.query(
    `
    INSERT INTO pedidos (produto_id, quantidade)
    VALUES ($1, $2)
    RETURNING *
    `,
    [produtoId, quantidade]
  );

  return result.rows[0];
}

async function deletarAtividade(id) {
  await pool.query('DELETE FROM atividade WHERE id = $1', [id]);
}

module.exports = {
  listarAtividade,
  resumoPedidos,
  criarPedido,
  deletarAtividade
};

