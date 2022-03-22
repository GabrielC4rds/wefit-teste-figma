
import { Input } from '../components/Input/Input.js'
import React from "react";
import { Container, MainDiv } from '../styles/HomeCard.module';
import ListNotes from './../components/List/ListNotes';

export default function Home() {
  const [todos, setTodos] = React.useState([]);
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <MainDiv>
      <Container>
        <Input id="mainInput" addTodo={addTodo}></Input>
        <ListNotes todosList={todos} removeTodos={removeTodo} />
      </Container>
    </MainDiv>
  )
}
