const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;


router.get("/", (req, res, next)=>{
  res.status(200).send({
    mensagem: "Retorna todos os produtos"
  });
});


router.post("/", (req, res, next)=>{
  
  mysql.getConnection((error, conection)=>{
    conection.query(
      'INSERT INTO produtos (nome, preco) VALUES (?,?)',
      [req.body.nome, req.body.preco],
      (error, resultado, field)=>{
        conection.release(); //IMPORTANTE: nunca esquecer de fazer isso!!! isso é para liberar a coneccao

        if(error){
          return res.status(500).send({
            error: error,
            response: null
          });
        }
        res.status(201).send({
          mensagem: "Produto inserido com sucesso",
          id_produto: resultado.insertId
        })
      }
    )
  });
});


router.get("/:id_produto", (req, res, next)=>{
  const id = req.params.id_produto; 
  if(id==='especial'){
    res.status(200).send({
      mensagem:"Voce descobriu o ID especial",
      id: id
    });
  }else{
    res.status(200).send({
      mensagem: "voce passou um ID",
      id: id
    });
  };
});


router.patch("/", (req, res, next)=>{
  res.status(201).send({
    mensagem:"Produto alterado"
  })
})


router.delete("/", (req, res, next)=>{
  res.status(201).send({
    mensagem: "Produto deletado"
  })
})


module.exports = router;
