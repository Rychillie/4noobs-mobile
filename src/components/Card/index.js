import React from "react";

import {Container,
        Caption,
        Content,
        Cover,
        Image,
        Logo,
        Subtitle,
        Title,
        Wrapper} from './styles';

const Card = (props) => (
  <Container>
    <Cover>
      <Image source={props.image} />
      <Title>{props.title}</Title>
    </Cover>
    <Content>
      <Logo source={props.logo} />
      <Wrapper>
        <Caption>{props.caption}</Caption>
        <Subtitle>{props.subtitle}</Subtitle>
      </Wrapper>
    </Content>
  </Container>
);

export default Card;