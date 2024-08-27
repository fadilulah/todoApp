import React, { useState } from "react";

function Input() {
  const [userInput, setUserInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [updateInput, setUpdateInput] = useState("");

  const handelInput = (e) => {
    setUserInput(e.target.value);
  };
  const handelDisplayTodolists = () => {
    if (!userInput) return;
    setTodoList([...todoList, userInput]);
  };
  const handelDelete = (index) => {
    const filteredTodo = todoList.filter((item) => item !== todoList[index]);
    setTodoList(filteredTodo);
  };

  const handelNewInput = (e) => {
    setUpdateInput(e.target.value);
  };

  const handelClear = () => {
    setTodoList([]);
  };
  const toggleShow = (index) => {
    setEditingIndex(index);
    setUpdateInput(todoList[index]);
  };
  const toggleUnshow = (index) => {
    if (!updateInput) return;
    const updatedList = [...todoList];
    updatedList[index] = updateInput;
    setTodoList(updatedList);
    setEditingIndex(null);
    setUpdateInput("");
  };
  return (
    <>
      <div className="flex flex-col p-[10rem] w-[100vw] items-center ">
        <h2 className="mb-10 text-5xl text-violet-600">Todo App</h2>
        <div className="flex gap-4">
          <input
            className="h-[4rem] border border-violet-600 rounded-md w-[40rem] px-12"
            type="text"
            placeholder="Add An Item"
            onChange={handelInput}
          />
          <button
            className="h-[4rem] w-[10rem] bg-emerald-500 border text-2xl text-violet-100 rounded-xl"
            onClick={handelDisplayTodolists}
          >
            Add Item
          </button>
        </div>
        <ul className="flex flex-col items-center gap-4 w-[50%] max-h-[50vh] py-10">
          {todoList.map((item, index) => {
            return (
              <div className="flex gap-[3rem]">
                {editingIndex !== index ? (
                  <li key={index}>{item}</li>
                ) : (
                  <>
                    <input
                      className="h-[2rem] border border-black rounded-md"
                      type="text"
                      onChange={handelNewInput}
                    />{" "}
                    <button
                      className="h-[2rem] w-[7rem] border border-amber-500 rounded-md "
                      onClick={() => {
                        toggleUnshow(index);
                      }}
                    >
                      Update
                    </button>
                  </>
                )}
                <button
                  className="h-[2rem] w-[7rem] border border-rose-500 rounded-md"
                  onClick={() => handelDelete(index)}
                >
                  Delete
                </button>
                <button
                  className="h-[2rem] w-[7rem] border border-rose-500 rounded-md"
                  onClick={() => {
                    toggleShow(index);
                  }}
                >
                  Edit
                </button>
              </div>
            );
          })}
        </ul>
        {todoList.length > 0 ? (
          <button
            className="h-[3rem] text-[1.5rem] w-[8rem] border bg-rose-500 rounded-lg"
            onClick={handelClear}
          >
            CLEAR
          </button>
        ) : null}
      </div>
    </>
  );
}

export default Input;
