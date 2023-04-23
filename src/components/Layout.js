import styled from "styled-components";
import { NavLink } from 'react-router-dom';


export const Layout = styled.div`
height: 100vh;
justify-content: center;
align-items: center;
font-size: 40px;
padding-top: 20px;


`

export const StyledLink = styled(NavLink)`
  margin: 0 20px 0 20px;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  &.active {
    color: white;
    background-color: #5736A3;
  }
`;
