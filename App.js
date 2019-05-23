import React,{Component} from 'react';
import {Navigation} from 'react-native-navigation';
import configureStore from './src/store/config/config';
import { Provider } from 'react-redux';
import Login from './src/containers/Login/Login';
import Home from './src/containers/Home/Home';
import Profile from './src/containers/Profile/Profile';
import Matches from './src/containers/Matches/Matches';

const store = configureStore(); 

Navigation.registerComponentWithRedux("tinder.Login",() =>Login,Provider,store);

Navigation.registerComponentWithRedux("tinder.Home",() =>Home,Provider,store);

Navigation.registerComponentWithRedux("tinder.Profile",() =>Profile,Provider,store);

Navigation.registerComponentWithRedux("tinder.Matches",() =>Matches,Provider,store);

export default () => Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root:{
      stack:{
        children:[{
          component:{
            name:"tinder.Login",
            options:{
              topBar:{
                visible:false
              }
            }
          }
        }]
      }
    }
  })
})