import styled from "styled-components";
import Link from "next/link";

import { SIZES } from "@/styles/theme";

export const Linked = styled(Link)`
  text-decoration: none;
`;

export const StyledLink = styled.a`
  background-color: #7a4fee;
  border: none;
  color: white;
  padding: 15px 45px;
  text-align: center;
  text-decoration: none;
  display: block;
  font-size: ${SIZES[1]};
  cursor: pointer;
  width: fit-content;
  max-width: 100%;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0 11px 5px -6px;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border: none;

  &:hover {
    background-color: #1e1f22;
    transform: translateY(-5px);
    box-shadow: rgba(50, 50, 93, 0.15) 0 14px 10px 0;
  }
`;
