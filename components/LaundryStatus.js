import React, { useState } from 'react'
import { Modal, Alert } from 'react-native'
import { useSelector } from 'react-redux'
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Right,
  Body,
  Text,
} from 'native-base'
import AddLoadForm from './AddLoadForm'

import LaundryCard from './LaundryCard'

const LaundryStatus = () => {
  const laundryList = useSelector(state => state.laundryStatus)
  const [isVisible, setIsVisible] = useState(false)
  const handlePress = () => {
    setIsVisible(!isVisible)
  }

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
            timeElapsed={load.duration}
            index={index}
          />
        ))}
        <Modal
          animationType='slide'
          transparent={false}
          visible={isVisible}
          onRequestClose={() => Alert.alert('Modal has been closed')}
        >
          <AddLoadForm handlePress={handlePress} />
        </Modal>
      </Content>
      <Footer>
        <FooterTab>
          <Button onPress={handlePress} full>
            <Text>Add Load</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  )
}

export default LaundryStatus
