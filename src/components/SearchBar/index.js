// Core
import React from "react";

// Hooks
import { useSearch } from "../../hooks";

// Style
import { Wrapper } from "./Wrapper";
import { Input, Col } from "antd";

const { Search } = Input;

export const SearchBar = () => {
  const { onAuthorSearch } = useSearch();

  return (
    <Col xs={24}>
      <Wrapper>
        <Search
          placeholder="Enter search text..."
          onSearch={onAuthorSearch}
          allowClear
          enterButton
          size="large"
        />
      </Wrapper>
    </Col>
  );
};
