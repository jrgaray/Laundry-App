import React from 'react'
import { useDispatch } from 'react-redux'

import {
  Card,
  CardItem,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base'

import { removeLoad } from '../ducks/laundryStatusSlice'

const LaundryCard = ({ index, type, status, timeElapsed }) => {
  const dispatch = useDispatch()
  return (
    <Card>
      <CardItem>
        <Body>
          <Text>{`Type: ${type}`}</Text>
          <Text>{`Status: ${status}`}</Text>
          <Text>{`Time Elasped: ${timeElapsed}`}</Text>
        </Body>
        <Right>
          <Button onPress={() => dispatch(removeLoad(index))}>
            <Text>X</Text>
          </Button>
        </Right>
      </CardItem>
    </Card>
  )
}

export default LaundryCard
