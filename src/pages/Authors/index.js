// Core
import React from "react";

// Components
import {
  Catcher,
  HeaderMemo,
  SideBarMemo,
  AuthorsList,
} from "../../components";

// Style
import { Row } from "antd";

export const Authors = () => {
  return (
    <Catcher>
      <Row>
        <HeaderMemo />
        <SideBarMemo />
        <AuthorsList />
      </Row>
    </Catcher>
  );
};
