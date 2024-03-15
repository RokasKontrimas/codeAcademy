let counter = document.getElementById('counter')


let incrementElement = document.createElement('button')

incrementElement.textContent = '+';
incrementElement.id = 'increment'

let decrementElement = document.createElement('button')
decrementElement.textContent = '-'
decrementElement.id = 'decrement'

let resetElement = document.createElement('button')
resetElement.textContent = 'reset';
resetElement.id = 'reset';

let incrementElement2 = document.createElement('button')

incrementElement2.textContent = '+2';
incrementElement2.id = 'increment2'

let decrementElement2 = document.createElement('button')
decrementElement2.textContent = '-2'
decrementElement2.id = 'decrement2'

counter.before(incrementElement)
counter.after(decrementElement)
decrementElement.after(resetElement)
incrementElement.before(incrementElement2)
decrementElement.after(decrementElement2)

let increment = document.getElementById('increment')
let decrement = document.getElementById('decrement')
let resetAll = document.getElementById('reset')
let increment2 = document.getElementById('increment2')
let decrement2 = document.getElementById('decrement2')
let currentValue = 0;


let changeColors = (counterValue, isReset) => {
    if (isReset) {
        counter.removeAttribute('style')
    } else if (counterValue > 5) {
        counter.style.color = 'green'
        counter.style.fontSize = '20px'
        counter.style.fontWeight = 'bold'
    } else {
        counter.style.color = 'red'
        counter.style.fontSize = '24px'
        counter.style.fontWeight = 'bold'
    }

}

let updateCounter = (counterValue) => {
    console.log(counterValue)
    changeColors(counterValue)
    counter.textContent = counterValue

    if (counterValue > 9) {
        increment.setAttribute('disabled', true)
        increment2.setAttribute('disabled', true)
    } else {
        increment.removeAttribute('disabled')
        increment2.removeAttribute('disabled')

    }
    if (counterValue <= 0) {
        decrement.setAttribute('disabled', true)
        decrement2.setAttribute('disabled', true)
    } else {
        decrement.removeAttribute('disabled')
        decrement2.removeAttribute('disabled')

    }
}
updateCounter(currentValue);

increment.addEventListener('click', () => {
    currentValue++
    updateCounter(currentValue)
    changeColors(currentValue)

})
decrement.addEventListener('click', () => {
    console.log(currentValue)
    currentValue--
    updateCounter(currentValue)
})

increment2.addEventListener('click', () => {
    currentValue = currentValue + 2
    updateCounter(currentValue)
    changeColors(currentValue)

})
decrement2.addEventListener('click', () => {
    currentValue = currentValue - 2
    updateCounter(currentValue)
})
resetAll.addEventListener('click', () => {
    currentValue = 0;
    let isReset = true;
    updateCounter(currentValue)
    changeColors(currentValue, isReset)
})

