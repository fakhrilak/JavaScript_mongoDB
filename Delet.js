var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").find().toArray((err,obj)=>{
    if (err){
      throw err;
    }

    for(var i = 0; i < obj.length ; i++){
      dbo.collection("customers").deleteOne(obj[i], function(err, obj) {
        if (err) throw err;
        console.log(obj, "Deleted");
      });
    }

    db.close();
  })
  // dbo.collection("customers").deleteOne(myquery, function(err, obj) {
  //   if (err) throw err;
  //   console.log(obj, "Deleted");
  //   db.close();
  // });
});