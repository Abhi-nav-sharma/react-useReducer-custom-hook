import { useState } from "react";

export default function TodoInput({ handleAdd }) {
  const [state, setState] = useState("");
  return (
    <div>
      <input
        placeholder="Enter Something"
        value={state}
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
      <button
        onClick={() => {
          handleAdd(state);
          setState("");
        }}
      >
        Add
      </button>
    </div>
  );
}
