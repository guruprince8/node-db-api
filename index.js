
const express = require('express');
const dbconfig = require('./dbconfig');
const oracledb = require('oracledb');
const initOracleClient = require('./initoraclient');

const app = express();
app.use(express.json());
const port = 3000;
initOracleClient();

const empservices = require('./employee');

async function init() {
    try {
        await oracledb.createPool(dbconfig);
        app.use('/employee-services',empservices);
        app.listen(port,()=> {
            console.log(`Example app listening on port ${port}`);
        })
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}
init();