const os = require("os");
const dbconfig = { };
if(process.env.NODE_ORACLEDB_USER)
    dbconfig.user = process.env.NODE_ORACLEDB_USER;
else
    dbconfig.user = "system";

if(process.env.NODE_ORACLEDB_PASSWORD)
    dbconfig.password = process.env.NODE_ORACLEDB_PASSWORD;
else
    dbconfig.password = "oracle";

if(process.env.NODE_ORACLEDB_CONNECTSTRING)
    dbconfig.connectString = process.env.NODE_ORACLEDB_CONNECTSTRING;
else {
    if(os.hostname().toUpperCase() == "DESKTOP-RSB512B")
        dbconfig.connectString = "guru-rhel8.local:1539/ORCL";
    else
    dbconfig.connectString = "localhost:1539/ORCL";
}

if(process.env.NODE_ORACLEDB_EXTERNALAUTH)
    dbconfig.externalAuth = true;
else
    dbconfig.externalAuth = false;

dbconfig.poolAlias = "hr";

module.exports = dbconfig;