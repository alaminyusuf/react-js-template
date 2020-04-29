import React from 'react'
import { Link } from 'react-router-dom'
import Styled from 'styled-components'

const Navbar = () => (
  <Header>
    <NavStyle>
      <HeadingWrapper>
        <h1>Globe News</h1>
      </HeadingWrapper>
      <UlStyle>
        <ul>
          <AStyle>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </AStyle>
        </ul>
      </UlStyle>
    </NavStyle>
  </Header>
)

const NavStyle = Styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  width: 100%;
  opacity: 0.9;
  margin-bottom: 1rem;
`

const Header = Styled.header`
  background-color: #6a1b9a;
  color: #f4f4f4;
  font-weight: bold;
  padding: 10px 12px;
`

const HeadingWrapper = Styled.div`
  /*  */
  color: #f4f4f4;
  font-weight: bold;
`

const UlStyle = Styled.ul`
  display: flex;
  justify-content: space-around;
`

const AStyle = Styled.a`
  color: #f4f4f4;
  justify-content: space-around;
`

export default Navbar
