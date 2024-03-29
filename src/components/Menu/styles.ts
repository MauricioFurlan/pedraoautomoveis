import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

export default createGlobalStyle`
body {
  --bodyPaddingTop: 94px;
  padding-top: var(--bodyPaddingTop);
}
@media (max-width: 800px) {
  body {
    --bodyPaddingTop: 40px;
    padding-top: var(--bodyPaddingTop);
  }
}
`;

export const NavContainer = styled.nav`
  width: 100%;
  height: 94px;
  z-index: 100;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-left: 5%;
  padding-right: 5%;

  background: var(--gray);
  /* border-bottom: 2px solid var(--blue); */

  @media (max-width: 800px) {
    height: 60px;
    justify-content: center;
  }
`;

export const LogoLink = styled(Link)`
  display: flex;
  justify-content: center;
  outline: none;
`;

export const Logo = styled.img`
max-width: 568px;
   filter: hue-rotate(354deg) brightness(90%) contrast(99%);
  @media (max-width: 800px) {
    margin-right: -5px;
    max-width: 15.2rem;
    transform: scale(0.75);
    
    &:hover {
    &:focus {
      opacity: 0.5;
    }
    }
  }
`;

export const Button = styled(Link)`
  color: var(--blue);
  border: 1px solid var(--blue);
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity 0.3s;

  &:hover,
  &:focus {
    opacity: 0.5;
  }

  @media (max-width: 800px) {
    position: fixed;
    color: var(--gray);
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--blue);
    border-radius: 0;
    border: 0;
    text-align: center;
  }
`;

export const ButtonAdmin = styled(Link)`
  color: var(--primary);
  border: 1px solid var(--primary);
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity 0.3s;
  margin-right: 10px;

  &:hover,
  &:focus {
    opacity: 0.5;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;
