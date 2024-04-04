import NewsItem from "./NewsItem"

const SecondaryNewsList = () => {
    return (
        <div className="secondary-news-list">
            <NewsItem
                category='ai & deep learning'
                title='Ar „ChatGPT“ užims mūsų darbo vietas?'
                date='2023-01-27'/>
            <NewsItem
                category='naujienos'
                title='Įmonių kova dėl IT specialistų: kaip sėkmingai atrasti savo talentus?'
                date='2022-12-12'/>
            <NewsItem
                category='naujienos'
                title='Dezinformacija ir kibernetinis pavojus: kaip apsisaugoti?'
                date='2022-03-23'/>
            <NewsItem
                category='naujienos'
                title='„CodeAcademy“ projektinė veikla – indėlis į gražesnę ateitį'
                date='2021-11-09'/>
        </div>
    )
}

export default SecondaryNewsList