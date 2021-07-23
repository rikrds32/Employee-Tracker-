const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "employee_trackerDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as" + connection.threadId)
});

function startApplication() {
    inquirer.prompt({
        name: "option",
        type: "list",
        message: "Please select an option bellow",
        choice: [
            "view employees",
            "view roles",
            "view departments",
            "add employee",
            "add role",
            "add department"
        ]
    }).then(function (res) {
        if (res.option === "view employees") {

        }else if (res.option ==="view roles"){

        }else if (res.option ==="view departments"){
            
        }else if (res.option ==="add employee"){
            
        }else if (res.option ==="add role"){
            
        }else if (res.option ==="add department"){
            
        }
    })
};