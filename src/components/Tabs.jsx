import React from 'react'
import { Nav, NavLink, NavItem } from 'reactstrap'

const Tabs = ({ tab, setTab }) => {
  return (
    <Nav pills>
      <NavItem>
        <NavLink
          active={tab === 0}
          onClick={() => setTab(0)}
        >
          Best Food
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink 
          active={tab === 1} 
          onClick={() => setTab(1)}
        >
          Burger
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#" disabled>
          Bread
        </NavLink>
      </NavItem>
    </Nav>
  )
}

export default Tabs