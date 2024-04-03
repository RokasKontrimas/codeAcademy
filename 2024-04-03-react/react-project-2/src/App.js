import './news.css';
import PrimaryNews from "./components/PrimaryNews";
import SecondaryNews from "./components/SecondaryNews";
import PodcastList from "./components/PodcastList";
import EventsItem from "./components/EventsItem";

function App() {
    return (
        <div className="container">
            <div className="page-content">
                <main className="main-content">
                    <div className="news-section">
                        <h1 className="page-title">Naujienos</h1>


                        <PrimaryNews/>
                        <SecondaryNews/>

                        <a href="#" className="large-button">Visos naujienos</a>
                    </div>

                    <div className="video-section">
                        <h2 className="section-title">Vaizdo įrašai</h2>

                        <PrimaryNews/>
                        <SecondaryNews/>


                        <a href="#" className="large-button">Visi vaizdo įrašai</a>
                    </div>
                </main>

                <aside className="sidebar-content">
                    <div className="podcasts-section">
                        <h2 className="section-title">Podcastai ir radijo laidos</h2>

                        <PodcastList/>
                    </div>

                    <div className="events-section">
                        <h2 className="section-title">Renginiai</h2>

                        <div className="events-list">
                            <EventsItem/>
                        </div>

                        <a href="#" className="large-button">Daugiau</a>
                    </div>
                </aside>
            </div>
        </div>

    )
}

export default App;
