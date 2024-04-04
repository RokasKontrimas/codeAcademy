import Card from "./Card";

export default function Main() {
    const body1 =
        `Within the Cybersecurity program, students will learn the skills necessary to assist
    in
    the
    identification, assessment, reporting, and mitigation of technology and information
    security
    risks. The program will also provide students with the knowledge necessary to
    determine
    information system vulnerabilities and residual risks based on the analysis of
    technical
    artifacts, interviews, and evaluations of IT systems.`

    const body2 = ` 
    During this course you will learn how to setup Cloud infrastructure. How to automate
 whole
   creation process by using Ansible and Terraform. How to run containers by using
    Docker and
   Kubernetes. And finally how to combine all those skills in and create fully
   automated and
    secure cloud infrastructure!`

    const body3 = `
    „Salesforce“ – įmonės operacinė sistema, leidžianti skirtingiems padaliniams sklandžiai
    dalintis informacija, sėkmingiau aptarnauti klientus, didinti produktyvumą, o
    svarbiausia –
    efektyviau išnaudoti sukauptus duomenis.`
    const body4 = `
    Front-End programuotojas, pasitelkdamas HTML, CSS ir JavaScript, kuria vartotojui
    matomą
    sąsają. Todėl jo darbas yra ne tik techninio, bet ir kūrybinio pobūdžio.
    `

    return (
        <main>
            <div className="container">
                <Card
                    link='#'
                    headerLinkText='uzt funding'
                    headerImg='https://codeacademy.lt/wp-content/uploads/2021/06/Cyber-Copy.png'
                    imageAlt='taram baram'
                    title='cyber security'
                    body={body1}
                    feature1='courses in english'
                    feature2='evenings'
                />
                <Card
                    link='#'
                    headerLinkText='uzt funding'
                    headerImg='https://codeacademy.lt/wp-content/uploads/2021/03/Full-Stack_dark-1.svg'
                    imageAlt='taram baram'
                    title='DevOps (223002955)'
                    body={body2}
                    feature1='courses in english'
                    feature2='vakarais'
                />
                <Card
                    link='#'
                    headerLinkText='naujas'
                    headerImg=''
                    imageAlt='taram baram'
                    title='„Salesforce“ CRM – pradedančių'
                    body={body3}
                    feature1='1 lygis'
                    feature2='vakarais'
                />
                <Card
                    link='#'
                    headerLinkText='finansuojama'
                    headerImg='https://codeacademy.lt/wp-content/uploads/2021/03/Fron-End_dark-1.svg'
                    imageAlt='taram baram'
                    title='Front-end serverless (kompetencijų) programa bedarbiams asmenims (223002776)'
                    body={body4}
                    feature1='finansuojama užt - nekvalifikuotiems'
                    feature2='Dienomis'
                />
            </div>
        </main>
    )
}