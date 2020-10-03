import React from 'react';

import {
  Main,
  ImageLogo,
  IntroductionText,
  Button,
  ButtonText,
  Content
} from './styles';

import Logo from "../../../assets/Logo/Logo.png";

export default function Introduction() {
  return (
    <Main>
      <Content>
        <ImageLogo source={Logo} />
        <IntroductionText>
          O intuito deste repositório é mostrar projetos desenvolvidos para 
          facilitar os estudos dos devs iniciantes feitos pela nossa comunidade!
        </IntroductionText>
        <Button>
          <ButtonText>Aprender</ButtonText>
        </Button>
      </Content>
    </Main>
  );
}
