import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../redux/actions/todo-actions";

function InputToDo() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  
  const handleClick = (e) => {
    let newToDo = {
        status : false,
        value : input
    }
    dispatch(addToDo(newToDo))
    setInput("")
  }


  return (
    <div className="flex mt-4 justify-between gap-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full rounded-sm border-2 border-slate-200 p-2"
      />
      <button
        className="px-3 py-2 bg-blue-600 rounded-md font-semibold text-white"
        onClick={handleClick}
      >
        Add
      </button>
    </div>
  );
}

export default InputToDo;
