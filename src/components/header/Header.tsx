import React from 'react'
import styled, { css } from 'styled-components'

// const logo = require('../images/logo.svg')

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1.2rem;
  box-shadow: -2px -4px 9px 0px rgb(0 0 0 / 75%);
  background-color: #f2f2f2;
  height: 2.4rem;
`

const LogoContainer = styled.div`
  display: block;
`
const ItemContainer = styled.div`
  display: block;
`

const NavItem = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
`
const Item = styled.li<{ space?: boolean }>`
  font-size: 1.2rem;
  text-transform: capitalize;
  color: #000;

  & a {
    font-size: inherit;
    text-transform: inherit;
    color: inherit !important;
    text-decoration: none;
  }

  ${(props) =>
    props.space &&
    css`
      margin-right: 1.6rem;
    `}

  @media (max-width:599px) {
    font-size: 0.8rem;
  }
`

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>logo</LogoContainer>

      <ItemContainer>
        <NavItem>
          <Item space>link_1</Item>
          <Item>link_2</Item>
        </NavItem>
      </ItemContainer>
    </HeaderContainer>
  )
}
export default Header
