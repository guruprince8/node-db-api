const oracledb = require('oracledb');
const dbconfig = require('./dbconfig');
let connection;
try {
  oracledb.initOracleClient({libDir: 'D:\\guru\\node\\instantclient_19_17'});
  console.log(oracledb);
} catch (err) {
  console.error('Whoops!');
  console.error(err);
  process.exit(1);
}
async function getDBConnection() {
    connection = await oracledb.getConnection(dbconfig);
    console.log(connection);
}
getDBConnection();