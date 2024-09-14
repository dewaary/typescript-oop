describe("METHOD OVERRIDING", () => {

    class Employee {
        name: string

        constructor(name: string){
            this.name = name
        }

        sayHello(name: string): void {
            console.info(`Hello ${name}, my name is ${this.name}`)
        }
    }

    class Manager extends Employee {
        sayHello(name: string): void {
            console.info(`Hello ${name}, my name is ${this.name}, i am manager`)
        }
    }

    it("should support", () => {
        const employee = new Employee("Dewa")
        employee.sayHello("Devi")

        const manager = new Manager("Devan")
        manager.sayHello("Devi")
    })
})