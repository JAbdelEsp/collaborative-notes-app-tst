import styled from "styled-components";

export const Link = styled("a")`
  background-color: lightblue;
  text-decoration: none;
  color: inherit;
  &:hover {
    transform: scale(1.03);
    transition: all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
    box-shadow: 0 8px 20px rgba(0, 128, 255, 0.3);
  }
`;

export const Wrapper = styled("div")`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(150px, auto);
  gap: 10px;

  @media screen and (max-width: 440px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

export const Column = styled("div")`
  padding: 5px;
`;

export const Content = styled("div")`
  width: 100%;
`;

export const ChildDate = styled("div")`
  width: 100%;
  text-align: right;
  margin-bottom: 10px;
`;
