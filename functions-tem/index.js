
// call back function

function userinput(call) {
    console.log("Lakshmi")
    const data = "lakshmi Saravanan"
    call(data)
}

userinput(fun2)

function fun2(data) {
    console.log(" hello " + data)
}


function sum(val, val2, display) {
    let out = val + val2
    display(out)
}

function display(out) {
    document.write("The value of sume is " + out)
}

sum(20, 20, display)


// ForEach
let data = ["Ram", "Sam", "Kumar", "Sathya", "Raj"];

data.forEach(display)

function display(item, index) {
    document.write(`<h2>${index}==${item}</h2>`)
}


//Map()


var data1 = [10, 25, 20, 30, 40, 50, 60]

var markoutput = data1.map((marks) => {
    var finalresult = marks >= 35 ? "PASS" : "FAIL"
    return finalresult
})
console.log(markoutput)

// call back function
let result = data1.map(displaymap)

document.write("call back function using map :::" + result)

function displaymap(items) {
    return items
}
document.write("<hr>")


// arrow function

let finaldata = data1.map((mapitem) => {
    return mapitem * 2
})

document.write("using map : " + finaldata)

document.write("<hr>")

//inline callback function
var inlinecall = data1.map(function (val) {
    return val + 100
})

document.write("using inline map : " + inlinecall)


