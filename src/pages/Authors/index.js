// Core
import React from "react";

// Components
import { Catcher, Header, SideBar, AuthorsList } from "../../components";

// Style
import { Row } from "antd";

export const Authors = () => {
  return (
    <Catcher>
      <Row>
        <Header />
        <SideBar />
        <AuthorsList />
      </Row>
    </Catcher>
  );
};
