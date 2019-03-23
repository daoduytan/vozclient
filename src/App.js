import React, { lazy, Suspense } from "react";
import { Router } from "@reach/router";

import "./App.css";
import { Spinner } from "./components/Ui";

import StoriesContext from "./context/storiesContext";

const Home = lazy(() => import("./components/Home"));
const Story = lazy(() => import("./components/Story"));

const App = () => (
  <StoriesContext>
    <Suspense fallback={<Spinner />}>
      <Router>
        <Home path="/" />
        <Story path="story/:id/" />
      </Router>
    </Suspense>
  </StoriesContext>
);

export default App;
