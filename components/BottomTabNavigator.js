import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TabBarIcon from './TabBarIcon'
import LaundryStatus from './LaundryStatus'

const BottomTab = createBottomTabNavigator()
const INITIAL_ROUTE_NAME = 'Home'

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) })

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name='Status'
        component={LaundryStatus}
        options={{
          title: 'Loads In Progress',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name='md-code-working' />
          ),
        }}
      />
      {/* <BottomTab.Screen
        name=''
        component={LinksScreen}
        options={{
          title: 'Start Load',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name='md-book' />
          ),
        }}
      />*/}
    </BottomTab.Navigator>
  )
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME

  switch (routeName) {
    case 'Home':
      return 'How to get started'
    case 'Links':
      return 'Links to learn more'
  }
}
