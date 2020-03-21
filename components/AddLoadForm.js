import React, { useState } from 'react'
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
  Body,
  Text,
  Form,
  Picker,
  List,
  ListItem,
  Icon,
} from 'native-base'
import { useDispatch } from 'react-redux'
import { addLoad } from '../ducks/laundryStatusSlice'

const AddLoadForm = ({ handlePress }) => {
  const dispatch = useDispatch()
  const [type, setType] = useState(null)
  const [duration, setDuration] = useState(null)

  const submit = () => {
    dispatch(addLoad({ type, duration, status: 'Washing' }))
    handlePress()
  }
  return (
    <Container>
      <Header>
        <Body>
          <Title>Add Load</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <Form>
          <List>
            <ListItem thumbnail>
              <Left>
                <Icon
                  style={{ fontSize: 30, width: 30 }}
                  type='MaterialCommunityIcons'
                  name='washing-machine'
                  android='washing-machine'
                />
              </Left>
              <Body>
                <Text style={{ fontWeight: 'bold' }}>Laundry Type:</Text>
              </Body>
              <Right>
                <Picker
                  mode='dropdown'
                  style={{ height: 20, width: 200 }}
                  textStyle={{ color: '#5cb85c' }}
                  selectedValue={type}
                  onValueChange={value => {
                    setType(value)
                  }}
                >
                  <Picker.Item label='Dark' value='Dark' />
                  <Picker.Item label='Brights' value='Bright' />
                  <Picker.Item label='Whites' value='White' />
                  <Picker.Item label='Towels/Bedding' value='Towels/Bedding' />
                </Picker>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Icon
                  style={{ fontSize: 30, width: 30 }}
                  type='MaterialCommunityIcons'
                  name='timer'
                />
              </Left>
              <Body>
                <Text style={{ fontWeight: 'bold' }}>Duration:</Text>
              </Body>
              <Right>
                <Picker
                  mode='dropdown'
                  style={{ height: 20, width: 200 }}
                  textStyle={{ color: '#5cb85c' }}
                  selectedValue={duration}
                  onValueChange={value => {
                    setDuration(value)
                  }}
                >
                  <Picker.Item label='30' value={30} />
                  <Picker.Item label='45' value={45} />
                  <Picker.Item label='60' value={60} />
                  <Picker.Item label='75' value={75} />
                </Picker>
              </Right>
            </ListItem>
          </List>
          <Button onPress={submit} full>
            <Text>Add Load!</Text>
          </Button>
        </Form>
      </Content>
      <Footer>
        <FooterTab>
          <Button onPress={handlePress} full>
            <Text>Close</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  )
}

export default AddLoadForm
