/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import axios from 'axios';

const DEFAULT_REQUEST = "https://api.darksky.net/forecast/26f53fb0cfe58c1c22dfb748423a3e18/44.33,23.79";

class App extends Component {

  constructor() {
    super();

    this.state = {
      text: "Something",
      forecast: [],
      request: false,
    }
  }

  getForecast()
  {
    const request_url = DEFAULT_REQUEST;
    axios.get(request_url).then( (response) => {
      if ( response.status == 200 ) {
        var weather = response.data.currently;
        
        var temp = weather.temperature;
        var uvIndex = weather.uvIndex;
        var precipProbability = weather.precipProbability;
        var summary = weather.summary;
        var humidity = weather.humidity;
        var windSpeed = weather.windSpeed;
        var forecast = {temp, precipProbability, summary, humidity, windSpeed, uvIndex};

        this.setState({forecast: forecast, request: true});
      }
    });
  }

  render() {
    if(this.state.request == false)
      this.getForecast()

    return (
      <View style={styles.container}>    
        <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://cdn0.iconfinder.com/data/icons/ecology-111/1022/clouds-512.png'}}
        />
        <Text>{this.state.forecast.summary}</Text>
        <Text>Temperature: {this.state.forecast.temp}</Text>
        <Text>Precipitation probability: {this.state.forecast.precipProbability}</Text>
        <Text>Humidity: {this.state.forecast.humidity}</Text>
        <Text>Wind Speed m/s: {this.state.forecast.windSpeed}</Text>
        <Text>UvIndex: {this.state.forecast.uvIndex}</Text> 
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3b5998'
  }
});

export default App;
