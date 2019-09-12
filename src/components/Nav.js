import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';


const NavigationList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  background: var(--black);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
`;

const NavigationLink = styled(Link)`
  color: white;
  padding: 20px;
  display: block;
  text-align: center;
  border-bottom:10px solid #353535;
  text-decoration: none;
  transition: all 0.5s;

  &[aria-current="page"] {
    border-color: var(--yellow);
  }
`;

export default function Nav() {
  return (
    <nav>
      <NavigationList>
        <li>
          <NavigationLink to="/">Home</NavigationLink>
        </li>
        <li>
          <NavigationLink to="/about">About</NavigationLink>
        </li>
        <li>
          <NavigationLink to="/tips">🔥 Tips</NavigationLink>
        </li>
        <li>
          <NavigationLink to="/users">Users</NavigationLink>
        </li>
      </NavigationList>
    </nav>
  );
}