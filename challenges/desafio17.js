db.resumeProdutos.insertOne({
  franquia: "McDonalds",
  totalProdutos: db.produtos.countDocuments({}),
});

db.resumeProdutos.find({}, { franquia: 1, totalProdutos: 1, _id: 0 });
