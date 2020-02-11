const Employee = require("./Employee.js")

class Manager extends Employee {
    constructor(name, title, id, email, officeNumber) {
        super(name, title, id, email) 
        this.officeNumber = officeNumber
    }

    getPhone() {
        return this.officeNumber
    }


    getRole() {
        return "Manager"
    }



}

module.exports = Manager
