import styled from "styled-components";

export const Container = styled("div")`
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
`;

export const Title = styled("h2")`
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const LeaderBoardTable = styled("table")`
  width: 100%;
  border-collapse: collapse;
  text-align: left;

  th,
  td {
    padding: 0.75rem;
    border-bottom: 1px solid #ccc;
  }

  th {
    background: #f5f5f5;
  }

  tr:hover {
    background-color: #f0f8ff;
  }
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
