class Queue{
    #array
    #head
    #tail
    #listeners

    constructor(array) {
        this.#array = []
        this.#head = 0
        this.#tail = 0
        this.#listeners = []
    }

    enqueue(element) {
        if (element == undefined || null){
            throw new Error("Element is undefined or null")
        }
        this.#array[this.#tail] = element
        this.#tail++
        this.#listeners.forEach(l => Promise.resolve(l).then(listener => listener(element)))
    }

    dequeue(){
        if (this.#array.length === 0){
            throw new Error("The array is empty")
        }
        const removedElement = this.#array[this.#head]
        delete this.#array[this.#head]
        this.#head++
        return removedElement
    }

    addListener(listener){
        if (typeof listener !== 'function'){
            throw new Error("Not a function")
        }
        this.#listeners.push(listener)
    }

    removeListener(listener){
        if (typeof listener !== 'function'){
            throw new Error("Not a function")
        }
        const index = this.#listeners.indexOf(listener)
        if (index >= 0){
            this.#listeners.splice(index,1)
        }
    }

}

function listener1(element) {
    console.log("listener1", element)
}

function listener2(element) {
    console.log("listener2", element)
}

const queue = new Queue()
queue.addListener(listener1)
queue.addListener(listener2)
queue.enqueue(1)
queue.enqueue(2)
console.log("removing listener1")
queue.removeListener(listener1)
queue.enqueue(4)
queue.enqueue(5)