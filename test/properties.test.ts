describe("PROPERTIES", () => {

    class Customer {
        readonly id: number;
        name: string;
        age?: number

        constructor(id: number, name: string) {
            this.id = id
            this.name = name
        }

    }
    it("should can have properties", () => {

        const customer = new Customer(1, "Dewa")
        customer.age = 27

        console.info(customer)
    })
})