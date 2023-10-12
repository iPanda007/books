import React from "react";

const Header = React.memo(() => {
  return (
    <div className="p-2 mb-[50px] bg-white shadow-sm">
      <div className="">
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold">Available Book List</div>
          <img src="/dbooks.png" alt="" className="w-[120px] mb-[-25px]" />
        </div>
      </div>
    </div>
  );
});

export default Header;
