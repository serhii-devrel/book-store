// Core
import React from "react";
import { NavLink } from "react-router-dom";

// Components
import { SearchBar } from "../SearchBar";
import { AuthorForm } from "../AuthorForm";

// Hooks
import { useAuthors, useBooks } from "../../hooks";

// Routes
import { routes } from "../../routes";

// Style
import { Col, Table, Button, Space } from "antd";
import { DeleteOutlined, RightOutlined } from "@ant-design/icons";
import { Wrapper } from "./Wrapper";
import { Controls } from "./Controls";

const { Column } = Table;

export const AuthorsList = () => {
  const { authors, isFetching, onAuthorDelete, onAuthorSearch } = useAuthors();
  const { findBooksAuthorBased, onSearchPatternChange } = useBooks();

  return (
    <Col xs={24} lg={20}>
      <Wrapper>
        <SearchBar onSearch={onAuthorSearch} onChange={onSearchPatternChange} />
        <Controls>
          <AuthorForm isEditMode={false} />
        </Controls>
        <Table loading={isFetching} dataSource={authors} pagination={false}>
          <Column
            title="Date"
            dataIndex="createdAt"
            key="createdAt"
            responsive={["lg"]}
          />
          <Column title="First Name" dataIndex="firstName" key="firstName" />
          <Column
            title="Last Name"
            dataIndex="lastName"
            key="lastName"
            responsive={["sm"]}
          />
          <Column
            title="Date of Birth"
            dataIndex="dateOfBirth"
            key="dateOfBirth"
            responsive={["md"]}
          />
          <Column
            title="Date of Death"
            dataIndex="dateOfDeath"
            key="dateOfDeath"
            responsive={["md"]}
          />
          <Column
            title="Action"
            key="action"
            render={(record) => (
              <Space size="middle">
                <AuthorForm isEditMode={true} authorId={record.key} />
                <Button type="secondary" onClick={() => onAuthorDelete(record)}>
                  <DeleteOutlined />
                </Button>
                <NavLink to={`${routes.authoredBooks}/${record.key}`}>
                  <Button
                    type="primary"
                    onClick={() => findBooksAuthorBased(record)}
                  >
                    <RightOutlined />
                  </Button>
                </NavLink>
              </Space>
            )}
          />
        </Table>
      </Wrapper>
    </Col>
  );
};
