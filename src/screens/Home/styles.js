import styled from "styled-components/native";

export const Main = styled.SafeAreaView`
  background: #2c2c2c;
  flex-direction: column;
  flex: 1;
`;

export const Header = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const ImageLogo = styled.Image`
  max-width: 108px;
  height: 35px;
`;

export const SearchLine = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 30px;
  margin-right: 30px;
`;

export const Search = styled.TextInput`
  font-size: 14px;
  line-height: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  background: #1e1e1e;
  height: 46px;
  color: white;
  padding-left: 50px;
  padding-right: 15px;
  align-items: center;
  border-radius: 12px;
  flex: 1;
`;

export const CategoryList = styled.ScrollView`
  margin-top: 15px;
  margin-bottom: 10px;
`;

export const CategoryItem = styled.View`
  background: rgba(243, 244, 245, 0.45);
  border-radius: 15px;
  padding: 10px 20px;
  margin: 0 10px;
`;

export const Category = styled.Text`
  font-weight: bold;
  font-size: 10px;
  line-height: 12px;
  color: white;
`;

export const CardList = styled.ScrollView`
  margin-top: 10px;
  margin-bottom: 15px;
  flex-direction: row;
  flex: 1;
`;

export const Card = styled.View`
  width: 280px;
  height: 100%;
  margin: 0 10px;
  border-radius: 14px;
  flex-direction: column;
  padding: 50px 20px;
  align-items: center;
  justify-content: center;
`;

export const Call = styled.Text`
  font-size: 24px;
  line-height: 26px;
  font-weight: bold;
`;

export const ImageCard = styled.Image`
  margin: 50px auto;
`;
