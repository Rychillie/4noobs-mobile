import React from "react";
import { FontAwesome } from "@expo/vector-icons";

import {
  Main,
  Header,
  ImageLogo,
  SearchLine,
  Search,
  CategoryList,
  CardList,
  Card,
  Call,
  ImageCard,
  CategoryItem,
  Category,
} from "./styles";

import Logo from "../../../assets/Logo/Logo.png";

export default function HomeScreen() {
  const Cursos = [
    {
      title: "Vue4Noobs",
      primaryColor: "#203048",
      secondaryColor: "#50B484",
      iconCurso: require("../../../assets/Logo/LogoVueBig.png"),
    },
    {
      title: "PHPNoobs",
      primaryColor: "#8B9DD7",
      secondaryColor: "#FFFFFF",
      iconCurso: require("../../../assets/Logo/LogoPHPBig.png"),
    },
  ];

  const Categorias = [
    { title: "Todos" },
    { title: "Ferramentas" },
    { title: "Frameworks" },
    { title: "Design" },
    { title: "Sistemas Operacionais" },
  ];

  return (
    <Main>
      <Header>
        <ImageLogo source={Logo} />
      </Header>
      <SearchLine>
        <FontAwesome
          name="search"
          size={18}
          style={{
            position: "absolute",
            paddingLeft: 20,
            zIndex: 5,
          }}
          color="white"
        />
        <Search
          placeholder="Busque um treinamento"
          placeholderTextColor="#fff"
        />
      </SearchLine>
      <CategoryList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 20, paddingRight: 20 }}
        overScrollMode="never"
        style={{ flexGrow: 0 }}
      >
        {Categorias.map((Categorias, index) => (
          <CategoryItem key={Categorias.index}>
            <Category>{Categorias.title}</Category>
          </CategoryItem>
        ))}
      </CategoryList>
      <CardList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 20, paddingRight: 20 }}
        overScrollMode="never"
      >
        {Cursos.map((Cursos, index) => (
          <Card
            style={{ backgroundColor: `${Cursos.primaryColor}` }}
            key={Cursos.index}
          >
            <ImageCard source={Cursos.iconCurso} />
            <Call style={{ color: `${Cursos.secondaryColor}` }}>
              {Cursos.title}
            </Call>
          </Card>
        ))}
      </CardList>
    </Main>
  );
}
