const inquirer = require("inquirer")
const fs = require("fs")


const Employee = require("./lib/Employee.js")
const Manager = require("./lib/Manager.js")

const Employees = []



inquirer
   .prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter name",
        },

        {
            type: 'list',
            name: 'title',
            message: "Enter job title",
            choices: ["manager", "engineer", "intern"]
        },

        {
            type: 'list',
            name: 'title',
            message: "Enter job title",
            choices: ["manager", "engineer", "intern"]
        }

    ])
   
   .then(answers => {
    
        if (answers.title === "manager") {

            inquirer
                .prompt([

                    {
                        type: 'input',
                        name: 'phone',
                        message: "Enter phone",
                    },
                    {
                        type: 'input',
                        name: 'email',
                        message: "Enter email",
                    }
                    
                ])

                .then(answersMgr => {

                    


                })
           
        } else if (answers.title === "engineer") {

            inquirer
                .prompt([

                    {
                        type: 'input',
                        name: 'github',
                        message: "Enter github username",
                    }

                ])
            
                
            
            } else if (answers.title === "intern") {
            
                inquirer
                .prompt([

                    {
                        type: 'input',
                        name: 'school',
                        message: "Enter school",
                    }

                ])
    }
})