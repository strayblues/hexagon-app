import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <Container>
        <MenuContainer>
          {/* <MenuItem>
            <MenuItemLink to="/instructions">Instructions</MenuItemLink>
          </MenuItem> */}
          <MenuItem>
            <MenuItemLink to="/describe">Describe</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink to="/align">Align</MenuItemLink>
          </MenuItem>
          {/* <MenuItem>
            <MenuItemLink to="/verify">Verify</MenuItemLink>
          </MenuItem> */}
        </MenuContainer>
      </Container>
    );
  }
}

export default Navbar;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
`;
const MenuContainer = styled.li`
  display: flex;
  color: #222;
  list-style: none;
`;
const MenuItemLink = styled(Link)`
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0);
  padding: 20px 10px;
  border-radius: 4px;
  text-decoration: none;
  color: inherit;
  transition: all 300ms;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  &:hover {
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
  }
`;
const MenuItem = styled.li`
  padding: 1em;
`;
