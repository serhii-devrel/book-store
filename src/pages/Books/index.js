// Core
import React from "react";

// Components
import { Catcher, HeaderMemo, SideBarMemo } from "../../components";

// Style
import { Row } from "antd";

export const Books = () => {
  return (
    <Catcher>
      <Row>
        <HeaderMemo />
        <SideBarMemo />
      </Row>
    </Catcher>
  );
};
