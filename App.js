import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';

import MapboxGL from '@react-native-mapbox-gl/maps';
import Geolocation from '@react-native-community/geolocation';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoibGVodGFrdSIsImEiOiJja25wMmtkZXkwMHZtMnZxd21kem9tMWJsIn0.5eHI-J9zArIPfZ6s6Rpu8g',
);

const App = () => {
  // Show user current location
  useEffect(() => {
    Geolocation.getCurrentPosition(info => console.log(info));
  }, []);

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView style={styles.map}>
          <MapboxGL.UserLocation />
        </MapboxGL.MapView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container: {
    height: '100%',
    width: '100%',
  },
  map: {
    flex: 1,
  },
});

export default App;
