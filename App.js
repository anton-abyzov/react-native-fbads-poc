/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableHighlight
} from 'react-native';

import { InterstitialAdManager } from 'react-native-fbads'

const facebookId = "CAROUSEL_IMG_SQUARE_APP_INSTALL#405153576842368_405153990175660";
function _showAd() {
  InterstitialAdManager.showAd(facebookId).then(() => {}).catch((error) => {
    console.log(error);
  })
}

const App: () => React$Node = () => {
  return (
    <>     
      <ScrollView
          style={styles.scrollView}>          
          <TouchableHighlight
                style={styles.button}
                onPress={() => _showAd()}>
                <Text>Show ad</Text>
          </TouchableHighlight>
          
        </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  button: {    
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    height: 150
  },
  scrollView: {
    flex: 1,
    flexDirection: 'column',
  }
});

export default App;
