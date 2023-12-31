/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled, { css } from "styled-components";

interface NavProps {
  open?: boolean;
}

export const NavContainer = styled.div<NavProps>`
  position: absolute;
  top: 60px;
  right: calc((100vw - (1600px - 140px)) / 2);

  @media screen and (max-width: 1680px) {
    right: 30px;
  }

  @media screen and (max-width: 992px) {
    display: none;
    position: relative;
    background-color: yellowgreen;
  }
  ${({ open }) =>
    open &&
    css`
      .nav-icon__line:nth-child(1) {
        transform: rotate(45deg) translate(5px, 8px);
      }

      .nav-icon__line:nth-child(2) {
        transition: transform 0.7s cubic-bezier(0.7, 0, 0, 1);
        transform: translate(min(-45vw, -700px));
      }

      .nav-icon__line:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -8px);
      }
    `}
`;

export const NavIcon = styled.div<NavProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 20px;
  width: 30px;

  ${({ open }) =>
    open &&
    css`
      & > :nth-child(1) {
        transform: rotate(45deg) translate(5px, 8px);
      }
      & > :nth-child(2) {
        transition: transform 0.7s cubic-bezier(0.7, 0, 0, 1);
        transform: translate(min(-35vw, -600px));
      }
      & > :nth-child(3) {
        transform: rotate(-45deg) translate(5px, -8px);
      }
    `};
`;

export const NavIconLine = styled.div<NavProps>`
  height: 3px;
  width: 100%;
  background-color: #fff;
  pointer-events: none;
  transition: transform 0.5s cubic-bezier(0.7, 0, 0, 1);
`;

export const NavLinks = styled.nav<NavProps>`
  clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
  transition: clip-path 0.5s cubic-bezier(0.7, 0, 0, 1);
  position: absolute;
  top: -30px;
  right: 90px;
  display: flex;
  flex-direction: row;
  gap: 30px;

  @media screen and (max-width: 1400px) {
    gap: 20px;
  }

  a {
    background: none;
    border: none;
    padding: 30px;
    margin: 0;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 3px;
    font-size: 14px;
    text-decoration: none;
    position: relative;
    cursor: pointer;
  }

  ${({ open }) =>
    open &&
    css`
      transition: clip-path 0.8s cubic-bezier(0.7, 0, 0, 1);
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    `}
`;

export const LinkNav = styled.a`
  background: none;
  border: none;
  padding: 30px;
  margin: 0;
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 3px;
  font-size: 14px;
  text-decoration: none;
  position: relative;
`;
