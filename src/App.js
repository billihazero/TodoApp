import { useRef, useState } from "react";
import "./App.css";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "책 읽기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "밥 먹기",
    createdDate: new Date().getTime(),
  },
];

function App() {
  const idRef = useRef(3);

  const [todo, setTodo] = useState(mockTodo);

  const onCreate = (content) => {
    const newItem = {
      id: idRef.current,
      isDone: false,
      content,
      createdDate: new Date().getTime,
    };

    setTodo([newItem, ...todo]); //newItem과 todo의 모든 배열요소를 호출한다. '...' 배열의 모든 요소 의미
    idRef.current += 1;
  };

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList />
    </div>
  );
}

export default App;
