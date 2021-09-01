// Core
import React, { memo } from "react";

// Style
import { Wrapper } from "./Wrapper";
import { Input, Col } from "antd";

const { Search } = Input;

export const SearchBar = memo((props) => {
  const { onSearch, value, onChange } = props;

  return (
    <Col xs={24}>
      <Wrapper>
        <Search
          placeholder="Enter search text..."
          onSearch={onSearch}
          onChange={onChange}
          value={value}
          allowClear
          enterButton
          size="large"
        />
      </Wrapper>
    </Col>
  );
});
