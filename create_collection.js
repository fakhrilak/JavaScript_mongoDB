var mongo = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

mongo.connect(url,(err,db)=>{
    if(err){
        throw err;
    }
    var dbo = db.db("mydb");
    dbo.createCollection("customer",()=>{
        if (err){
            throw err;
        }
        console.log("collection created!");
        db.close();
    })

})