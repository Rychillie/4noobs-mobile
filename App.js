import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import AppNavigator from "./navigator/AppNavigator";
import HomeScreen from "./Screens/HomeScreen";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

//https://graphql.contentful.com/content/v1/spaces/{SPACE_ID}/explore?access_token={CDA_TOKEN}

const client = new ApolloClient({
  uri: "https://graphql.contentful.com/content/v1/spaces/9p2i4rjrlpxe",
  credentials: "same-origin",
  headers: {
    Authorization: `Bearer AP4JnPGUZBhHLrTap_P1suGxQ1MvvjuNL0WIq0f20mU`,
  },
});

const initialState = {
  action: "",
  name: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_MENU":
      return { action: "openMenu" };
    case "CLOSE_MENU":
      return { action: "closeMenu" };
    case "UPDATE_NAME":
      return { name: action.name };
    default:
      return { state };
  }
};

const store = createStore(reducer);

const App = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  </ApolloProvider>
);

export default App;
