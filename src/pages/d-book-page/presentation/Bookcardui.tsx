import React from "react";
import { IBookList } from "../../../services/api";

const Bookcardui = React.memo(({
  id,
  title,
  image,
  favList,
  HandleSelect,
}: IBookList & { HandleSelect: () => void; favList: IBookList[] }) => {

  const isSelected = favList.find((item) => item.id === id);
  
  return (
    <div
      onClick={HandleSelect}
      className="bg-white shadow-sm rounded-[15px]   mb-[140px] px-7  cursor-pointer "
    >
      <div className="flex justify-center mt-[-160px]">
        <img
          src={image}
          alt=""
          className="max-w-[280px] object-contain max-h-[280px] rounded-md"
        />
      </div>

      <div className="mt-4 flex flex-col items-center">
        <p className="text-lg whitespace-nowrap font-semibold mb-3 ">
          {title.length > 30 ? <>{title.substring(0, 25)}...</> : title}
        </p>

        {!isSelected ? (
          <button className="bg-[#FDCE29] mb-[-15px] text-sm  rounded-[20px] py-2 px-3 font-semibold">
            Save To Favourite
          </button>
        ) : (
          <button className="bg-[#000] text-white mb-[-15px] text-sm  rounded-[20px] py-2 px-3 font-semibold">
            Already Save
          </button>
        )}
      </div>
    </div>
  );
});

export default Bookcardui;
