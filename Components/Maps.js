import  React from 'react';
import { View, Text } from 'react-native';

const googleApiKey = 'my_google_api_key';
 class Maps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: null
    }
  }
  
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.getLocationDetails(position.coords.latitude,position.coords.longitude)
      },
      (error) => { console.log(error); },
      { enableHighAccuracy: true, timeout: 30000 }
    )
  }

  getLocationDetails(latitude, longitude) {
    const location = [];
    url='https://maps.googleapis.com/maps/api/geocode/json?address='+ latitude + ',' +longitude + '&key=' +  googleApiKey
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
        location = responseJson;
        location.results[0].address_components.forEach(component => {
          if (component.types.indexOf('country') !== -1) {
            this.setState({ country: component.long_name });
          }
        });
    });
  }
  
  render() {
    return  (
      <View>
        <Text>{this.state.country}</Text>
      </View>
    )
  }
}
export default Maps;