import './App.css';
import HeaderElement from "./components/header/HeaderElement";
import SectionElement from "./components/main/section/SectionElement";
import FooterElement from "./components/footer/FooterElement";

function App() {
    const sections = [
        {
            sectionClass: 'first-section',
            title: 'Grow Together',
            body: 'Generate meaningful discussions with your audience and build a strong, loyal community.\n' +
                'Think of the insightful conversations you miss out on with a feedback form.',
            imageSrc: 'https://raw.githubusercontent.com/frontendmentorio/huddle-landing-page-with-alternating-feature-blocks/f3ddf831a7905102f493a03a65b8f70e4df46211/images/illustration-grow-together.svg',
            imageAlt: 'Grow together'
        },
        {
            sectionClass: 'second-section',
            title: 'Flowing Conversations',
            body: 'You wouldn\'t paginate a conversation in real life, so why do it online? Our\n' +
                'threads\n' +
                'have just-in-time loading for a more natural flow.',
            imageSrc: 'https://raw.githubusercontent.com/frontendmentorio/huddle-landing-page-with-alternating-feature-blocks/f3ddf831a7905102f493a03a65b8f70e4df46211/images/illustration-flowing-conversation.svg',
            imageAlt: 'Flowing conversation',
        },
        {
            sectionClass: 'third-section',
            title: 'Your Users',
            body: 'It takes no time at all to integrate Huddle with your app\'s authentication\n' +
                ' solution.\n' +
                ' This means, once signed in to your app, your users can start chatting\n' +
                'immediately.',
            imageSrc: 'https://raw.githubusercontent.com/frontendmentorio/huddle-landing-page-with-alternating-feature-blocks/f3ddf831a7905102f493a03a65b8f70e4df46211/images/illustration-your-users.svg',
            imageAlt: 'Your users',
        }]
    const returnSections = (sections) => {
        return sections.map((section, key) => (
            section.title && section.body && (
                <SectionElement
                    key={key}
                    sectionClass={section.sectionClass}
                    title={section.title}
                    body={section.body}
                    imageSrc={section.imageSrc}
                    imageAlt={section.imageAlt}
                />
            )
        ));

    }
    return (
        <div>
            <div className="container">
                <HeaderElement/>
                <main>
                    {returnSections(sections)}
                </main>


            </div>
            <FooterElement/>
        </div>
    )
}

export default App;
