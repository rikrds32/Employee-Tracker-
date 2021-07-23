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
        } else if (res.option === "view roles") {
            findRoles();
        } else if (res.option === "view departments") {
            findDepartments();
        } else if (res.option === "add employee") {
            newEmployee();
        } else if (res.option === "add role") {

        } else if (res.option === "add department") {

        }
    })
};

function findEmployees() {
    const request = "SELECT employee.id, first_name, last_name, title, salary FROM employee AS employee LEFT JOIN role AS role ON employee.role_id = role.id;";
    connection.query(request, function (err, res) {
        console.table(res)
    })

}

function findRoles() {
    const request = "SELECT role.id, title, salary, name AS department FROM role AS role LEFT JOIN department AS department ON role.department_id = department.id;";
    connection.query(request, function (err, res) {
        console.table(res)
    })

}

function findDepartments() {
    const request = "SELECT * FROM department;"
    connection.query(request, function (err, res) {
        console.table(res)
    })

}

function newEmployee() {
    inquirer.prompt([
        {
            name: "first",
            type: "input",
            message: "What is the new employee name?"
        },
        {
            name: "last",
            type: "input",
            message: "What is the new employee last name?"
        },
        {
            name: "position",
            type: "list",
            message: "What is the new employee position?",
            choices: [
                "Engineer",
                "Sales",
                "Finance"
            ]
        }
    ]).then(function (response){
        connection.query("SELECT * FROM role WHERE ?",{title: response.position},function(err, res){
            const id = res[0].id;
            connection.query("INSERT INTO employee SET ?",{ first_name: response.first, last_name: response.last, role_id: id},function(err){
                if(err) throw err;
                console.log("welcome new employee!")
            }
            )
        }
        )
    })
}