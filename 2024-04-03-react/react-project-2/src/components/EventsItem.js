export default function EventsItem() {
    return (
        <>
            <div className="event-item">

                <a href="#">
                    <div className="event-image-wrapper">
                        <img
                            src={'https://codeacademy.lt/wp-content/uploads/2024/02/CCBaltics-vizualas-1024x592-1.png'}
                            alt="" className="event-image"/>
                    </div>

                    <div className="event-content-wrapper">
                        <div className="event-date">
                            <div className="event-day">24</div>
                            <div className="event-month">Geg</div>
                        </div>

                        <div className="event-content">
                                            <span
                                                className="event location">Lietuvos parodų ir kongresų centras LITEXPO</span>
                            <h3 className="event-title">COMIC CON BALTICS 2024</h3>
                        </div>
                    </div>
                </a>

            </div>

            <div className="event-item">

                <a href="#">
                    <div className="event-content-wrapper">
                        <div className="event-date">
                            <div className="event-day">2</div>
                            <div className="event-month">Bal</div>
                        </div>

                        <div className="event-content">
                            <h3 className="event-title">PyCon Lithuania 2024</h3>
                        </div>
                    </div>
                </a>

            </div>

            <div className="event-item">

                <a href="#">
                    <div className="event-content-wrapper">
                        <div className="event-date">
                            <div className="event-day">24</div>
                            <div className="event-month">Geg</div>
                        </div>

                        <div className="event-content">
                            <span className="event location">Kaunas</span>
                            <h3 className="event-title">LT Game Jam 2024</h3>
                        </div>
                    </div>
                </a>

            </div>
        </>

    )
}