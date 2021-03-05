const MongoClient = require("mongodb").MongoClient;
const ObjectID = require('mongodb').ObjectID;
const dbname = "crud_mongodb";
const url = "mongodb://localhost:27017";
const mongoOptions = {useNewUrlParser: true};

const state = {
    db: null
};

const connect = (cb) => {//connect method

    if(state.db)
        cb();
    else{
        MongoClient.connect(url, mongoOptions, (err, client)=> {
            if(err)
                cb(err);
            else{
                state.db = client.db(dbname);
                cb();
            }
        });
    }
}

const getPrimaryKey = (_id)=>{
    return ObjectID(_id);
}


//returns database connection
const getDB = ()=>{
    return state.db;
}

module.exports = {getDB, connect, getPrimaryKey};


/*GOT THIS WARNING WHEN CONNECTING TO PORT TO TEST
(node:716) DeprecationWarning: current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient constructor.
connected to database, app listening on p0rt 3000
NEED TO FIX THIS 
*/

/*https://www.youtube.com/watch?v=CyTWPr_WwdI*/ 
