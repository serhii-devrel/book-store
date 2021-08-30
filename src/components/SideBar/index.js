// Core
import React, { memo } from "react";
import { NavLink, useLocation } from "react-router-dom";

// Style
import { Menu, Col, Avatar } from "antd";
import { LogoWrapper, NavWrapper } from "./Wrapper";
import { TypographyMenuItem } from "./Typography";
import { BookOutlined } from "@ant-design/icons";

// Routes
import { routes } from "../../routes";

const SideBar = () => {
  const { pathname } = useLocation();
  const path = `/${pathname
    .split("/")
    .reduce((a, b) => (a.length > b.length ? a : b), 0)}`;
  return (
    <Col xs={24} lg={4}>
      <NavLink to={routes.authors}>
        <LogoWrapper>
          <Avatar
            icon={<BookOutlined />}
            size={{
              xs: 200,
              sm: 200,
              md: 200,
              lg: 150,
              xl: 150,
              xxl: 150,
            }}
          />
        </LogoWrapper>
      </NavLink>
      <NavWrapper>
        <Menu selectedKeys={[path]} theme="dark">
          <Menu.Item key={routes.authors}>
            <NavLink to={routes.authors}>
              <TypographyMenuItem>Authors</TypographyMenuItem>
            </NavLink>
          </Menu.Item>
          <Menu.Item key={routes.books}>
            <NavLink to={routes.books}>
              <TypographyMenuItem>Books</TypographyMenuItem>
            </NavLink>
          </Menu.Item>
        </Menu>
      </NavWrapper>
    </Col>
  );
};

export const SideBarMemo = memo(SideBar);
