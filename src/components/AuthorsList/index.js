// Core
import React from "react";
import { NavLink } from "react-router-dom";

// Components
import { SearchBar } from "../SearchBar";

// Hooks
import { useAuthors } from "../../hooks";

// Routes
import { routes } from "../../routes";

// Style
import { Col, Table, Button, Space } from "antd";
import { EditOutlined, DeleteOutlined, RightOutlined } from "@ant-design/icons";
import { Wrapper } from "./Wrapper";
import { Controls } from "./Controls";

const { Column } = Table;

export const AuthorsList = () => {
  const { authors, isFetching, onAuthorDelete } = useAuthors();

  return (
    <Col xs={24} lg={20}>
      <Wrapper>
        <SearchBar />
        <Controls>
          <Button type="primary">Add Author</Button>
        </Controls>
        <Table loading={isFetching} dataSource={authors} pagination={false}>
          <Column
            title="Date"
            dataIndex="createdAt"
            key="createdAt"
            responsive={["md"]}
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
            render={(text, record) => (
              <Space size="middle">
                <Button type="secondary">
                  <EditOutlined />
                </Button>
                <Button
                  type="secondary"
                  onClick={() => onAuthorDelete(record.key)}
                >
                  <DeleteOutlined />
                </Button>
                <NavLink to={`${routes.viewAuthor}/${record.key}`}>
                  <Button type="primary">
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
