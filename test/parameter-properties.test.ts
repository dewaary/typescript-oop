describe("PARAMTER PROPERTIES", () => {
    class Person {
        constructor(public name: string){

        }
    }

    it("should support", () => {
        const person = new Person("Dewa")
        console.info(person.name)

        person.name = "Devi"
        console.info(person.name)
    })
})