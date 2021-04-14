import React from 'react';

const Card = (props) => {
    // const {country} = props;
    // console.log("hello country : ", country)
    // console.log("hello props : ", props)
    return (
        <li className="card">
            <img src={props.country.flag} alt='flag' />
            <div className='data-container'>
                <ul>
                    <li>
                        {props.country.name}
                    </li>

                    <li>
                        {props.country.capital}
                    </li>

                    <li>
                        Pop. : {props.country.population}
                    </li>

                    {/* <li>
                        Lang : {Object.values(props.country.languages[0])[2]}
                    
                    </li> */}
                    {console.log(Object.values(props.country.languages[0])[2])}
                    
                    

                    
                </ul>

            </div>
            


        </li>
    );
};

export default Card;