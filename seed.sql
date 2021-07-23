USE employee_trackerDB;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ruperto", "Flores", 1, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ruperta", "Smith", 2, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Rupertino", "Sanders", 3, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Lionel", "Messi", 4, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jose", "Spears", 5, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Daniella", "Chavez", 6, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Juan", "Harrison", 7, NULL);

INSERT INTO role (title, salary, department_id)
VALUES ("Finance", 55000, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Sales", 35000, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Engineer", 95000, 3);

INSERT INTO department (name)
VALUES ("Finance");

INSERT INTO department (name)
VALUES ("Sales");

INSERT INTO department (name)
VALUES ("Engineer");