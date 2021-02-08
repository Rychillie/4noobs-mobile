import React from "react";

import {Title,
        Author,
        Subtitle,
        Logo,
        Image,
        Cover,
        Content,
        Caption,
        Container,
        Avatar} from './styles';

const Course = (props) => (
  <Container>
    <Cover>
      <Image source={props.image} />
      <Logo source={props.logo} resizeMode="contain" />
      <Subtitle>{props.subtitle}</Subtitle>
      <Title>{props.title}</Title>
    </Cover>
    <Content>
      <Avatar source={props.avatar} />
      <Caption>{props.caption}</Caption>
      <Author>Created by: {props.author}</Author>
    </Content>
  </Container>
);

export default Course;