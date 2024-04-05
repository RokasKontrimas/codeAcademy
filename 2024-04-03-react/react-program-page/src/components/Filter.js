
import DynamicInputSelect from "./DynamicInputSelect";

export default function Filter() {
    return (
        <aside>
            <div className="filter-wrapper">
                <h2>Rastos programos</h2>
                <DynamicInputSelect
                    id='theme'
                    title='Tema'
                    options={['rinkodara',
                        'visos',
                        'testavimas',
                        'programavimas',
                        'dizainas',
                        'duomenys',
                        'kibernetinis saugumas']}
                    isInput={false}/>
                <DynamicInputSelect
                    id='location'
                    title='Vieta'
                    options={['visos',
                        'online',
                        'kaunas',
                        'vilnius',
                        'klaipeda']}
                />

                <DynamicInputSelect
                    title='Tipas'
                    id='type'
                    options={['visi',
                        'courses in english',
                        'pradedančių kursai',
                        'pažengusių kursai',
                        ' 1 + 2 lygis',
                        'studijos 101',
                        'finansuojama užt - nekvalifikuotiems',
                        'finansuojama užt - nedirbantiems',
                        'finansuojama užt - dirbantiems']}/>

                {/*<LabelElement title='Laikas' selector='time'/>*/}
                <fieldset id="time">
                    <legend>Laikas</legend>
                    <DynamicInputSelect
                        title='Dienomis'
                        id='day'
                        type='checkbox'
                        isInput={true}
                    />
                    <DynamicInputSelect
                        title='Vakarais'
                        id='evening'
                        type='checkbox'
                        isInput={true}
                    />
                </fieldset>
                <button type="button" className="filter-clear">Išvalyti</button>
            </div>

        </aside>
    )
}