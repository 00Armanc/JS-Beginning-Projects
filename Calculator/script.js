const numberButtons = document.querySelectorAll('.number')
const operationButtons = document.querySelectorAll('.operation')
const resultButton = document.querySelector('.result')

const curNum = document.querySelector('.currentNum')
const deleteButton = document.querySelector('.deleteButton')
const clearButton = document.querySelector('.clear')
let operations = ["+", "÷", "x", "-"]

const addNum = (e) => {
    curNum.innerHTML += e.target.innerHTML
}
const addOp = (e) => {
    let inputVal = curNum.innerHTML
    let lastChar = inputVal[inputVal.length - 1]
    if(operations.indexOf(lastChar) > -1 || lastChar == '.'){
        return
    }
    
    curNum.innerHTML += e.target.innerHTML

}
const showResult = () => {
    curNum.innerHTML = curNum.innerHTML.replace(/x/g, '*').replace(/÷/g, '/');
    curNum.innerHTML = eval(curNum.innerHTML)
}
const delNumber = () => {
    curNum.innerHTML = curNum.innerHTML.toString().slice(0, -1)
}
const clrNumber = () => {
    curNum.innerHTML = ""
}


numberButtons.forEach(btn => btn.addEventListener('click', addNum))
operationButtons.forEach(btn => btn.addEventListener('click', addOp))
resultButton.addEventListener('click', showResult)
deleteButton.addEventListener('click', delNumber)
clearButton.addEventListener('click', clrNumber)

