describe('INSTACE OF', () => {
    class Employee {}
    class Manager {}

    const dewa = new Employee
    const devi = new Manager

    it("should support", () => {
        console.info(typeof dewa)
        console.info(typeof devi)
    })

    it("should support instace of", () => {
        expect(dewa instanceof Employee).toBe(true)
        expect(dewa instanceof Manager).toBe(false)

        expect(devi instanceof Employee).toBe(false)
        expect(devi instanceof Manager).toBe(true)
    })
 })