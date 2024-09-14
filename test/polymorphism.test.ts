describe('POLYMORPHISM', () => { 

    class Employee {
        constructor(public name: string){

        }

    }

    class Manager extends Employee {

    }

    class VicePresident extends Manager {

    }

    function sayHello(employee: Employee): void {
        if(employee instanceof VicePresident){
            const vp = employee as VicePresident
            console.info(`Hello Vice Precident ${vp.name}`)
        }else if (employee instanceof Manager){
            const manager = employee as Manager
            console.info(`Hello manger ${manager.name}`)
        } else {
            console.info(`Hello employee ${employee.name}`)
        }
    }

    function sayHelloWrong(employee: Employee): void {
        if (employee instanceof Manager){
            const manager = employee as Manager
            console.info(`Hello manger ${manager.name}`)
        }else if(employee instanceof VicePresident){
            const vp = employee as VicePresident
            console.info(`Hello Vice Precident ${vp.name}`)
        } else {
            console.info(`Hello employee ${employee.name}`)
        }
    }

    it("should support", () => {
        let employee = new Employee("Dewa")
        console.info(employee)

        employee = new Manager("Dewa")
        console.info(employee)

        employee = new VicePresident("Dewa")
        console.info(employee)
    })

    it("should support", () => {
        sayHello(new Employee("Dewa"))
        sayHello(new Manager("Devi"))
        sayHello(new VicePresident("Devan"))
    })

    it("should wrong", () => {
        sayHelloWrong(new Employee("Dewa"))
        sayHelloWrong(new Manager("Devi"))
        sayHelloWrong(new VicePresident("Devan"))
    })
 })