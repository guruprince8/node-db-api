const oracledb = require('oracledb');
// initialize oracle client library
function initOracleClient() {
    try {
        if (process.platform == 'win32')
            oracledb.initOracleClient({ libDir: 'D:\\guru\\node\\instantclient_19_17' });
        else
            oracledb.initOracleClient({ libDir: '/usr/lib/oracle/19.18/client64/lib' });
        
    } catch (err) {
        console.error('Whoops!');
        console.error(err);
        process.exit(1);
    }
}

module.exports = initOracleClient;

