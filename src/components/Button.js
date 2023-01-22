import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  color: white;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  height: 100%;
  background-color: green;
  border-radius: 10px;
  &:hover {
    transform: scale(1.05);
  }
  cursor: pointer;
`;

export default StyledButton;
