const dbconfig = require('./dbconfig');
const oracledb = require('oracledb');
oracledb.createPool(dbconfig);
const orapool = {

};
module.exports = orapool;