// ref link - https://www.oracle.com/webfolder/technetwork/tutorials/obe/cloud/apaas/node/node-employee-service/node-employee-service.html
// express , oracle db and uuid imports
const express = require('express');
const oracledb = require('oracledb');
const { v4: uuidv4 } = require('uuid');
// emp router
const app = express();
const empservices = express.Router();

// emp services starting request handler
empservices.use((req, res, next) => {
    console.log("REQUEST:" + req.method + "   " + req.url);
    console.log("BODY:" + JSON.stringify(req.body));
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("x-service-trace-id", uuidv4());
    res.setHeader("Content-Type","application/json");                         
    next();
});

// fetch all employees
empservices.get('/v1/employee/all', (req, res) => {
    console.log(new Date() + " employee services - method " + req.url);
    oracledb.getConnection("hr", (err, connection) => {
        if (!err) {
            connection.execute("SELECT * FROM system.employee", [], { outFormat: oracledb.OBJECT }, (err, result) => {
                if (err) {
                    console.error(err.message);
                    response.status(500).send("Error getting data from DB");
                } else {
                    //console.log(new Date() + " employee services - method -response " + JSON.stringify(result));
                    let employees = [];
                    result.rows.forEach((employee) => {
                        employees.push(
                            {
                                id: employee.id,
                                firstName: employee.FIRSTNAME,
                                lastName: employee.LASTNAME,
                                email: employee.EMAIL,
                                phone: employee.PHONE,
                                bithDate: employee.BIRTHDATE,
                                title: employee.TITLE,
                                department: employee.DEPARTMENT
                            }
                        )
                    });
                    let empAllResponse = {
                        "employees": employees
                    };
                    res.status(200).send(empAllResponse);
                }
            });

        } else {
            response.status(500).send("Error connecting to DB");
        }
    });
});

// fetch employee based on emp id 
empservices.get("/v1/employee/:empId", (req, res) => {
    console.log(new Date() + " employee services - method " + req.url);
    oracledb.getConnection("hr", (err, connection) => {
        if (!err) {
            connection.execute("SELECT * FROM system.employee where id=:empId and rownum<=1", [req.params.empId], { outFormat: oracledb.OBJECT }, (err, result) => {
                if (err) {
                    console.error(err.message);
                    response.status(500).send("Error getting data from DB");
                } else {
                    //console.log(new Date() + " employee services - method -response " + JSON.stringify(result));
                    let employee = {};
                    result.rows.forEach((emp) => {
                        employee.id = emp.ID;
                        employee.firstName = emp.FIRSTNAME;
                        employee.lastName = emp.LASTNAME;
                        employee.email = emp.EMAIL;
                        employee.phone = emp.PHONE;
                        employee.bithDate = emp.BIRTHDATE;
                        employee.title = emp.TITLE;
                        employee.department = emp.DEPARTMENT;

                    });
                    res.status(200).send(employee);
                }
            });

        } else {
            response.status(500).send("Error connecting to DB");
        }
    });
});

// add new employee 
empservices.post("/v1/employee", (req, res) => {
    oracledb.getConnection("hr", (err, connection) => {
        if (!err) {
            connection.execute("INSERT INTO EMPLOYEE (ID, FIRSTNAME, LASTNAME, EMAIL, PHONE, BIRTHDATE, TITLE, DEPARTMENT)" +
                "VALUES(EMPLOYEE_SEQ.NEXTVAL, :firstName,:lastName,:email,:phone,:birthdate,:title,:department)",
                [req.body.firstName, req.body.lastName, req.body.email, req.body.phone, req.body.bithDate, req.body.title, req.body.department],
                { outFormat: oracledb.OBJECT,autoCommit: true },
                (err, result) => {
                    if (err) {
                        console.error(err.message);
                        response.status(500).send("Error getting data from DB");
                    } else {
                        res.status(200).send(JSON.stringify(result));
                    }
                });

        } else {
            response.status(500).send("Error connecting to DB");
        }
    });

});
module.exports = empservices;