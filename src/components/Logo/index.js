import React from "react";

import {Container,
        Image,
        Text} from './styles';

const Logo = (props) => (
  <Container>
    <Image source={props.image} resizeMode="contain" />
    <Text>{props.text}</Text>
  </Container>
);

export default Logo;