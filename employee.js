// ref link - https://www.oracle.com/webfolder/technetwork/tutorials/obe/cloud/apaas/node/node-employee-service/node-employee-service.html
// express routers
const express = require('express');
const app = express();
const empservices = express.Router();
// oracle db configurations
const oracledb = require('oracledb');

// emp services request handler
empservices.use((req, res, next) => {
    console.log('Time: ' + new Date() + " employee router");
    next();
});

// fetch all employees
empservices.get('/all', (req, res) => {
    console.log(new Date() + " employee services - method " + req.url);
    oracledb.getConnection("hr", (err, connection) => {
        if (!err) {
            connection.execute("SELECT * FROM system.employee", [], { outFormat: oracledb.OBJECT }, (err, result) => {
                if (err) {
                    console.error(err.message);
                    response.status(500).send("Error getting data from DB");
                } else {
                    console.log(new Date() + " employee services - method -response " + JSON.stringify(result));
                    let employees = [];
                    result.rows.forEach((employee)=>{
                        employees.push(
                            {
                              id:employee.id,
                              firstName:employee.FIRSTNAME,
                              lastName:employee.LASTNAME,
                              email:employee.EMAIL,
                              phone:employee.PHONE,
                              bithDate:employee.BIRTHDATE,
                              title:employee.TITLE,
                              department:employee.DEPARTMENT   
                            }
                        )
                    });
                    res.setHeader("Content-Type","application/json");
                    let empresponse = {
                        "employees":employees
                    };
                    res.status(200).send(empresponse);
                }
            });

        } else {
            response.status(500).send("Error connecting to DB");
        }
    });
});

module.exports = empservices;