import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Storage from './src/screens/Storage'
import SearchScreen from './src/screens/SearchScreen';
import LocationScreen from './src/screens/LocationScreen';
import AnimationList from './src/screens/AnimationList';
import ImagesScreen from './src/screens/ImagesScreen';
import { setNavigator } from './src/navigationRef';
import { Provider as LocationProvider } from './src/context/LocationContext';
// import { Provider as TrackProvider } from './src/context/TrackContext';
import { FontAwesome } from '@expo/vector-icons';


// const trackListFlow = createStackNavigator({
//     Restaurents : SearchScreen,
//     ResultsShow: ResultsShowScreen,
// });

// trackListFlow.navigationOptions = {
//   title: 'Restaurents',
//   tabBarIcon: <FontAwesome name="th-list" size={20} />,
// };

const switchNavigator = createSwitchNavigator({
 
  mainFlow: createBottomTabNavigator({
    Restaurents: SearchScreen,
    Store: Storage,
    Images: ImagesScreen,
    Animation:AnimationList,
    Location: LocationScreen,
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    // <TrackProvider>
      <LocationProvider>
        {/* <AuthProvider> */}
          <App
            ref={(navigator) => {
              setNavigator(navigator);
            }}
          />
        {/* </AuthProvider> */}
      </LocationProvider>
    // </TrackProvider>
  );
};
