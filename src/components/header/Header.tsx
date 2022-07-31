import React from 'react'
import styled, { css } from 'styled-components'
import { BsPlus } from 'react-icons/bs'

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
// ======================================

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Name = styled.h1`
  font-family: 'DM Sans', sans-serif;
  color: #010101;
  text-transform: capitalize;
  font-size: 2rem;
  font-weight: 700;
`
const WelomeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const Greating = styled.h3`
  font-family: 'DM Sans', sans-serif;
  font-size: 2rem;
  font-weight: 500;
  color: #adb0bf;
  text-transform: capitalize;
  opacity: 0.6;
  margin-block: 0;
`
const AddCard = styled.div`
  background-color: #1e2e6a;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1),
    0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1),
    0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
`

const Header = () => {
  return (
    <HeaderWrapper>
      <Name>gedeon</Name>

      <WelomeWrapper>
        <Greating>welcome back!</Greating>
        <AddCard>
          <BsPlus color="#ffffff" size={30} className="add-card-icon" />
        </AddCard>
      </WelomeWrapper>
    </HeaderWrapper>
  )
}
export default Header
