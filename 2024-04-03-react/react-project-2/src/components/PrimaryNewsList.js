import NewsItem from "./NewsItem"

const PrimaryNewsList = () => {
    return (
        <div className="primary-news-list">
            <NewsItem
                category='Programavimas'
                title='Vienas kvalifikacijos keitimo projektas valstybės biudžetui atneš 51 mln. papildomų eurų'
                date='2024-02-01'/>
            <NewsItem
                category='Karjera'
                title=' Karjeros konsultantė pataria, kaip ieškoti darbo šiuolaikinėje darbo rinkoje – jums pravers 4 patarimai'
                date='2024-04-04'/>
        </div>
    )
}

export default PrimaryNewsList