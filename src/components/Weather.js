import	React from 'react'

class Weather extends React.Component{
	
	render(){
	return(
 			<div className ="weather__info">
			 		{this.props.city&& <p className="weather__key">CITY : 

			 		<span className="weather__value">{this.props.city}</span>
			 		</p>}
			         {this.props.region && <p className="weather__key" >AREA: 

			         <span className="weather__value ">{this.props.region}</span></p>}
			 		

			        {this.props.country && <p className="weather__key">COUNTRY:

			        <span className="weather__value" >{this.props.country}</span></p>}
			        {this.props.temperature && <p className="weather__key" >TEMPERATURE : 

			        <span className="weather__value" >{this.props.temperature}</span></p>}
			        {this.props.condition && <p className="weather__key">CONDITION:

			        <span className="weather__value ">{this.props.condition}</span></p>}
			        {this.props.humidity && <p className="weather__key">HUMIDITY:

			        <span className="weather__value " >{this.props.humidity}</span></p>}
			        {this.props.description && <p className="weather__key">DESCRIPTION:

			        <span className="weather__value" >{this.props.description}</span></p>}
			      	{this.props.error &&  <p className="weather__key"> ERROR :{this.props.error}</p>}
 			</div>
 
		);


}
}

export default Weather;

