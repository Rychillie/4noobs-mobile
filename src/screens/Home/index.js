import React, { useState, useEffect } from "react";
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
  const initialCourses = [
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

  const Categories = [
    { title: "Todos" },
    { title: "Ferramentas" },
    { title: "Frameworks" },
    { title: "Design" },
    { title: "Sistemas Operacionais" },
  ];

  const [Courses, setCourses] = useState(initialCourses);
  const [researched, setResearched] = useState("");

  useEffect(() => {
    const course = researched.replace(/\s/g, "").toLowerCase();
    let filter = Courses.filter((item) => {
      return item.title.replace(/\s/g, "").toLowerCase().includes(course);
    });

    if (!filter || course.length == 0 || filter.length === 0) {
      filter = initialCourses;
    }

    setCourses(filter);
  }, [researched]);

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
          onChangeText={(text) => setResearched(text)}
          value={researched}
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
        {Categories.map((Categories, index) => (
          <CategoryItem key={index}>
            <Category>{Categories.title}</Category>
          </CategoryItem>
        ))}
      </CategoryList>
      <CardList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 20, paddingRight: 20 }}
        overScrollMode="never"
      >
        {Courses.map((Courses, index) => (
          <Card
            style={{ backgroundColor: `${Courses.primaryColor}` }}
            key={index}
          >
            <ImageCard source={Courses.iconCurso} />
            <Call style={{ color: `${Courses.secondaryColor}` }}>
              {Courses.title}
            </Call>
          </Card>
        ))}
      </CardList>
    </Main>
  );
}
