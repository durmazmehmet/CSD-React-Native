import React, {useState} from 'react';

import {
  Container,
  Content,
  Body,
  Header,
  Title,
  Left,
  Button,
  Text,
  Icon,
  Footer,
  Form,
  Item,
  Input,
  Label,
  Radio,
  ListItem,
  H3,
  Right,
} from 'native-base';

const uriLower = 'ws://161.97.141.113:5054';
const uriUpper = 'ws://161.97.141.113:5055';
const socketLower = new WebSocket(uriLower);
const socketUpper = new WebSocket(uriUpper);

const App = () => {
  const [messageText, setMessageText] = useState('');
  const [resultText, setResultText] = useState('');
  const [serverIndex, setServerIndex] = useState(1);
  socketLower.onopen = () => {
    console.log('LowerServer:onopen', 'connected');
  };

  socketLower.onmessage = e => {
    console.log('LowerServer:Received:', e.data);
    setResultText(e.data.toString());
  };

  socketLower.onclose = err => {
    console.log('LowerServer:Error:', err.message);
    console.log('LowerServer:Reason:', err.reason);
  };

  socketUpper.onopen = () => {
    console.log('UpperServer:onopen', 'connected');
  };

  socketUpper.onmessage = e => {
    console.log('UpperServer:Received:', e.data);
    setResultText(e.data.toString());
  };

  socketUpper.onclose = err => {
    console.log('UpperServer:Error:', err.message);
  };

  socketUpper.onclose = e => {
    console.log('UpperServer:Code:', e.code);
    console.log('UpperServer:Reason:', e.reason);
  };

  const onOKButtonPressed = () => {
    const socket = serverIndex === 0 ? socketLower : socketUpper;
    socket.send(messageText);
  };

  return (
    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>CSD</Title>
        </Body>
      </Header>
      <Content padder>
        <ListItem>
          <H3>Servers</H3>
        </ListItem>

        <ListItem>
          <Left>
            <Text>Lower Server</Text>
          </Left>
          <Right>
            <Radio
              selected={serverIndex === 0}
              color="blue"
              onPress={() => setServerIndex(0)}
            />
          </Right>
        </ListItem>
        <ListItem>
          <Left>
            <Text>Upper Server</Text>
          </Left>
          <Right>
            <Radio
              color="blue"
              selected={serverIndex === 1}
              onPress={() => setServerIndex(1)}
            />
          </Right>
        </ListItem>
        <Form>
          <Item floatingLabel rounded>
            <Input
              value={messageText}
              onChangeText={setMessageText}
              placeholder="Enter message to send"
            />
          </Item>
        </Form>
        <Label>{resultText}</Label>
        <Button primary block onPress={onOKButtonPressed}>
          <Text>OK</Text>
        </Button>
      </Content>
      <Footer>
        <Text>React Native Project Group</Text>
      </Footer>
    </Container>
  );
};

export default App;
