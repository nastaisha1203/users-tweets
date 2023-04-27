import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding: 10px;
  border-bottom: 1px solid black;
  background-color: #ebd8ff;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
export const Navigation = styled.nav`
  display: flex;
  gap: 20px;
`;
export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;
  color: black;
  &.active {
    color: white;
    background-color: #5736a3;
  }
`;
