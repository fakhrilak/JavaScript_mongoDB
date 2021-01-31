const mongo =  require("mongodb")
const url = "mongodb://localhost:27017/"


mongo.connect(url,(err,db)=>{
    if (err){
        throw err;
    }
    var dbo = db.db("mydb")
    dbo.collection("customers").find({},(err,result)=>{
        if (err){
            throw err;
        }
        console.log(result.name)
        db.close()
    })
})