import styled from "styled-components";
import { CORES } from "../../styles";

export const HeaderBar = styled.header`
  display: flex;
  background-color: ${CORES.cinza};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${CORES.branca};
    text-decoration: none;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
  }
`;

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`;

export const LinkItem = styled.li`
  margin-right: 16px;
`;

export const LinkCart = styled.a`
  display: flex;
  align-items: center;
  img {
    margin-left: 16px;
  }
`;
