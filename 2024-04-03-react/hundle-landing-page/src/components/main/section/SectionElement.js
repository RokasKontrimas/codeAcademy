import './Section.css';

export default function SectionElement(props) {
    const {sectionClass, body,title, imageSrc} = props
    console.log(sectionClass)
    return (
        <section className="container">
            <div className={sectionClass}>
                <div className="section-content">
                    <h2>{title}</h2>
                    <p>{body}</p>
                </div>
                <img
                    src={imageSrc}
                    alt="grow together"/>
            </div>
        </section>
    )
}