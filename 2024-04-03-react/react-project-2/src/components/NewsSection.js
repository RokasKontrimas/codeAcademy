import LargeLink from "./LargeLink"
import PrimaryNewsList from "./PrimaryNewsList"
import SecondaryNewsList from "./SecondaryNewsList"

const NewsSection = () => {
  return (
    <div className="news-section">
      <h1 className="page-title">Naujienos</h1>

      <PrimaryNewsList />
      <SecondaryNewsList />

      <LargeLink text="Visos naujienos" url="#" />
    </div>
  )
}

export default NewsSection
