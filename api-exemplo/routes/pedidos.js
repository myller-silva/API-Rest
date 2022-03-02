const express = require('express');
const router = express.Router();


// retrona todos os pedido
router.get("/", (req, res, next)=>{
  res.status(200).send({
    mensagem: "Retorna os pedidos"
  });
});

// insere um pedido
router.post("/", (req, res, next)=>{
  const pedido = {
    id_produto: req.body.id_produto,
    quantidade: req.body.quantidade
  }
  res.status(201).send({
    mensagem: "O pedido foi criado",
    pedidoCriado: pedido
  });
});

// retorna os dados de um pedido
router.get("/:id_pedido", (req, res, next)=>{
  const id = req.params.id_pedido;  
  res.status(200).send({
    mensagem:"Detalhes do pedido",
    id_pedido: id
  }); 
});

// // altera um pedido
// router.patch("/", (req, res, next)=>{
//   res.status(201).send({
//     mensagem:"usando patch dentro da rota de pedido"
//   })
// })

// deleta um pedido
router.delete("/", (req, res, next)=>{
  res.status(201).send({
    mensagem: "Pedido excluído"
  })
})


module.exports = router;
