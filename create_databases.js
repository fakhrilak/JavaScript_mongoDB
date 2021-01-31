const mongo  = require('mongodb');
const url = "mongodb://localhost:27017/mydb"; //use *dbname;

mongo.connect(url,(err,db)=>{
    if (err){
        throw err
    }
    console.log("Databases Created!");
    db.close();
})