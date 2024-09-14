describe("Class", () => {

    class Customer {
        constructor(){
            console.info("Create new customer")
        }
    }

    class Order {

    }


    it("should create class", () => {
        const customer: Customer = new Customer()
        const order: Order = new Order()
    })

    it("sould can create constructor", () => {
        new Customer()
        new Customer()
    })
})