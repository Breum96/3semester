function terningKast(){
    return new Promise(function(resolve){
        let randomNumber = Math.floor(Math.random()* 6 + 1);
        setTimeout(afslut, 200);
        function afslut(){
            resolve(randomNumber);
        }

    })
}


function die() {
    return new Promise((res, rej) => {

    })
}

//math.floor(2000) *1

function toEnsTerninger(){
    let dice1 = terningKast()
    let dice2 = terningKast()

}


//lav disste opgave med et map






console.log(terningKast())

