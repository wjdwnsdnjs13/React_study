import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components' //npm install styled-components 로 설치해야 쓸 수 있음.
import { MdDone, MdDelete } from 'react-icons/md'; //npm install react-icons 해서 깔아야함.
import TodoCreate from './component/TodoCreate';

//npm install styled-components 로 설치해야 쓸 수 있음.
const NoteDelete = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;
const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;
const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${NoteDelete} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${props =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;


const ToyProject_note = () => {
  const [todos, setTodos] = useState([]);




  useEffect(
    // async () => {
    //   await axios.get("/note/all")
    //     .then((response) => {
    //       console.log(response.data);
    //       const statusCode = response.status;
    //       if (statusCode === 200) {
    //         console.log("로딩완료")
    //         setTodos(response.data);
    //       } else if (statusCode === 400) {
    //         alert("로딩 실패!!");
    //       }
    //     }
    //     )
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    () => {
      selectnoteAll();
    }
    , [])

  const selectnoteAll = () => {
    axios.get("/note/all")
      .then((response) => {
        console.log(response.data);
        const statusCode = response.status;
        if (statusCode === 200) {
          console.log("로딩완료")
          setTodos(response.data);
        } else if (statusCode === 400) {
          alert("로딩 실패!!");
        }
      }
      )
      .catch((error) => {
        console.log(error);
      });
  }


  const onToggle = async (todoId, todoCompleted) => {
    if (todoCompleted == 0) {
      await axios.get("/note/todoCompleted",
        {
          params: {
            todoId: todoId

          }
        }
      )
        .then((response) => {
          console.log(response.data);
          const statusCode = response.status;
          if (statusCode === 200) {
            console.log(todoId + "의 상태가 " + todoCompleted + "가 되었습니다.")
          } else if (statusCode === 400) {
            alert("오류발생");
          }
        }
        )
        .catch((error) => {
          console.log(error);
        });
    } else {
      await axios.get("/note/todoNoneCompleted",
        {
          params: {
            todoId: todoId

          }
        }
      )
        .then((response) => {
          console.log(response.data);
          const statusCode = response.status;
          if (statusCode === 200) {
            console.log(todoId + "의 상태가 " + todoCompleted + "가 되었습니다.")
          } else if (statusCode === 400) {
            alert("오류발생");
          }
        }
        )
        .catch((error) => {
          console.log(error);
        });

    }
    selectnoteAll();
  };
  const deleteBtn = async (todoId) => {
    await axios.get("/note/todoDelete",
      {
        params: {
          todoId: todoId

        }
      }
    )
      .then((response) => {
        console.log(response.data);
        const statusCode = response.status;
        if (statusCode === 200) {
          console.log(todoId + "가 삭제되었습니다.")
        } else if (statusCode === 400) {
          alert("오류발생");
        }
      }
      )
      .catch((error) => {
        console.log(error);
      });

    selectnoteAll();

  }
  return (
    <div className='noteTemplete'>
      <div className='todoLeftTask'>할 일 {todos.filter(x => x.todoCompleted !== 1).length}개 남음</div>
      <TodoListBlock>
        {todos.map((todo) => (
          <TodoItemBlock key={todo.todoId}>
            <CheckCircle done={Boolean(todo.todoCompleted)} onClick={() => onToggle(todo.todoId, todo.todoCompleted)}>
              {Boolean(todo.todoCompleted) && <MdDone />}
            </CheckCircle>
            <Text done={Boolean(todo.todoCompleted)}>[{todo.todoTitle}]&nbsp; 
              {todo.todoDescription}
              <NoteDelete onClick={() => deleteBtn(todo.todoId)}><MdDelete /></NoteDelete></Text>
          </TodoItemBlock>
        ))}
      </TodoListBlock>
      <TodoCreate/>
    </div>
  )
}

export default ToyProject_note
