import React from "react";

function CategoriesToDo() {
  return (
    <div className="flex justify-start gap-3 mt-4">
      <button className="p-2 bg-blue-600 rounded-xl text-xs text-white">
        ALL
      </button>
      <button className="p-2 bg-slate-500 rounded-xl text-xs text-white">
        ACTIVE
      </button>
      <button className="p-2 bg-slate-500 rounded-xl text-xs text-white">
        COMPLETE
      </button>
    </div>
  );
}

export default CategoriesToDo;
