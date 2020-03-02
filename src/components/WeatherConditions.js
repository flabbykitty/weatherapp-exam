import React from 'react'

const WeatherConditions = (props) => {
    return(
        <div>
            <p className="mb-1">
                Current conditions are: 
            </p>
            <ul className="list-unstyled mb-0 d-flex justify-content-center">
                {props.conditions.map(c => {
                    return <li className="d-flex flex-column align-items-center" key={c.id}>
                                <img src={"http://openweathermap.org/img/wn/" + c.icon + "@2x.png"} alt="Icon of the current weather condition"/>
                                {c.description}
                            </li>
                })}
            </ul>
        </div>
    )
}

export default WeatherConditions