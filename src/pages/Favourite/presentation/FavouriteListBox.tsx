import { ChangeEvent,useEffect,useState } from "react";
import Input from "../../../components/input";
import { IBookList } from "../../../services/api";
import React from "react";

const FavouriteListBox = React.memo(
  ({
    favList,
    HandleClose,
    isOpen,
  }: {
    isOpen: boolean;
    favList: IBookList[];
    HandleClose: () => void;
  }) => {


    return (
      <div
        className={`fixed  ${
          isOpen
            ? " transition-all duration-300 opacity-100 z-[100000]  bg-[rgba(0,0,0,0.19)]  "
            : " opacity-0 z-[-50000] bg-none delay-500 "
        } transition-all duration-300 w-full flex items-center justify-center     h-screen top-0 left-0 
      `}
      >
        <div
          className={`w-[430px] rounded-[15px] p-4 bg-white transition-all duration-500 ${
            isOpen ? "scale-1 delay-500" : "scale-0"
          } `}
        >
   
          <div className="max-h-[300px] relative overflow-y-scroll">
            {favList.map((item: IBookList) => (
              <div key={item.id}>
                <div className="flex gap-2 mb-3">
                  <div>
                    <img
                      className="max-w-[150px] max-h-[100px] rounded"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <div>
                    <div className="text-base mb-1">{item.title}</div>
                    <div className="text-sm mb-1">{item.subtitle}</div>
                    <div className="text-xs mb-1">{item.authors}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex mt-[-40px] justify-center bottom-0 left-0 w-full bg-gradient-to-b from-transparent to-[#fff] py-[33px] backdrop-blur-[0.4px]"></div>
          <div className="text-center">
            <button
              onClick={HandleClose}
              className="text-sm mt-4 bg-[#4361ee] rounded px-3 py-2 text-white"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
);

export default FavouriteListBox;
