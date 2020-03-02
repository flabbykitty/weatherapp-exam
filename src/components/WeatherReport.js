import React from 'react';
import WeatherConditions from './WeatherConditions'

const WeatherReport = props => {
	return (
		<div id="WeatherReport">
			<div className="card bg-secondary text-white">
				<div className="card-body text-center">
					<h5 className="card-title">The temperature in {props.weather.city} is {props.weather.temp} &deg; C right now, with a humidity of {props.weather.humidity} %.
					</h5>
					
					<WeatherConditions conditions={props.weather.conditions} />

				</div>
			</div>
		</div>
	)
}

export default WeatherReport;
