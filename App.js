import React, { useEffect, useState, useRef } from 'react'
import { Provider } from 'react-redux'
import { Platform, StatusBar } from 'react-native'
import { SplashScreen } from 'expo'
import { loadAsync } from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
import LaundryStatus from './components/LaundryStatus'
import { Root } from 'native-base'

import store from './store'

import useLinking from './components/useLinking'
import styled from 'styled-components/native'

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`

const App = ({ skipLoadingScreen }) => {
  // Local States
  const [isLoadingComplete, setLoadingComplete] = useState(false)
  const [initialNavigationState, setInitialNavigationState] = useState()

  // Setup for the inital app state
  const containerRef = useRef()
  const { getInitialState } = useLinking(containerRef)

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide()

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState())

        // Load fonts
        await loadAsync({
          Roboto: require('native-base/Fonts/Roboto.ttf'),
          Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        })
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e)
      } finally {
        setLoadingComplete(true)
        SplashScreen.hide()
      }
    }

    loadResourcesAndDataAsync()
  }, [])

  // Check if the app is ready. Return null if it isn't
  if (!isLoadingComplete && !skipLoadingScreen) {
    return null
  } else {
    return (
      // Main bulk of the app.
      <Root>
        <Provider store={store}>
          <Container>
            {Platform.OS === 'ios' && <StatusBar barStyle='default' />}
            <LaundryStatus />
          </Container>
        </Provider>
      </Root>
    )
  }
}

export default App
