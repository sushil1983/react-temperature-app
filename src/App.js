
import  React from 'react'
import Form from './components/Form'; 
import Title from './components/Title'
import Weather from './components/Weather';

const API_KEY = "024647bb15364869812105140192805"

class App extends React.Component {
state ={

        condition:undefined,        
        country:undefined,        
        description:undefined, 
        humidity:undefined,
        region : undefined,
        temperature : undefined,
        city : undefined,
        error:undefined

}

    
    getWeather = async(e) => { 
      e.preventDefault();
      const city = e.target.city.value;
    const country = e.target.country.value;
    const api_call = await fetch(`http://api.apixu.com/v1/current.json?key=${API_KEY}&q=${city} ${country}`);
    const data =  await api_call.json();
 if(city && country){
      this.setState({
      city : data.location.name,
        condition : data.current.condition.text,
        country : data.location.country,
        description : data.current.last_updated,
          humidity : data.current.humidity,
           region :data.location.region ,
        temperature : data.current.temp_c,
    }) }else 
          {
            this.setState({
              error: 'please enter city and country'
            })
          }
 }

   
        
        render(){
          return(
                <div>
                  <div className="wrapper">
                    <div className="main">
                      <div className="container">
                        <div className="row">
                        <div className="col-xs-5 title-container">
                        <Title    />
                        </div>
                        <div className="col-xs-7 form-container">
                          <Form getWeather ={this.getWeather}/>


                  <Weather 
                  city = {this.state.city}
                  condition = {this.state.condition}
                  country = {this.state.country}
                  description =  {this.state.description}
                  humidity = {this.state.humidity}
                  region = {this.state.region}
                  temperature = {this.state.temperature}
                  error = {this.state.error}
                  />
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

            )
        }
      };

export default App;


 
                  

