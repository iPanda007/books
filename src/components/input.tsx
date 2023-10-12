import React, { ChangeEvent } from "react";
type InputProps = {
  HandleSearch: (value: ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({ HandleSearch }) => {
  return (
    <div className=" ml-[-60px] ">
      <input
        onChange={HandleSearch}
        className="px-4 py-2 rounded shadow-sm outline-none "
        autoFocus
        placeholder="search book"
        type="text"
        name=""
        id=""
      />
    </div>
  );
};

export default Input;
