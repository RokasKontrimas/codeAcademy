let primaryNewsObject = [{
    image: "https://codeacademy.lt/wp-content/uploads/2024/02/347376644_264133982758490_1171303248287627440_n-1536x1024.jpg",
    category: "Programavimas",
    title: "Vienas kvalifikacijos keitimo projektas valstybės biudžetui atneš 51 mln. papildomų eurų",
    date: "2024-02-01",
},
    {
        image: "https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg",
        category: "AI & Deep Learning",
        title: "Ar „ChatGPT“ užims mūsų darbo vietas?",
        date: "2023-01-27",
    }]

let secondaryNewsObject = [
    {
        image: "https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg",
        category: "AI & Deep Learning",
        title: "Ar „ChatGPT“ užims mūsų darbo vietas?",
        date: "2023-01-27",
    }, {
        image: "https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg",
        category: "AI & Deep Learning",
        title: "Ar „ChatGPT“ užims mūsų darbo vietas?",
        date: "2023-11-27",
    }, {
        image: "https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg",
        category: "AI & Deep Learning",
        title: "Ar „ChatGPT“ užims mūsų darbo vietas?",
        date: "2023-03-27",
    }, {
        image: "https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg",
        category: "AI & Deep Learning",
        title: "Ar „ChatGPT“ užims mūsų darbo vietas?",
        date: "2022-01-22",
    },
]

let body = document.querySelector('body')

let container = document.createElement('div')
body.appendChild(container)


container.classList.add('container')

let pageContent = document.createElement('div')
pageContent.classList.add('page-content')
container.appendChild(pageContent)

let mainContent = document.createElement('main')
mainContent.classList.add('main-content')
pageContent.appendChild(mainContent)

let newsSection = document.createElement('div')
newsSection.classList.add('news-section')
mainContent.appendChild(newsSection)

let pageTitle = document.createElement('h1')
pageTitle.textContent = "Naujienos";
pageTitle.classList.add('page-title')
newsSection.appendChild(pageTitle)

let primaryNewsList = document.createElement('div')
primaryNewsList.classList.add('primary-news-list')
newsSection.appendChild(primaryNewsList)

primaryNewsObject.map((news) => {

    let newsItem = document.createElement('div')
    newsItem.classList.add('news-item')
    primaryNewsList.appendChild(newsItem)

    let itemLink = document.createElement('a')
    itemLink.setAttribute('href', '#')
    newsItem.appendChild(itemLink)

    let newsImageWrapper = document.createElement('div')
    newsImageWrapper.classList.add('news-image-wrapper')
    itemLink.appendChild(newsImageWrapper)

    let newsImage = document.createElement('img')
    newsImage.setAttribute('src', news.image)
    newsImage.setAttribute('alt', news.title)
    newsImage.classList.add('news-image')
    newsImageWrapper.appendChild(newsImage)

    let newsContentWrapper = document.createElement('div')
    newsContentWrapper.classList.add('news-content-wrapper')
    itemLink.appendChild(newsContentWrapper)

    let newsCategory = document.createElement('span')
    newsCategory.textContent = news.category
    newsCategory.classList.add('news-category')
    newsContentWrapper.appendChild(newsCategory)

    let newsTitle = document.createElement('h2')
    newsTitle.textContent = news.title
    newsTitle.classList.add('news-title')
    newsContentWrapper.appendChild(newsTitle)

    let newsDate = document.createElement('span')
    newsDate.textContent = news.date
    newsDate.classList.add('news-date')
    newsContentWrapper.appendChild(newsDate)
})

let secondaryNewsList = document.createElement('div')
secondaryNewsList.classList.add('secondary-news-list')
newsSection.appendChild(secondaryNewsList)

secondaryNewsObject.map((news) => {

    let newsItem = document.createElement('div')
    newsItem.classList.add('news-item')
    secondaryNewsList.appendChild(newsItem)

    let itemLink = document.createElement('a')
    itemLink.setAttribute('href', '#')
    newsItem.appendChild(itemLink)

    let newsImageWrapper = document.createElement('div')
    newsImageWrapper.classList.add('news-image-wrapper')
    itemLink.appendChild(newsImageWrapper)

    let newsImage = document.createElement('img')
    newsImage.setAttribute('src', news.image)
    newsImage.setAttribute('alt', news.title)
    newsImage.classList.add('news-image')
    newsImageWrapper.appendChild(newsImage)

    let newsContentWrapper = document.createElement('div')
    newsContentWrapper.classList.add('news-content-wrapper')
    itemLink.appendChild(newsContentWrapper)

    let newsCategory = document.createElement('span')
    newsCategory.textContent = news.category
    newsCategory.classList.add('news-category')
    newsContentWrapper.appendChild(newsCategory)

    let newsTitle = document.createElement('h2')
    newsTitle.textContent = news.title
    newsTitle.classList.add('news-title')
    newsContentWrapper.appendChild(newsTitle)

    let newsDate = document.createElement('span')
    newsDate.textContent = news.date
    newsDate.classList.add('news-date')
    newsContentWrapper.appendChild(newsDate)
})
let allNewsButton = document.createElement('a')
allNewsButton.textContent = "Visos naujienos"
allNewsButton.setAttribute('href', '#')
allNewsButton.classList.add("large-button")
newsSection.appendChild(allNewsButton)

let videoSection = document.createElement('div')
videoSection.classList.add("video-section")
mainContent.appendChild(videoSection)

let sectionTitle1 = document.createElement('h2')
sectionTitle1.classList.add('section-title')
sectionTitle1.textContent = "Vaizdo įrašai"
videoSection.appendChild(sectionTitle1)

let primaryVideoWrapper = document.createElement('div')
primaryVideoWrapper.classList.add('primary-video-wrapper')
videoSection.appendChild(primaryVideoWrapper)

let videoWrapper1 = document.createElement('div')
videoWrapper1.classList.add('video-wrapper')
primaryVideoWrapper.appendChild(videoWrapper1)

let videoTitle1 = document.createElement('h3')
videoTitle1.classList.add('video-title')
videoTitle1.textContent = "#4 Ctrl+Alt+Defend: Kibernetinis saugumas šiandien"
videoWrapper1.appendChild(videoTitle1)
let videoIframe1 = document.createElement('iframe')
videoIframe1.setAttribute('width', "560")
videoIframe1.setAttribute('height', "315")
videoIframe1.setAttribute('src', "https://www.youtube.com/embed/yovsPjuDElw?si=W3TFXeDi_OAjbQ6O")
videoIframe1.setAttribute('title', "YouTube video player")
videoIframe1.setAttribute('frameborder', "0")
videoIframe1.setAttribute('allow', "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share")
videoIframe1.setAttribute('allowfullscreen', 'true')
videoWrapper1.appendChild(videoIframe1)

let secondaryVideoWrapper = document.createElement('div')
secondaryVideoWrapper.classList.add('secondary-video-wrapper')
videoSection.appendChild(secondaryVideoWrapper)

let videoWrapper2 = document.createElement('div')
videoWrapper2.classList.add('video-wrapper')
secondaryVideoWrapper.appendChild(videoWrapper2)

let videoTitle2 = document.createElement('h3')
videoTitle2.classList.add('video-title')
videoTitle2.textContent = "Susipažink su mūsų įdarbinimo partneriais – Danske Bank!"
videoWrapper2.appendChild(videoTitle2)
let videoIframe2 = document.createElement('iframe')
videoIframe2.setAttribute('width', "560")
videoIframe2.setAttribute('height', "315")
videoIframe2.setAttribute('src', "https://www.youtube.com/embed/yovsPjuDElw?si=W3TFXeDi_OAjbQ6O")
videoIframe2.setAttribute('title', "YouTube video player")
videoIframe2.setAttribute('frameborder', "0")
videoIframe2.setAttribute('allow', "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share")
videoIframe2.setAttribute('allowfullscreen', 'true')
videoWrapper2.appendChild(videoIframe2)

let videoWrapper3 = document.createElement('div')
videoWrapper3.classList.add('video-wrapper')
secondaryVideoWrapper.appendChild(videoWrapper3)

let videoTitle3 = document.createElement('h3')
videoTitle3.classList.add('video-title')
videoTitle3.textContent = "#3 Kaip atrodo Web Dizainerio (UX/UI) karjera?"
videoWrapper3.appendChild(videoTitle1)
let videoIframe3 = document.createElement('iframe')
videoIframe3.setAttribute('width', "560")
videoIframe3.setAttribute('height', "315")
videoIframe3.setAttribute('src', "https://www.youtube.com/embed/yovsPjuDElw?si=W3TFXeDi_OAjbQ6O")
videoIframe3.setAttribute('title', "YouTube video player")
videoIframe3.setAttribute('frameborder', "0")
videoIframe3.setAttribute('allow', "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share")
videoIframe3.setAttribute('allowfullscreen', 'true')
videoWrapper3.appendChild(videoIframe3)

let videoLargeButton = document.createElement('a')
videoLargeButton.textContent = "Visi vaizdo įrašai"
videoLargeButton.setAttribute('href', '#')
videoLargeButton.classList.add('large-button')

let sidebar = document.createElement('aside')
sidebar.classList.add('sidebar-content')
pageContent.appendChild(sidebar)

let podcastSection = document.createElement('div')
podcastSection.classList.add('podcasts-section')
sidebar.appendChild(podcastSection)

let podcastSectionTitle = document.createElement('h2')
podcastSectionTitle.textContent = "Podcastai ir radijo laidos"
podcastSectionTitle.classList.add('section-title')
podcastSection.appendChild(podcastSectionTitle)

let podcastsList = document.createElement('div')
podcastsList.classList.add('podcasts-list')
podcastSection.appendChild(podcastsList)

let podcastsObject = [
    {
        image: "https://codeacademy.lt/wp-content/uploads/2021/09/Spotify-300x300.png",
        length: "7:55",
        title: "Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas",
        date: "2021-09-02",
    }, {
        image: "https://codeacademy.lt/wp-content/uploads/2021/09/Spotify-300x300.png",
        length: "7:55",
        title: "Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas",
        date: "2021-09-02",
    }, {
        image: "https://codeacademy.lt/wp-content/uploads/2021/09/Spotify-300x300.png",
        length: "7:55",
        title: "Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas",
        date: "2021-09-02",
    }, {
        image: "https://codeacademy.lt/wp-content/uploads/2021/09/Spotify-300x300.png",
        length: "7:55",
        title: "Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas",
        date: "2021-09-02",
    },
];
podcastsObject.map((podcast) => {

    let podcastItem = document.createElement('div')
    podcastItem.classList.add('podcast-item')
    podcastsList.appendChild(podcastItem)

    let podcastImage = document.createElement('img')
    podcastImage.setAttribute('src', podcast.image)
    podcastImage.setAttribute('alt', `${podcast.title} podcast image`)
    podcastImage.classList.add('podcast-image')
    podcastItem.appendChild(podcastImage)

    let podcastLength = document.createElement('span')
    podcastLength.classList.add('podcast-length')
    podcastLength.textContent = `Trukme: ${podcast.length}`
    podcastItem.appendChild(podcastLength)

    let podcastButtonPlay = document.createElement('button')
    podcastButtonPlay.textContent = 'Play'
    podcastButtonPlay.classList.add('podcast-play')
    podcastItem.appendChild(podcastButtonPlay)

    let podcastContent = document.createElement('div')
    podcastContent.classList.add('podcast-content')
    podcastItem.appendChild(podcastContent)

    let podcastTitle = document.createElement('h3')
    podcastTitle.textContent = podcast.title
    podcastTitle.classList.add('podcast-title')
    podcastContent.appendChild(podcastTitle)

    let podcastDate = document.createElement('span')
    podcastDate.textContent = podcast.date
    podcastDate.classList.add('podcast-date')
    podcastContent.appendChild(podcastDate)
})

let eventsSection = document.createElement('div')
eventsSection.classList.add('events-section')
sidebar.appendChild(eventsSection)

let eventsSectionTitle = document.createElement('h3')
eventsSectionTitle.textContent = "Renginiai"
eventsSectionTitle.classList.add('section-title')
eventsSection.appendChild(eventsSectionTitle)

let eventsList = document.createElement('div')
eventsList.classList.add('events-list')
eventsSection.appendChild(eventsList)

let eventsObject = [
    {
        image: "https://codeacademy.lt/wp-content/uploads/2024/02/CCBaltics-vizualas-1024x592-1.png",
        day: "24",
        month: "Geg",
        location: "Lietuvos parodų ir kongresų centras LITEXPO",
        title: "COMIC CON BALTICS 2024",
    }, {
        day: "2",
        month: "Bal",
        title: "PyCon Lithuania 2024",
    }, {
        day: "24",
        month: "Geg",
        location: "Kaunas",
        title: "LT Game Jam 2024",
    },

]
eventsObject.map((event) => {
    let eventItem = document.createElement('div')
    eventItem.classList.add('event-item')
    eventsList.appendChild(eventItem)
    let eventLink = document.createElement('a')
    eventLink.setAttribute('href', '#')
    eventItem.appendChild(eventLink)
    if (event.image) {

        let eventImageWrapper = document.createElement('div')
        eventImageWrapper.classList.add('event-image-wrapper');
        eventLink.appendChild(eventImageWrapper)
        let eventImage = document.createElement('img')
        eventImage.classList.add('event-image')
        eventImage.setAttribute('src', event.image)
        eventImage.setAttribute('alt', `${event.title} event image`)
        eventImageWrapper.appendChild(eventImage)
    }

    let eventContentWrapper = document.createElement('div')
    eventContentWrapper.classList.add('event-content-wrapper')
    eventLink.appendChild(eventContentWrapper)

    let eventDate = document.createElement('div')
    eventDate.classList.add('event-date')
    eventContentWrapper.appendChild(eventDate)

    let eventDay = document.createElement('event-day')
    eventDay.textContent = event.day;
    eventDay.classList.add('event-day')
    eventDate.appendChild(eventDay)

    let eventMonth = document.createElement('div')
    eventMonth.classList.add('event-month')
    eventMonth.textContent = event.month
    eventDate.appendChild(eventMonth)

    let eventContent = document.createElement('div')
    eventContent.classList.add('event-content')
    eventContentWrapper.appendChild(eventContent)

    if (event.location) {
        let eventLocation = document.createElement('span')
        eventLocation.classList.add('location', 'event')
        eventLocation.textContent = event.location
        eventContent.appendChild(eventLocation)
    }
    let eventTitle = document.createElement('h3')
    eventTitle.textContent = event.title
    eventTitle.classList.add('event-title')
    eventContent.appendChild(eventTitle)
})


