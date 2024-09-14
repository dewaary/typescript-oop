describe("PROPERTIES", () => {

    class Customer {
        readonly id: number;
        name: string;
        age?: number

        constructor(id: number, name: string) {
            this.id = id
            this.name = name
        }

        sayHello(name: string): void{
            console.info(`Hello ${name} my name is ${this.name}`)
        }

    }
    it("should can have properties", () => {

        const customer = new Customer(1, "Dewa")
        customer.age = 27

        console.info(customer)
    })

    it("should can call method", () => {
        const customer = new Customer(1, "Devi")
        customer.sayHello("Dewa")
    })
})