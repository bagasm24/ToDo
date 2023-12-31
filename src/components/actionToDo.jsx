import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteToDo, editValueToDo } from "../redux/actions/todo-actions";
import { useState } from "react";
import { useEffect } from "react";

function ActionToDo({ todo }) {
  const dispatch = useDispatch();
  const { isLoading, todos } = useSelector((state) => state.todo);
  const [newInput, setNewInput] = useState("");

  const handleOpenModalDelete = (id) => {
    const modal = document.getElementById("my_modal_2");
    localStorage.setItem("todoIdToDelete", id);
    modal.showModal();
  };

  const handleDelete = () => {
    const modal = document.getElementById("my_modal_2");
    const todoId = localStorage.getItem("todoIdToDelete");
    modal.close();
    dispatch(deleteToDo(todoId));
    localStorage.removeItem("todoIdToDelete");
  };

  const handleOpenModalEdit = (id) => {
    const modal = document.getElementById("my_modal_1");
    localStorage.setItem("todoIdToEditValue", id);
    modal.showModal();
  };

  const handleEdit = (e) => {
    e.preventDefault();
    const modal = document.getElementById("my_modal_1");
    const todoId = localStorage.getItem("todoIdToEditValue");
    modal.close();
    let value = newInput
    dispatch(editValueToDo(value, todoId))
    localStorage.removeItem("todoIdToEditValue");
  };
  return (
    <div className="flex gap-2">
      <button
        className="btn hover:bg-blue-600 text-slate-500 hover:text-white"
        onClick={() => handleOpenModalEdit(todo.id)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit</h3>
          <input
            type="text"
            value={newInput}
            onChange={(e) => setNewInput(e.target.value)}
            className="w-full rounded-sm border-2 border-slate-200 p-2"
          />
          <div className="modal-action">
            <form method="dialog" className="flex gap-1">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn" onClick={handleEdit}>
                Yes, Sure
              </button>
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      <button
        className="btn hover:bg-red-600 text-slate-500 hover:text-white"
        onClick={() => handleOpenModalDelete(todo.id)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Are you sure you want to delete this item?</p>
          <div className="modal-action">
            <form method="dialog" className="flex gap-1">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn" onClick={() => handleDelete(todo.id)}>
                Yes, Sure
              </button>
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default ActionToDo;
