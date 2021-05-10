
function getData() {
    fetch("../javascripts/json/index.json").then( function (res) {
        console.log(res)
        if (res.ok) {
            res.json().then( function (data) {
                console.log(data)
            })
        } else {
            console.log('Looks error')
        }
    },function (err) {
        console.log(err)
    })
}

