 class Bike{
    #model
    #price

    constructor(model, price) {
        this.#model = model
        this.#price = price
    }


     get model() {
         return this.#model;
     }

     get price() {
         return this.#price;
     }

     #Validate(){
        if (!this.#model)
     }

 }