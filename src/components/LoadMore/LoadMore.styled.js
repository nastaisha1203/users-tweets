import styled from 'styled-components';

export const Button = styled.button`
  padding: 14px 20px;
  border-radius: 8px;
  background-color: rgb(103 63 197);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: block;
  margin-right: auto;
  margin-left: auto;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover,
  &:focus {
    background-color: #4b2a99;
  }
`;
