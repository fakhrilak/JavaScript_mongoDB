var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var query = { name: "Sensor Cahaya" };
  dbo.collection("customers").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log("Find() :",result);
    db.close();
  });
  dbo.collection("customers").findOne({_id:20},function(err,res){
      if (err){
          throw err;
      }
      console.log("FindOne(): ",res);
      db.close();
  })
});