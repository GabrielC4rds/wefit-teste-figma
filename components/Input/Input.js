import { Main, InputInsert, AddButton } from './Input.module';
import React from "react";

export function Input({ addTodo }) {
  const [value, setValue] = React.useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };
  return (
    <>
      <Main id="inputMain" onSubmit={handleSubmit}>
        <InputInsert type="text" value={value} onChange={e => setValue(e.target.value)} placeholder="Digite"></InputInsert>
        <AddButton type="submit"><img src="../ic-add.png" /></AddButton>
      </Main>
    </>

  )
}

export default Input;