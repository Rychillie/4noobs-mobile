import { StatusBar } from "expo-status-bar";
import { ScrollView, SafeAreaView } from "react-native";
import React from "react";

import Card from "./../../components/Card";
import Logo from "./../../components/Logo";
import Course from "./../../components/Course";
import { NotificationIcon } from "./../../components/Icons/";

import { Ionicons } from "@expo/vector-icons";

import { cards } from './../../datas/cards';
import { logos } from './../../datas/logos';
import { courses } from './../../datas/courses';

import {Container,
        Avatar,
        Subtitle,
        Name,
        Title,
        TitleBar} from './styles';

export default function Home() {
  return (
    <Container>
      <SafeAreaView>
        <ScrollView style={{ height: "100%" }}>
          <TitleBar>
            <Avatar source={require("./../../../assets/rychillie.png")} />

            <Title>welcome back,</Title>

            <Name>Rychillie</Name>

            <NotificationIcon
              style={{ position: "absolute", right: 40, top: 5 }}
            />
          </TitleBar>

          <ScrollView
            style={{
              flexDirection: "row",
              padding: 20,
              paddingLeft: 12,
              paddingTop: 30,
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {logos.map((logo, index) => (
              <Logo key={index} image={logo.image} text={logo.text} />
            ))}
          </ScrollView>

          <Subtitle>Continue Learning</Subtitle>

          <ScrollView
            horizontal={true}
            style={{ paddingBottom: 30 }}
            showsHorizontalScrollIndicator={false}
          >
            {cards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                image={card.image}
                caption={card.caption}
                logo={card.logo}
                subtitle={card.subtitle}
              />
            ))}
          </ScrollView>

          <Subtitle>Popular Courses</Subtitle>

          {courses.map((course, index) => (
            <Course
              key={index}
              image={course.image}
              title={course.title}
              subtitle={course.subtitle}
              logo={course.logo}
              author={course.author}
              avatar={course.avatar}
              caption={course.caption}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
      <StatusBar style="dark" />
    </Container>
  );
}