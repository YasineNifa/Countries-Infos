import React, {useState,useEffect} from 'react';
import axios from "axios"
import Card from './Card';







const Countries = () => {
    const [infos, setInfos] = useState([]) 
    const [sortedDataByPopulation, setSortedDataByPopulation] = useState([])

    const [selectedLanguage, setSelectedLanguage] = useState([])
    const [playOnce , setPlayOnce] = useState(true);
    const [rangeValue, setRangeValue] = useState(140);
    const [selectedRadio, setSelectedRadio] = useState("");
    const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];


    useEffect(() =>
        {
            if (playOnce)
            {
                axios.get("https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag;languages")
                .then((res)=> {setInfos(res.data)
                              setPlayOnce(false)
                              //const countryObj = Object.keys(infos).map((i) => infos[i]);
                              //console.log("hello ", countryObj[0].languages.name)
                              })
                .then((err) => console.error(err))
            }

            const sortCountriesByPop = () =>{
                const countryObj = Object.keys(infos).map((i) => infos[i]); //transformer array en objet
        
                const sortdatas = countryObj.sort((a,b) => {
                    return b.population - a.population
                })
                sortdatas.length = rangeValue
                setSortedDataByPopulation(sortdatas);

                
            };
            sortCountriesByPop();
            
        }
    ,[infos, rangeValue, playOnce]) 

    

    


    return (
        <div className="countries">
            <div className="sort-container">
                <div>
                    <label >Ranking Based On Population</label>  
                    <input type="range"  min="1" max="250" value={rangeValue} onChange = {(e) => setRangeValue(e.target.value)}/>
                </div>

                <div>
                    <label for="language-choice">Native Language:</label>
                    <input list="language" id="language-choice" name="language-choice" onChange={(e) => setSelectedLanguage(e.target.value)}/>
                    <datalist id="language">
                        <option value="Arabic"/>
                        <option value="French"/>
                        <option value="English"/>
                        <option value="German"/>
                        <option value="Kazakh"/>

                        <option value="Korean"/>
                        <option value="Chinese"/>
                        <option value="Portuguese"/>
                        <option value="Malay"/>
                        <option value="Thai"/>
                        <option value="Indonesian"/>
                        <option value="Hindi"/>
                        <option value="Japanese"/>
                        <option value="Bengali"/>
                        <option value="Vietnamese"/>
                        <option value="Turkish"/>

                        <option value="Persian"/>
                        <option value="Nepali"/>
                        <option value="Pashto"/>
                        <option value="Russian"/>
                        <option value="Spanish"/>
                        <option value="Afrikaans"/>
                        <option value="Dutch"/>
                        <option value="Polish"/>
                    </datalist>
        
                </div>
                       
                <ul>
                    {radios.map((radio) => {
                        return(
                        <li key={radio}>
                            <input type="radio" 
                            value={radio}
                            id={radio}
                            checked={radio === selectedRadio}
                            onChange={(e) => setSelectedRadio(e.target.value)}
                            />
                            <label htmlFor={radio}>{radio}</label>
                        </li>
                        );
                    })}
                </ul>
            </div>
            
            <div className="cancel">
                {selectedRadio && (
                <h5 onClick={() => setSelectedRadio("")}>Annuler recherche</h5>
                )}
            </div>
            <ul className="countries-list">
                
                {
                    sortedDataByPopulation.filter((country) => country.region.includes(selectedRadio))
                        .filter((country) => (Object.values(country.languages[0])[2]).includes(selectedLanguage))

                        .map((country) =>(<Card country = {country} key={country.name}/>))
                }
            </ul>   
        </div>

    );
};

export default Countries;