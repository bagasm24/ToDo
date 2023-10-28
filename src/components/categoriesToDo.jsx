import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  todoActive,
  todoAll,
  todoComplete,
} from "../redux/actions/todo-actions";
import { useState } from "react";

function CategoriesToDo({ todos }) {
  const [isAllClick, setIsAllClick] = useState(true);
  const [isActiveClick, setIsActiveClick] = useState(false);
  const [isCompleteClick, setIsCompleteClick] = useState(false);
  const dispatch = useDispatch();
  const handleAll = (todos) => {
    dispatch(todoAll(todos));
    setIsAllClick(true);
    setIsActiveClick(false);
    setIsCompleteClick(false);
  };
  const handleComplete = (todos) => {
    dispatch(todoComplete(todos));
    setIsAllClick(false);
    setIsActiveClick(false);
    setIsCompleteClick(true);
  };
  const handleActive = (todos) => {
    dispatch(todoActive(todos));
    setIsAllClick(false);
    setIsActiveClick(true);
    setIsCompleteClick(false);
  };
  return (
    <div className="flex justify-start gap-3 mt-4">
      <button
        className={`${
          isAllClick ? "bg-blue-600" : "bg-slate-500"
        } p-2 rounded-xl text-xs text-white`}
        onClick={() => handleAll(todos)}
      >
        ALL
      </button>
      <button
        className={`${
          isActiveClick ? "bg-blue-600" : "bg-slate-500"
        } p-2 rounded-xl text-xs text-white`}
        onClick={() => handleActive(todos)}
      >
        ACTIVE
      </button>
      <button
        className={`${
          isCompleteClick ? "bg-blue-600" : "bg-slate-500"
        } p-2 rounded-xl text-xs text-white`}
        onClick={() => handleComplete(todos)}
      >
        COMPLETE
      </button>
    </div>
  );
}

export default CategoriesToDo;
