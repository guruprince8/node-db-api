//require('dotenv').config();
// https://github.com/oracle/node-oracledb/blob/main/examples/example.js
// https://www.oracle.com/webfolder/technetwork/tutorials/obe/cloud/apaas/node/node-employee-service/node-employee-service.html
// https://www.oracle.com/in/database/technologies/instant-client/linux-x86-64-downloads.html
const oracledb = require('oracledb');
const dbconfig = require('./dbconfig');
const express = require('express');
const app = express();
const port = 3000;
let connection;
//console.log(process.env);
// console.log(process.platform + ' ' + process.env.HOME + " " + process.env.PORT + " " + process.env);
try {
    oracledb.initOracleClient({ libDir: 'D:\\guru\\node\\instantclient_19_17' });
    //console.log(oracledb);
} catch (err) {
    console.error('Whoops!');
    console.error(err);
    process.exit(1);
}
function getDBConnection() {
    ;
    //console.log("After connection"+connection);
    //console.log(connection);
}
// getDBConnection();
app.get('/', (req, res) => {
    oracledb.getConnection(dbconfig, function (err, connection) {
        console.log(connection);
        if (err) {
            console.error(err.message);
            res.status(500).send("Error connecting to DB");
            return;
        } else {
            let sql = `SELECT * FROM system.sample`;
            let bind = {};
            let options = {
                outFormat: oracledb.OUT_FORMAT_OBJECT,
            };
            let result;

            result = connection.execute(sql, bind, options,function(err,result){
                if(err){
                    console.error(err.message);
                    response.status(500).send("Error getting data from DB");
                } else {
                    res.send(JSON.stringify(result));
                }
            });

            
        }
    });

});
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
