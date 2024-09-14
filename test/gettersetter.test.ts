describe("GETTER SETTER TYPESCRIPT", () => {

    class Category {
        _name?: string

        get name(): string {
            if(this._name){
                return this._name
            } else {
                return "empty"
            }
        }

        set name(value: string) {
            if(value !== ""){
                this._name = value
            }
        }
    }

    it("should getter setter in typescript", () => {
        const category = new Category()

        console.info(category.name)

        category.name = "Dewa"
        console.info(category.name)
    })
})