import React from "react";
import styled from "styled-components";
import {
  TouchableOpacity,
  StatusBar,
  Linking,
  ScrollView,
  Dimensions,
} from "react-native";
import { WebView } from "react-native-webview";
import { Ionicons } from "@expo/vector-icons";
import Markdown from "react-native-showdown";
import showdown from "showdown";
import AutoHeightWebView from "react-native-autoheight-webview";

class SectionScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };

  componentDidMount() {
    StatusBar.setBarStyle("light-content", true);
  }

  componentWillUnmount() {
    StatusBar.setBarStyle("dark-content", true);
  }

  render() {
    const { navigation } = this.props;
    const section = navigation.getParam("section");

    const converter = new showdown.Converter();
    const ContentHTML = converter.makeHtml(section.content);

    return (
      <ScrollView>
        <Container>
          <StatusBar hidden />

          <Cover>
            <Image source={section.image} />

            <Wrapper>
              <Logo source={section.logo} />
              <Subtitle>{section.subtitle}</Subtitle>
            </Wrapper>

            <Title>{section.title}</Title>

            <Caption>{section.caption}</Caption>
          </Cover>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack();
            }}
            style={{ position: "absolute", top: 20, right: 20 }}
          >
            <CloseView>
              <Ionicons name="ios-close" size={26} color="#4775f2" />
            </CloseView>
          </TouchableOpacity>
          <Content>
            {/* <WebView
              source={{ html: ContentHTML }}
              scalesPageToFit={false}
              scrollEnabled={false}
              ref="webview"
              onNavigationStateChange={(event) => {
                if (event.url != "about:blank") {
                  this.refs.webview.stopLoading();
                  Linking.openURL(event.url);
                }
              }}
            /> */}

            <AutoHeightWebView
              customStyle={htmlStyles}
              source={{ html: ContentHTML }}
              viewportContent={"width=device-width, initial-scale=1"}
              scalesPageToFit={false}
              scrollEnabled={false}
              style={{
                width: "100%",
                backgroundColor: "transparent",
              }}
              ref="webview"
              onNavigationStateChange={(event) => {
                if (event.url != "about:blank") {
                  this.refs.webview.stopLoading();
                  Linking.openURL(event.url);
                }
              }}
              onSizeUpdated={(size) => console.log(size.height)}
            />
            {/*
            <MyWebView
              startInLoadingState={true}
              source={{ html: ContentHTML + metaTag + htmlStyles }}
              scalesPageToFit={false}
              scrollEnabled={false}
              ref="webview"
              onNavigationStateChange={(event) => {
                if (event.url != "about:blank") {
                  this.refs.webview.stopLoading();
                  Linking.openURL(event.url);
                }
              }}
            /> */}
            {/*
            <Markdown
              style={{ backgroundColor: "transparent" }}
              body={section.content}
              pureCSS={htmlStyles}
              scalesPageToFit={false}
              scrollEnabled={false}
            /> */}
          </Content>
        </Container>
      </ScrollView>
    );
  }
}

export default SectionScreen;

const htmlContent = `
  <h2>This is a title</h2>
  <p>This <strong>is</strong> a <a href="https://rychillie.net">Link</a></p>
  <img src="https://cl.ly/55da82beb939/download/avatar-default.jpg"/>
`;

const metaTag = `
  <meta name="viewport" content="width=device-width, initial-scale=1">
`;

const htmlStyles = `
  * {
    font-family: -apple-system, Roboto;
    margin: 0;
    padding: 0;
    font-size: 17px;
    font-weight: normal;
    color: #3c4560;
    line-height: 24px;
  }

  h1 {
    font-size: 26px;
    text-transform: uppercase;
    color: #b8bece;
    font-weight: 600;
    margin-top: 50px;
  }

  h2 {
    font-size: 20px;
    text-transform: uppercase;
    color: #b8bece;
    font-weight: 600;
    margin-top: 30px;
  }

  p {
    margin-top: 20px;
  }

  a {
    color: #4775f2;
    font-weight: 600;
    text-decoration: none;
  }

  strong {
    font-weight: 700;
  }
  img {
    width: 100%;
    border-radius: 10px;
    margin-top: 20px;
  }
  pre {
    padding: 20px;
    background: #212C4F;
    overflow: hidden;
    word-wrap: break-word;
    border-radius: 10px;
    margin-top: 20px;
  }

  code {
    color: white;
  }
`;

const Content = styled.View`
  height: 100%;
  padding: 0 20px 60px 20px;
`;

const Container = styled.View`
  flex: 1;
`;

const Cover = styled.View`
  height: 375px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Title = styled.Text`
  font-size: 24px;
  color: white;
  font-weight: bold;
  width: 170px;
  position: absolute;
  top: 78px;
  left: 20px;
`;

const Caption = styled.Text`
  color: white;
  font-size: 17px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: 300px;
`;

const CloseView = styled.View`
  width: 32px;
  height: 32px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.View`
  flex-direction: row;
  position: absolute;
  top: 40px;
  left: 20px;
  align-items: center;
`;

const Logo = styled.Image`
  width: 24px;
  height: 24px;
`;

const Subtitle = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  margin-left: 5px;
  text-transform: uppercase;
`;
