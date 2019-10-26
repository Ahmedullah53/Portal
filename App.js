import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import HomeScreen from './screens/Home';
import TotalScreen from './screens/complaints/TotalScreen';
import OpenScreen from './screens/complaints/OpenScreen';
import ClosedScreen from './screens/complaints/ClosedScreen';
import PositiveScreen from './screens/feedbacks/PositiveScreen';
import NegativeScreen from './screens/feedbacks/NegativeScreen';
import PendingScreen from './screens/feedbacks/PendingScreen';
import DroppedScreen from './screens/feedbacks/DroppedScreen';

const AppNavigator = createStackNavigator(
  {
    'Home':HomeScreen,
    'TotalComplaints':TotalScreen,
    'OpenComplaints':OpenScreen,
    'ClosedComplaints':ClosedScreen,
    'PositiveFeedbacks':PositiveScreen,
    'NegativeFeedbacks':NegativeScreen,
    'PendingFeedbacks':PendingScreen,
    'DroppedComplaints':DroppedScreen,
  }
)

const Home = createStackNavigator(
  {
    'Home':HomeScreen
  }
)
const TotalComplaints = createStackNavigator(
  {
    'TotalComplaints':TotalScreen,
  }
)
const OpenComplaints = createStackNavigator(
  {
    'OpenComplaints':OpenScreen,
  }
)
const ClosedComplaints = createStackNavigator(
  {
    'ClosedComplaints':ClosedScreen,
  }
)
const DroppedComplaints = createStackNavigator(
  {
    'DroppedComplaints':DroppedScreen,
  }
)
const PositiveFeedbacks = createStackNavigator(
  {
    'PositiveFeedbacks':PositiveScreen,
  }
)
const NegativeFeedbacks = createStackNavigator(
  {
    'NegativeFeedbacks':NegativeScreen,
  }
)
const PendingFeedbacks = createStackNavigator(
  {
    'PendingFeedbacks':PendingScreen,
  }
)
const AppDrawerNavigator = createDrawerNavigator(
  {
    'Home':Home,
    'TotalComplaints':TotalComplaints,
    'OpenComplaints':OpenComplaints,
    'ClosedComplaints':ClosedComplaints,
    'PositiveFeedbacks':PositiveFeedbacks,
    'NegativeFeedbacks':NegativeFeedbacks,
    'PendingFeedbacks':PendingFeedbacks,
    'DroppedComplaints':DroppedComplaints,
  }
)

const AppDrawerContainer = createAppContainer(AppDrawerNavigator)

export default () => (
    <AppDrawerContainer/>
)