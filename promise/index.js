const posts = [
    { title: "post One", body: "this is post one" },
    { title: "post two", body: "this is post one" }
]

function createpost(post) {
    return new Promise((resove, reject) => {
        setTimeout(function () {
            posts.push(post);
            const error = false

            if (!error) {
                resove()
            } else {
                reject()
            }
        }, 2000)
    })
}


function getpost() {

    setTimeout(function () {
        let output = ""
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`
        })
        document.body.innerHTML = output

    }, 2000)
}

createpost({ title: "post One", body: "this is post three" })
    .then(getpost)
    .catch(function (error) {
        console.log(error)
    })


