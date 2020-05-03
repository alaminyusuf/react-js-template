/* eslint-disable no-use-before-define */
import React from 'react'
import { Link } from 'react-router-dom'
import Styled from 'styled-components'

const Navbar = () => (
  <Header>
    <NavStyle>
      <HeadingWrapper>
        <h1>Globe News</h1>
      </HeadingWrapper>
      <ul style={ulStyle}>
        <li style={aStyle}>
          <Link to="/">Home</Link>
        </li>
        <li style={aStyle}>
          <Link to="/article">Article</Link>
        </li>
        <li style={aStyle}>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </NavStyle>
  </Header>
)

const ulStyle = { display: 'flex', justifyContent: 'spaceAround' }

const aStyle = { padding: '0 1rem', color: '#f4f4f4' }

const NavStyle = Styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  width: 100%;
  margin-bottom: 1rem;
`

const Header = Styled.header`
  background-color: #6a1b9a;
  color: #f4f4f4;
  display: flex;
  font-weight: bold;
  padding: 10px 12px;
`

const HeadingWrapper = Styled.div`
  /*  */
  color: #f4f4f4;
  font-weight: bold;
`

export default Navbar
