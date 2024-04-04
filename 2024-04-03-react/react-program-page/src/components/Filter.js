import Label from "./Label";
import Select from "./Select";
import Input from "./Input";

export default function Filter() {
    return (
        <aside>
            <div className="filter-wrapper">
                <h2>Rastos programos</h2>
                <Label title="Tema" selector='theme'/>
                <Select id='theme'
                        title={['rinkodara',
                            'visos',
                            'testavimas',
                            'programavimas',
                            'dizainas',
                            'duomenys',
                            'kibernetinis saugumas']}/>

                <Label title="Vieta" selector='location'/>
                <Select id='location'
                        title={['visos',
                            'online',
                            'kaunas',
                            'vilnius',
                            'klaipeda']}/>

                <Label title="Tipas" selector='type'/>
                <Select id='type'
                        title={['visi',
                            'courses in english',
                            'pradedančių kursai',
                            'pažengusių kursai',
                            ' 1 + 2 lygis',
                            'studijos 101',
                            'finansuojama užt - nekvalifikuotiems',
                            'finansuojama užt - nedirbantiems',
                            'finansuojama užt - dirbantiems']}/>

                <Label title='Laikas' selector='time'/>
                <div id="time">
                    <Label title='Dienomis' selector='day'/>
                    <Input id='day' type='checkbox'/>
                    <Label title='Vakarais' selector='evening'/>
                    <Input id='evening' type='checkbox'/>
                </div>
                <button type="button" className="filter-clear">Išvalyti</button>
            </div>

        </aside>
    )
}