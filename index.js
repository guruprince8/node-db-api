//require('dotenv').config();
// https://github.com/oracle/node-oracledb/blob/main/examples/example.js
// https://www.oracle.com/webfolder/technetwork/tutorials/obe/cloud/apaas/node/node-employee-service/node-employee-service.html
// https://www.oracle.com/in/database/technologies/instant-client/linux-x86-64-downloads.html
// acle-instantclient19.18-basic-19.18.0.0.0-1.x86_64.rpm
// https://node-oracledb.readthedocs.io/en/latest/api_manual/pool.html
// https://github.com/oracle/node-oracledb/blob/main/examples/webapp.js
const express = require('express');
const app = express();
const port = 3000;

const dbconfig = require('./dbconfig');
const oracledb = require('oracledb');
const initOracleClient = require('./initoraclient');
initOracleClient();

const empservices = require('./employee');

async function init() {
    try {
        await oracledb.createPool(dbconfig);
        app.use('/employee',empservices);
        app.listen(port,()=> {
            console.log(`Example app listening on port ${port}`);
        })
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}
init();