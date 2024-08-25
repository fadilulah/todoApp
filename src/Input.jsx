import React, { useState } from "react";

function Input() {
  const [userInput, setUserInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handelInput = (e) => {
    setUserInput(e.target.value);
  };
  const handelDisplayTodolists = () => {
    setTodoList([...todoList, userInput]);
  };
  const handelDelete = (index) => {
    const filteredTodo = todoList.filter((item) => item !== todoList[index]);
    setTodoList(filteredTodo);
  };
  const handelClear = ()=>{
    setTodoList([])
  }
  return (
    <>
      <div className="flex flex-col p-[10rem] w-[100vw] items-center ">
        <div className="flex gap-4">
          <input className="h-[2rem] border border-black rounded-md" type="text" onChange={handelInput} />
          <button className="h-[2rem] w-[7rem] border border-emerald-500 rounded-md" onClick={handelDisplayTodolists}>Add Item </button>
        </div>
        <ul className="flex flex-col items-center gap-4 w-[50%] h-[50vh] py-10">
          {todoList.map((item, index) => {
            return (
              <div className="flex gap-[3rem]">
                <li key={index}>{item}</li>
                <button className="h-[2rem] w-[7rem] border border-rose-500 rounded-md" onClick={() => handelDelete(index)}>Delete</button>
              </div>
            );
          })}
        </ul>
        { todoList.length>0 ? <button onClick={handelClear}>clear</button> : null }
      </div>
    </>
  );
}

export default Input;
