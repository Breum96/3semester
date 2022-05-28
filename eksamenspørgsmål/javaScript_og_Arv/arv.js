 class Bike{
    #model
    #price
    static totalAntal = 0
    static samletPris = 0

    constructor(model, price) {
        this.#model = model
        this.#price = price
        this.#validate()
        Bike.totalAntal++
        Bike.samletPris += price
    }


    get totalAntal(){
        return this.totalAntal
    }

    get samletPris(){
        return this.samletPris
    }


     get model() {
         return this.#model;
     }

     get price() {
         return this.#price;
     }

     #validate(){
        if (!this.#ValidateModel()){
            throw new Error("MODEL INVALID")
        }
        if (!this.#validatePrice()){
            throw new Error("PRICE INVALID")
        }
     }

     #ValidateModel(){
        return this.#model && typeof this.#model === 'string'
     }

     #validatePrice(){
        return this.#price && typeof this.#price === 'number'
     }

     toString(){
        return this.#model + " " + this.#price
     }


 }

 class ElBike extends Bike{
    #distance


     constructor(model, price, distance) {
         super(model, price);
         this.#distance = distance;
         this.#ValidateDistance()
     }

     get model() {
         return super.model;
     }

     get price() {
         return super.price;
     }

     get distance(){
        return this.#distance
     }

     toString() {
         return super.toString();
     }

     #ValidateDistance(){
        if (typeof this.#distance !== 'number'){
            throw new Error("DISTANCE INVALID")
        }
     }
 }

 let gammelcykel = new Bike("13", 203)
 let nyCykel = new Bike("12", 2000)
 let trehjulet = new Bike("1a", 400)

 const bikes = [gammelcykel,nyCykel,trehjulet]

 console.log(bikes.toString())



