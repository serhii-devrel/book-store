// Core
import React from "react";

// Components
import { Catcher, Header, SideBar, BooksList } from "../../components";

// Style
import { Row } from "antd";

export const Books = () => {
  return (
    <Catcher>
      <Row>
        <Header />
        <SideBar />
        <BooksList />
      </Row>
    </Catcher>
  );
};
