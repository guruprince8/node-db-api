module.exports = {
    user : process.env.NODE_ORACLEDB_USER || "system",
    password: process.env.NODE_ORACLEDB_PASSWORD || "oracle",
    connectString:process.env.NODE_ORACLEDB_CONNECTSTRING || "guru-rhel8.local:1539/ORCL",
    externalAuth  : process.env.NODE_ORACLEDB_EXTERNALAUTH ? true : false,
    poolAlias : "hr"
}