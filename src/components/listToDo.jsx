import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo, editCheckbox, getToDo } from "../redux/actions/todo-actions";
import { useState } from "react";
import InputToDo from "./inputToDo";
import CategoriesToDo from "./categoriesToDo";
import ActionToDo from "./actionToDo";

function ListToDo() {
  const dispatch = useDispatch();
  const { isLoading, todos } = useSelector((state) => state.todo);
  const [input, setInput] = useState("");

  useEffect(() => {
    dispatch(getToDo());
  }, []);

  const handleClick = (e) => {
    let newToDo = {
      status: false,
      value: input,
    };
    dispatch(addToDo(newToDo));
    setInput("");
  };

  const handleCheckbox = (id, status) => {
    const newStatus = !status;
    dispatch(editCheckbox(id, newStatus));
  };

  return (
    <div className="mx-auto flex justify-center items-center h-screen">
      <div className="p-10 rounded-md bg-slate-200 shadow-xl">
        <h1 className="font-bold text-xl md:text-3xl">
          What's the plan for today?
        </h1>
        <InputToDo />
        <CategoriesToDo />
        <div
          className={`mt-4 ${
            todos.length > 3 ? "md:grid md:grid-cols-2 md:gap-2" : ""
          }`}
        >
          {isLoading ? (
            <span className="loading loading-dots loading-sm"></span>
          ) : (
            todos.map((todo, index) => (
              <div
                className="flex gap-5 items-center justify-between px-4 py-2 bg-white rounded-md mb-4"
                key={todo.id}
              >
                <input
                  type="checkbox"
                  name=""
                  id=""
                  checked={todo.status}
                  onChange={() => handleCheckbox(todo.id, todo.status)}
                />
                <h1
                  className={`text-lg font-semibold text-center ${
                    todo.status ? "line-through" : ""
                  }`}
                  onClick={() => handleCheckbox(todo.id, todo.status)}
                >
                  {todo.value}
                </h1>
                <ActionToDo todo={todo} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default ListToDo;
