const mainDiv = document.getElementById('main-div')
const loadButton = document.createElement('button')
const jokeParagraph = document.createElement('p')
const jokeForm = document.querySelector('#joke-form')
const categorySelect = document.createElement('select')
categorySelect.setAttribute('name', "category")
const submitForm = document.createElement('button')
const searchInput = jokeForm.querySelector('#search-joke')
searchInput.addEventListener('input', (e) => {
    searchInput.value = e.target.value
})
submitForm.type = 'submit';
submitForm.textContent = 'Get a joke'
jokeForm.append(submitForm)
jokeForm.append(categorySelect)

mainDiv.append(loadButton)
mainDiv.append(jokeForm)

loadButton.textContent = 'Get Chuck Norris joke'
loadButton.addEventListener('click', () => {
    getRandomJoke(mainDiv, jokeParagraph)
})
jokeForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const form = e.target.elements;
    const search = form['search-joke'].value;
    if (!search) {
        const category = form.category.value;
        generateJokeWithCategory(category)
    } else {
        getJokeBySearch(search)
    }

})
const getRandomJoke = (bodyElement, jokeParagraph) => {
    fetch('https://api.chucknorris.io/jokes/random').then((res) => {
        return res.json()
    }).then((data) => {
        bodyElement.appendChild(jokeParagraph)
        jokeParagraph.textContent = data.value
    })
}
const createSelectOptions = (categorySelect, data) => {

    data.forEach((category) => {
        const optionElement = document.createElement('option')
        categorySelect.append(optionElement)
        optionElement.value = category
        optionElement.textContent = category
    })
}

const getCategories = () => {
    fetch('https://api.chucknorris.io/jokes/categories').then((res) => {
        return res.json()
    }).then((data) => {
        createSelectOptions(categorySelect, data)
    })
}
const generateJokeWithCategory = (category) => {

    fetch(`https://api.chucknorris.io/jokes/random?category=${category}`).then((res) => {
        return res.json()
    }).then((data) => {
        jokeParagraph.textContent = data.value
    })
}
getCategories()


const getJokeBySearch = (input) => {
    fetch(`https://api.chucknorris.io/jokes/search?query=${input}`).then((res) => {
        return res.json()
    }).then((data) => {
        const randomNumber = Math.floor(Math.random() * data.total) + 1;
        console.log(randomNumber);
        jokeParagraph.textContent = data.result[randomNumber].value;
    })
}