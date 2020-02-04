import styled from 'styled-components';
import { theme } from './theme'

export const StyledLoadMoreButton = styled.button`
  background: ${theme.darkBlue};
  width: 25%;
  min-width: 200px;
  height: 70px;
  color: ${theme.white};
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 40px;
  font-family: 'Abel', sans-serif;
  font-size: 28px;
  max-width: 1280px;
  display: block;
  margin: 20px auto;
  padding: 0 20px;
  outline: none;

  :hover {
    opacity: 0.8;
  }
`;
