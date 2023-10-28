import React from "react";
import { useState } from "react";

function ModalEdit({todo}) {
  const [newInput, setNewInput] = useState();
  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Edit</h3>
        <input
          type="text"
          value={newInput}
          placeholder={todo.value}
          onChange={(e) => setNewInput(e.target.value)}
          className="w-full rounded-sm border-2 border-slate-200 p-2"
        />
        <div className="modal-action">
          <form method="dialog" className="flex gap-1">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn" onClick={() => handleEdit(todo.value)}>
              Yes, Sure
            </button>
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}

export default ModalEdit;
