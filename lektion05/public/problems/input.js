const input = document.getElementById("inp")
const divError = document.getElementById("error")


// opgave 1
input.oninput = (e) => {
    if (!check(e.target.value)){
        divError.innerHTML = "fejl"
    }else{
        divError.innerHTML = ""
    }
}

const check = (text) => {
    if (text.length < 3 || text.length > 10 || text.includes("@")){
        return false
    }else{
        return true;
    }
}


//------------------------------------------------//

// opgave 2

const input2 = document.getElementById("inp2")
const error2 = document.getElementById("error2")

input2.onblur = (e) => {
    if (!check(e.target.value)){
        error2.innerHTML = "fejl"
        input2.focus()
    }else{
        error2.innerHTML = ""

    }

}

//---------------------------------------------------------------//

// opgave 3

const username = document.getElementById("inpUserName")
const password = document.getElementById("inpPassword")
const email = document.getElementById("inpEmail")
const gender = document.getElementById("gender").children

const allgenderfields = document.querySelectorAll("input[name ='gender']")
for (let c of allgenderfields){
    console.log(c.value)
}




