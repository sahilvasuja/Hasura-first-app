import React from "react";
import { render } from "react-dom";

import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import "./index.css";
import { Users } from "./components/Users";
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://sahil-firstproject.hasura.app/v1/graphql",
    headers: {
      "x-hasura-admin-secret":
        "zfzk7e4yAENhUT7RYhuWYWaul5AXt5uAPd38Jzd2CyJQz7GJrutVOAsDSQGCU3z6",
    },
  }),
});

const App = () => (
  <ApolloProvider client={client}>
    <h2 className="first">My First Apollo App</h2>
    <Users />
  </ApolloProvider>
);
render(<App />, document.getElementById("root"));
