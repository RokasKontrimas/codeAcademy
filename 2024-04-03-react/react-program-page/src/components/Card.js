export default function Card(props) {
    return (
        props.data.link ? (
            <div className="card">
                <a href={props.data.link} className="card-link">
                    <div className="card-header">
                        <span className="header-link">{props.data.headerLinkText}</span>
                        {props.data.headerImg ? (<img src={props.data.headerImg} alt={props.data.imageAlt}/>) : ''}
                    </div>
                    <div className="card-body">
                        <h2>{props.data.title}</h2>
                        <p>
                            {props.data.body}
                        </p>
                    </div>
                    <div className="card-footer">
                        <ul>
                            <li>{props.data.feature1}</li>
                            <li>{props.data.feature2}</li>
                        </ul>
                    </div>
                </a>
            </div>
        ) : ''


    )
}