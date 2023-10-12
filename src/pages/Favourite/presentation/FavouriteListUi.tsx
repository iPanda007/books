import React from "react";
import { IBookList } from "../../../services/api";

const FavouriteListUi = React.memo(({
  favList,
  HandleOpen
}: {
  favList: IBookList[];
  HandleOpen: () => void;
}) => {
  return (
    <div className="fixed flex justify-center bottom-0 left-0 w-full bg-gradient-to-b from-transparent to-[#ffffff] py-4 backdrop-blur-[1px]">
      <button
        disabled={favList.length > 0 ? false : true}
        onClick={HandleOpen}
        className="px-3 py-2 relative  bg-[#4361ee] text-sm rounded-md text-white"
      >
        {favList.length > 0 && (
          <span className="absolute rounded-[20px] text-xs text-white top-[-10px] left-[-10px] bg-red-500 py-1 px-2">
            {favList.length}
          </span>
        )}
        Favourite List
      </button>
    </div>
  );
});

export default FavouriteListUi;
