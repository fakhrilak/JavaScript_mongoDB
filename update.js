var mongo  = require("mongodb")
var url =  "mongodb://127.0.0.1:27017"

mongo.connect(url,(err,db)=>{
    if(err){
        throw err;
    }
    var dba = db.db("mydb");
    var query = {name:"Sensor Suhu"}
    dba.collection("customers").find(query).toArray((err,obj)=>{
        if(err){
            throw err
        }
        for(var i = 0; i < obj.length;i++){
            console.log(obj[i].value)
            var update = { $set: {value : obj[i].value / 3} };
            dba.collection("customers").updateOne(obj[i],
                update,(err,obj)=>{
                    if(err){
                        throw err
                    }
                    console.log(obj)
                })
        }
        db.close()
    })
})