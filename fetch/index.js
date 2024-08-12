document.querySelector('.btn-1').addEventListener('click', createdata)

document.querySelector('.btn-2').addEventListener('click', getjson)

document.querySelector('.btn-3').addEventListener('click', getapi)
// function createdata() {
//     fetch('text.txt').then( =>(res) {
//         // console.log(res.text())
//     }).then(function (data) {
//         document.querySelector('#out-put').innerText = data
//     }).catch(function (error) {
//         console.log(error)
//     })
// }
// createdata()

function createdata() {
    fetch('text.txt')
        .then(res => res.text())
        .then(data => {
            document.querySelector('#output').innerHTML = data
        }).catch((error) => {
            document.querySelector('#output').innerHTML = error
        })
}

function getjson() {
    fetch('post.json')
        .then(res => res.json())
        .then(data => {
            let output = "";

            data.forEach(post => {
                output += `<li>${post.title}</li>`
            });
            document.querySelector('#output').innerHTML = output
        })
}


function getapi() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            let output = "";

            data.forEach(post => {
                output += `<li>${post.address.street}</li>`
            });
            document.querySelector('#output').innerHTML = output
        })
}



