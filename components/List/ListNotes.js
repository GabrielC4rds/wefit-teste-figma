
import Cards from "../Cards/Cards";
import EmptyCard from '../EmptyCard/EmptyCard';
import React from "react";

export default function ListNotes(props) {
  const todoList = props.todosList;
  const removeTodos = props.removeTodos;
  return (
    <>
      {
        todoList.length === 0 ? <EmptyCard id="emptyCard" /> :
          todoList.map((item, index) => (
            <Cards key={index}
              index={index}
              todo={item.text}
              removeTodo={removeTodos}>
            </Cards>
          ))
      }
    </>

  )
}
