const init = () => {
    fetch('movies-ids.json')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            getFilms(data);
        })
        .catch((error) => {
            console.error('Error fetching movies:', error);
        });
};

const getFilms = (data) => {
    data.forEach((id) => {
        fetch(`films/movie-${id.id}.json`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((filmData) => {
                createFilmElement(filmData);
            })
            .catch((error) => {
                console.error('Error fetching film data:', error);
            });
    });
};



const createFilmElement = (film) => {
    const filmList = document.getElementById('film-list')
    const filmElement = document.createElement('div')
    filmList.append(filmElement)
    const titleElement = document.createElement('h2')
    titleElement.textContent = `Title: ${film.title}`
    filmElement.append(titleElement)

    const ratingElement = document.createElement('h3')
    ratingElement.textContent = `${film.ratings.avg}/10 `
    filmElement.append(ratingElement)

    const ratingsCount = document.createElement('span')
    ratingsCount.textContent = film.ratings.count >= 1000000 ? `${film.ratings.count} m` : `${film.ratings.count} k`
    ratingElement.append(ratingsCount)

    const releaseDateElement = document.createElement('h3')
    releaseDateElement.textContent = film.releaseDate
    filmElement.append(releaseDateElement)

    const shortDescriptionElement = document.createElement('p')
    shortDescriptionElement.textContent = film.shortDescription
    filmElement.append(shortDescriptionElement)

    const genresTitle = document.createElement('h3')
    genresTitle.textContent = 'Genres'
    const genresList = document.createElement('ul')
    filmElement.append(genresList)
    genresList.before(genresTitle)
    constructData(film.genres, genresList)

    const directorsTitle = document.createElement('h3')
    directorsTitle.textContent = 'Directors'
    const directorsList = document.createElement('ul')
    filmElement.append(directorsList)
    directorsList.before(directorsTitle)
    constructData(film.directors, directorsList)

    const actorsTitle = document.createElement('h3')
    actorsTitle.textContent = 'Actors'
    const mainActorsList = document.createElement('ul')
    filmElement.append(mainActorsList)
    mainActorsList.before(actorsTitle)
    constructData(film.mainActors, mainActorsList)
}
const constructData = (data, element) => {
    data.map((item) => {
        const itemElement = document.createElement('li')
        itemElement.textContent = item
        element.append(itemElement)
    })
}
init()

// const createFilmList = (data) => {
//     const filmList = document.getElementById('film-list')
//
//     data.map((film) => {
//         const filmElement = document.createElement('div')
//         filmList.append(filmElement)
//         const titleElement = document.createElement('h2')
//         titleElement.textContent = `Title: ${film.title}`
//         filmElement.append(titleElement)
//
//         const ratingElement = document.createElement('h3')
//         ratingElement.textContent = `${film.ratings.avg}/10 `
//         filmElement.append(ratingElement)
//
//         const ratingsCount = document.createElement('span')
//         ratingsCount.textContent = film.ratings.count >= 1000000 ? `${film.ratings.count} m` : `${film.ratings.count} k`
//         ratingElement.append(ratingsCount)
//
//         const releaseDateElement = document.createElement('h3')
//         releaseDateElement.textContent = film.releaseDate
//         filmElement.append(releaseDateElement)
//
//         const shortDescriptionElement = document.createElement('p')
//         shortDescriptionElement.textContent = film.shortDescription
//         filmElement.append(shortDescriptionElement)
//
//         const genresTitle = document.createElement('h3')
//         genresTitle.textContent = 'Genres'
//         const genresList = document.createElement('ul')
//         filmElement.append(genresList)
//         genresList.before(genresTitle)
//         constructData(film.genres, genresList)
//
//         const directorsTitle = document.createElement('h3')
//         directorsTitle.textContent = 'Directors'
//         const directorsList = document.createElement('ul')
//         filmElement.append(directorsList)
//         directorsList.before(directorsTitle)
//         constructData(film.directors, directorsList)
//
//         const actorsTitle = document.createElement('h3')
//         actorsTitle.textContent = 'Actors'
//         const mainActorsList = document.createElement('ul')
//         filmElement.append(mainActorsList)
//         mainActorsList.before(actorsTitle)
//         constructData(film.mainActors, mainActorsList)
//     })
// }
