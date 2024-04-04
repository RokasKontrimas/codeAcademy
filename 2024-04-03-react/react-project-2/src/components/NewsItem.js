const NewsItem = (props) => {
  return (
    <div className="news-item">
      <a href="#">
        <div className="news-image-wrapper">
          <img src="https://codeacademy.lt/wp-content/uploads/2024/02/347376644_264133982758490_1171303248287627440_n-1536x1024.jpg" alt="" className="news-image" />
        </div>

        <div className="news-content-wrapper">
          <span className="news-category">{props.category}</span>
          <h2 className="news-title">{props.title}</h2>
          <span className="news-date">{props.date}</span>
        </div>
      </a>

    </div>
  )
}

export default NewsItem