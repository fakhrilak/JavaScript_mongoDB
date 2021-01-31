const mongo = require("mongodb")
const url =  "mongodb://localhost:27017"

mongo.connect(url,(err,db)=>{
    if (err){
        throw err;
    }
    var dbo = db.db("mydb");
    var json = [{_id:21,name:"Sensor Suhu",value:34}]
    dbo.collection("customers").insertMany(json,(err,res)=>{
        if (err){
            throw err;
        }
        
        console.log(`${json.length} documents insert`)
        db.close();
    })
})