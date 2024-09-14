describe("INHERITENCE TYPESCRIPT", () => {

    class Employee {
        name: string

        constructor(name: string){
            this.name = name
        }
    }

    class Manager extends Employee {

    }

    class Director extends Manager {

    }

    it("should support", () => {

        const employee = new Employee("Dewa")
        console.info(employee.name)

        const manager = new Manager("Devi")
        console.info(manager.name)

        const director = new Director("Devan")
        console.info(director.name)

    })
})