import React, { useContext } from "react";

import { context } from "../../context/storiesContext";
import { Header, Spinner, Container, Logo } from "../Ui";

import Item from "./Item";
import PaginationStories from "./PaginationStories";
import NoStory from "./NoStory";
import Bookmarks from "./Bookmarks";

const Home = () => {
  const state = useContext(context);
  const { loading, stories } = state;

  if (loading) return <Spinner />;

  if (stories.length === 0) return <NoStory />;

  return (
    <Container>
      <Header
        leftContent={<Bookmarks />}
        rightContent={<div style={{ width: 50 }} />}
      >
        <Logo />
        <span style={{ fontWeight: 700, fontSize: 20 }}>F17</span>
      </Header>

      <div>
        {stories.map(story => (
          <Item key={story.id} story={story} />
        ))}
      </div>
      <div style={{ margin: "30px 0" }}>
        <PaginationStories />
      </div>
    </Container>
  );
};

export default Home;
