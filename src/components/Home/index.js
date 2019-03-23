import React, { useContext, useState, Suspense, lazy } from "react";

import styles from "./home.module.scss";
import { context } from "../../context/storiesContext";
import { Header, Spinner, Container, Icon } from "../Ui";
import { icons } from "../../assets";

import Item from "./Item";
import PaginationStories from "./PaginationStories";
import NoStory from "./NoStory";

const Bookmarks = lazy(() => import("./Bookmarks"));

const Home = () => {
  const [open, toggleDraw] = useState(false);
  const state = useContext(context);
  const { loading, stories } = state;

  if (loading) return <Spinner />;

  if (stories.length === 0) return <NoStory />;

  const showDraw = () => {
    toggleDraw(!open);
  };

  return (
    <Container>
      <div className={`${styles.draw} ${open ? styles.open : ""}`}>
        <div className={styles.gray} onClick={showDraw} />
        <div className={styles.content}>
          <Suspense fallback={<Spinner />}>
            <Bookmarks />
          </Suspense>
        </div>
      </div>
      <Header
        leftContent={
          <div style={{ width: 50 }} onClick={showDraw}>
            <Icon icon={icons.bar} size={25} />
          </div>
        }
        rightContent={<div style={{ width: 50 }} />}
      >
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
