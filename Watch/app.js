const hourBox = document.querySelector('.hour')
const minuteBox = document.querySelector('.minute')
const secondBox = document.querySelector('.second')
const date = document.querySelector('.date')

function addZero(num) {
    if(num < 10) {
        return num = "0" + num
    }
    return num
}

function runWatch() {
    let time = new Date()
    // Watch
    let hour = time.getHours()
    let minute = time.getMinutes()
    let second = time.getSeconds()

    // Date
    let day = time.getDate()
    let month = time.getMonth()
    let year = time.getFullYear()
    
    hourBox.innerHTML = addZero(hour)
    minuteBox.innerHTML = addZero(minute)
    secondBox.innerHTML = addZero(second)

    date.innerHTML = addZero(day) + "/" + addZero(month + 1) + "/"+ addZero(year)
}

setInterval(() => runWatch(), 1000)