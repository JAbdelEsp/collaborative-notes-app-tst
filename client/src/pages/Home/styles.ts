import styled from "styled-components";

export const Container = styled("div")``;
export const Button = styled("button")`
  margin-bottom: 10px;
  img {
    width: 20px;
  }
`;
export const ModalOverlay = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ModalContent = styled("div")`
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  width: 90%;
  max-width: 500px;

  .sentButton {
    margin-top: 10px;
    width: 100px;
    height: 40px;
    background-color: var(--dark);
    color: var(--white);

    &:hover {
      background-color: var(--transparent);
      color: var(--dark);
      border: 4px solid var(--dark);
      transition: all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
    }
  }
`;
