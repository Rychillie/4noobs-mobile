import styled from 'styled-components/native';

export const Main = styled.View`
  flex: 1;
  justify-content: center;
  background-color: #8743CC;
`;

export const Content = styled.View`
  padding: 0 29px;
  align-items: flex-start;
`

export const ImageLogo = styled.Image`
  margin-bottom: 20px;
`

export const IntroductionText = styled.Text`
  font-size: 22px;
  line-height: 30px;
  color: #F3F4F5;
`

export const Button = styled.TouchableOpacity`
  align-self: center;
  align-items:center;
  justify-content:center;
  width: 300px;
  height: 60px;
  background: #F3F4F5;
  border-radius: 30px;
  margin-top: 60px;
`

export const ButtonText = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #000000;
`
