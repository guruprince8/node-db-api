const dbconfig = require('./dbconfig');
const oracledb = require('oracledb');

const OracleConnection = {
    connection : null,
    getNewConnection: async function() {
        this.connection = await oracledb.getConnection(dbconfig);
        console.log(this.connection);
    }
}
// async function OracleConnection () {
//     //let connection;
//     this.connection = await oracledb.getConnection(dbconfig);
//     console.log(this.connection);
// }

// class OracleConnection {
//     // method to get new connection or retrieve existing connection
//     static getSingletonConnection() {
//         if (!OracleConnection.instance) {
//             OracleConnection.instance = new OracleConnection();
//             oracledb.getConnection(dbconfig, (err, connection) => {
//                 console.log(connection);
//                 OracleConnection.instance.connection = connection;

//             });
//         } else {
//             console.log("else block");
//         }
//         return OracleConnection.instance;
//     }

// }
module.exports = OracleConnection;