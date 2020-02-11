const Employee = require("./Employee.js")

class Engineer extends Employee {
    constructor(name, title, id, email, github) {
        super(name, title, id, email)
        this.github = github
    }


    getGit() {
        return this.github
    }

    getRole() {
        return "Engineer"
    }


}


module.exports = Engineer