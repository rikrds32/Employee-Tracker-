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
    startApplication();
});

function startApplication() {
    inquirer.prompt({
        name: "option",
        type: "list",
        message: "Please select an option bellow",
        choices: [
            "view employees",
            "view roles",
            "view departments",
            "add employee",
            "add role",
            "add department"
        ]
    }).then(function (res) {
        if (res.option === "view employees") {
            findEmployees();
        }else if (res.option ==="view roles"){

        }else if (res.option ==="view departments"){
            
        }else if (res.option ==="add employee"){
            
        }else if (res.option ==="add role"){
            
        }else if (res.option ==="add department"){
            
        }
    })
};

function findEmployees(){
    const request = "SELECT employee.id, first_name, last_name, title, salary FROM employee AS employee LEFT JOIN role AS role ON employee.role_id = role.id;";
    connection.query(request, function(err, res){
        console.table(res)
    })

}