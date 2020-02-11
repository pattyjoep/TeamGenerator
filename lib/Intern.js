const Employee = require("./Employee.js")

class Intern extends Employee {
    constructor(name, title, id, email, school) {
        super(name, title, id, email)
        this.school = school
    }

    getSchool() {
        return this.school
    }

    getRole() {
        return this.title
    }


}

module.exports = Intern