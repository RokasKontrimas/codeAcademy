// const PodcastItem = (props) => {
const PodcastItem = ({ imageSrc, imageAlt, length, title, date }) => {


  return (
    <div className="podcast-item">
      <img src={imageSrc} alt={imageAlt} className="podcast-image" />
      <span className="podcast-length">Trukmė: {length}</span>
      <button className="podcast-play">Play</button>

      <div className="podcast-content">
        <h3 className="podcast-title">{title}</h3>
        <span className="podcast-date">{date}</span>
      </div>
    </div>
  )
}

export default PodcastItem