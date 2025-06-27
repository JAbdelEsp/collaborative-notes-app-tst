import styled from "styled-components";

export const Container = styled("div")`
  padding: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
`;

export const Header = styled("div")`
  padding: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
`;

export const BackButton = styled("button")`
  background-color: var(--main-color-2);
  border: none;
  padding: 0.2rem 0.5rem;
  margin: 5px;
  border-radius: 0.5rem;
  cursor: pointer;
  img {
    width: 20px;
  }
`;

export const Info = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Warning = styled("div")`
  background-color: #fff;
  color: #a00;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
`;
