export default function Card(props) {
    return (
        <div className="card">
            <a href={props.link} className="card-link">
                <div className="card-header">
                    <span className="header-link">{props.headerLinkText}</span>
                    {props.headerImg ? (<img src={props.headerImg} alt={props.imageAlt}/>) : ''}
                </div>
                <div className="card-body">
                    <h2>{props.title}</h2>
                    <p>
                        {props.body}
                    </p>
                </div>
                <div className="card-footer">
                    <ul>
                        <li>{props.feature1}</li>
                        <li>{props.feature2}</li>
                    </ul>
                </div>
            </a>
        </div>

    )
}