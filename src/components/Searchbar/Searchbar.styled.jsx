import styled from 'styled-components';

export const Header = styled.header`
  margin: 0 auto;
  position: sticky;
  z-index: 100;
  top: 0;
  left: 0;
  pading 10px;

  background-color: blue;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
`;
export const SearchForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  margin-right: auto;
  margin-left: auto;
  width: 100%;
`;
export const SearchBtn = styled.button`
  display: inline-block;
  border: 0;
  cursor: pointer;
  outline: none;
  opacity: 0.6;
`;

export const SearchInput = styled.input`
  display: flex;

  width: 600px;
  height: 30px;
  font: inherit;
  border: none;
  outline: none;
  border: 1px solid darkblue;
`;