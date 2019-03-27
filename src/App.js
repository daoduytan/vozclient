import React, { lazy, Suspense } from "react";
import { Router } from "@reach/router";

import { constant, theme } from "./configs";
import { createGlobalStyle } from "styled-components";

import "./App.css";
import { Spinner } from "./components/Ui";

import StoriesContext from "./context/storiesContext";

const Home = lazy(() => import("./components/Home"));
const Story = lazy(() => import("./components/Story"));

const Style = createGlobalStyle`
@import url(${constant.URL_GOOGLE_FONT});

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;

  background: ${theme.colors.background};
  font-size: ${theme.fonts.size}px;
  line-height: ${theme.fonts.lineHeight};
}

a {
  text-decoration: none;
}
`;

const App = () => (
  <StoriesContext>
    <Style />

    <Suspense fallback={<Spinner />}>
      <Router>
        <Home path="/" />
        <Story path="story/:id/" />
      </Router>
    </Suspense>
  </StoriesContext>
);

export default App;
