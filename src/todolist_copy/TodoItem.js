import './App.css';
import styled from 'styled-components'
import React from 'react'

const TodoItemWrapper = styled.div`
  display:flex;
  align-item:center;
  justify-content:space-between;
  padding:8px 16px;
  border: 1px solid black;
`

const TodoContent = styled.div`
  color:rgba(2, 40, 77);
`
const TodoButtonWrapper = styled.div``




const Button = styled.button`
  color: black;
  padding: 4px;

  &:hover {
    color: red;
  }

  & + & {
    margin-left: 4px;
  }
`

 const RedButton = styled(Button)`
  color:red;
 `

export default function TodoItem({className, size ,todo , handleDeleteTodo}) {
  return (
   <TodoItemWrapper className={className} data-todo-id={todo.id}>
      <TodoContent size={size}>{todo.content}</TodoContent>
      <TodoButtonWrapper>
        <Button>已完成</Button>
        <RedButton onClick={() => {
          handleDeleteTodo(todo.id)
        }}>刪除</RedButton>
      </TodoButtonWrapper>
   </TodoItemWrapper>
  )
}