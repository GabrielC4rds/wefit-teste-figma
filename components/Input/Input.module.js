import styled from 'styled-components'

export const Main = styled.form`
  align-items: center;
  background: #fff;
  display: flex;
  height: 80px;
  justify-content: space-between;
  top: 15vh;
  margin-top: 10px;
  width: 352px;
  z-index: 99;

`;

export const InputInsert = styled.input`
  border: none;
  height: 48px;
  width: 288px;
  padding: 0 20px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  &:focus{
      outline: none;
  }
`;

export const AddButton = styled.button`
  align-items: center;
  background: #40d9b8;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  height: 48px;
  justify-content: center;
  width: 48px;
  img{
    width: 24px;
    height: 24px;
  }
`;