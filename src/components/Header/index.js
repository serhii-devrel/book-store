// Core
import React, { memo } from "react";

// Style
import { Col } from "antd";
import { Title } from "./Title";
import { Wrapper } from "./Wrapper";

const Header = () => {
  return (
    <Col span={24}>
      <Wrapper>
        <Title>Book Store</Title>
      </Wrapper>
    </Col>
  );
};

export const HeaderMemo = memo(Header);
