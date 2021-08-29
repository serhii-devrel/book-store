// Core
import styled from "styled-components";

export const NavWrapper = styled.div`
  padding-top: 50px;
  background-color: #00152a;
  height: 100vh;
  min-height: 100%;
  @media (max-width: 992px) {
    height: 100%;
    background-color: #fff;
    padding-top: 0px;
  }
`;

export const LogoWrapper = styled.div`
  background-color: #00152a;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 992px) {
    padding-bottom: 20px;
  }
`;
