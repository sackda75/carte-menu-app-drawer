import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import EntreesScreen from './components/EntreesScreen'
import PlatsScreen from './components/PlatsScreen'
import DessertsScreen from './components/DessertsScreen'
import BoissonsScreen from './components/BoissonsScreen'

import CustomDrawerContent from './components/CustomDrawerContent'
import VideoScreen from './components/VideoScreen'
import ContactScreen from './components/ContactScreen'

require('react-native').unstable_enableLogBox()	

const navOptionHandler = () => ({
  hearderShown: false
})

const StackEntrees = createStackNavigator()
function HomeStack() {
  return (
    <StackEntrees.Navigator initialRouteName='EntreesNav' headerMode='none'>
      <StackEntrees.Screen name='EntreesNav' component={EntreesScreen} options={navOptionHandler} />
      <StackEntrees.Screen name='PlatsNav' component={PlatsScreen} options={navOptionHandler} />
    </StackEntrees.Navigator>
  )
}

const StackPlats = createStackNavigator()
function SettingStack() {
  return (
    <StackPlats.Navigator initialRouteName='PlatsNav' headerMode='none'>
      <StackPlats.Screen name='PlatsNav' component={PlatsScreen} options={navOptionHandler} />
      <StackPlats.Screen name='DessertsNav' component={DessertsScreen} options={navOptionHandler} />
    </StackPlats.Navigator>
  )
}

const StackDesserts = createStackNavigator()
function DessertStack() {
  return (
    <StackDesserts.Navigator initialRouteName='DessertsNav' headerMode='none'>
      <StackDesserts.Screen name='DessertsNav' component={DessertsScreen} options={navOptionHandler} />
      <StackDesserts.Screen name='BoissonsNav' component={BoissonsScreen} options={navOptionHandler} />
    </StackDesserts.Navigator>
  )
}

const StackBoissons = createStackNavigator()
function BoissonStack() {
  return (
    <StackBoissons.Navigator initialRouteName='BoissonsNav' headerMode='none'>
      <StackBoissons.Screen name='BoissonsNav' component={BoissonsScreen} options={navOptionHandler} />
      <StackBoissons.Screen name='EntreesNav' component={EntreesScreen} options={navOptionHandler} />
    </StackBoissons.Navigator>
  )
}

const Tab = createBottomTabNavigator()
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName
          if (route.name === 'Entrées') {
            iconName = focused
              ? 'silverware-fork'
              : 'silverware-fork'
          } else if (route.name === 'Plats') {
            iconName = focused
              ? 'room-service'
              : 'room-service-outline'
          } else if (route.name === 'Desserts') {
            iconName = focused
              ? 'food-apple'
              : 'food-apple-outline'
          } else if (route.name === 'Boissons') {
            iconName = focused
              ? 'coffee'
              : 'coffee-outline'
          }
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />
        } 
      })}
      tabBarOptions={{
        activeTintColor: '#00b894',
        inactiveTintColor: '#000'
      }}
    >
      <Tab.Screen name='Entrées' component={HomeStack} />
      <Tab.Screen name='Plats' component={SettingStack} />
      <Tab.Screen name='Desserts' component={DessertStack} />
      <Tab.Screen name='Boissons' component={BoissonStack} />
    </Tab.Navigator>
  )
}

const Drawer = createDrawerNavigator()
function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName='Accueil' drawerContent={CustomDrawerContent}>
      <Drawer.Screen name='Accueil' component={TabNavigator} />
      <Drawer.Screen name='VideoResto' component={VideoScreen} />
      <Drawer.Screen name='Contact' component={ContactScreen} />
    </Drawer.Navigator>
  )
}

const StackApp = createStackNavigator()
const App = () => {
  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName='HomeApp' headerMode='none'>
        <StackApp.Screen name='HomeApp' component={DrawerNavigator} options={navOptionHandler} />
      </StackApp.Navigator>
    </NavigationContainer>
  )
}

export default App