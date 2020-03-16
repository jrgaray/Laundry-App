import React from 'react'
import {
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'
import * as WebBrowser from 'expo-web-browser'
import styled from 'styled-components/native'
import { useDispatch, useSelector } from 'react-redux'
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  ActionSheet,
  Body,
  Icon,
  Text,
} from 'native-base'
import { addLoad } from '../ducks/laundryStatusSlice'
import LaundryCard from './LaundryCard'

const LaundryStatus = () => {
  const dispatch = useDispatch()
  const laundryList = useSelector(state => state.laundryStatus)

  const types = ['Colors', 'Whites', 'Delicates']
  const duration = [30, 45, 60, 75, 90, 105]
  const cancel = 4
  return (
    <Container>
      <Header>
        <Body>
          <Title>Goose Laundry Day</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        {laundryList.map((load, index) => (
          <LaundryCard
            key={`${load.type}-${load.status}-${index}`}
            type={load.type}
            status={load.status}
            timeElapsed={load.timeElapsed}
            index={index}
          />
        ))}
      </Content>
      <Footer>
        <FooterTab>
          <Button
            onPress={
              () => {
                ActionSheet.show(
                  {
                    options: types,
                    cancelButtonIndex: types.length,
                    title: 'Load Type',
                  },
                  optionIndex => {
                    if (optionIndex < types.length) {
                      ActionSheet.show(
                        {
                          options: duration,
                          cancelButtonIndex: duration.length,
                          title: 'Duration',
                        },
                        durationIndex => {
                          console.log('hi')
                          dispatch(
                            addLoad({
                              type: types[optionIndex],
                              status: 'Washing',
                              timeElapsed: duration[durationIndex],
                            })
                          )
                        }
                      )
                    }
                  }
                )
              }
              // dispatch(
              //   addLoad({ type: 'Colors', status: 'Test', timeElapsed: '1:00' })
              // )
            }
            full
          >
            <Text>Add Load</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  )
}

export default LaundryStatus
