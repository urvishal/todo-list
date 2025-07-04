import "./App.css";
import Header from "./MyComponent/Header";
import AddTodo from "./MyComponent/AddTodo";
import Todos from "./MyComponent/Todos";
import Footer from "./MyComponent/Footer";
import React, {useState} from 'react';

function App() {
  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo);
    setTodos(todos.filter((e) => {
      return e!==todo;
    }))
  };
  const addTodo=(title,desc) =>{
  console.log("I am adding this todo" ,title, desc);
  let sno;
    if(todos.length==0){
      sno = 0;
    }
    else{
     sno = todos[todos.length-1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }
  const [todos, setTodos] = useState ([
    {
      sno: 1,
      title: "Go to the Market",
      desc: "You need to go to the market to get this job done",
    },
    {
      sno: 2,
      title: "Go to the School",
      desc: "You need to go to the School to get this job done",
    },
    {
      sno: 3,
      title: "Go to the Mall",
      desc: "You need to go to the Mall to get this job done",
    },
  ]);
  return (
    <>
      <Header title="My Todos List" searchBar={false} />
      <AddTodo addTodo = {addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer />
    </>
  );
}

export default App;
