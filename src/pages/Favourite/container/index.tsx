import { useState } from "react";
import FavouriteListUi from "../presentation/FavouriteListUi";
import { IBookList } from "../../../services/api";
import FavouriteListBox from "../presentation/FavouriteListBox";
import React from "react";


// const Hello_World = ()=>(
//   "hello"
// )

const ContainerIndex = React.memo(({ favList }: { favList: IBookList[] }) => {

  const [isOpen,setIsOpen]  = useState(false)

  const HandleOpen = ()=>{
     setIsOpen(true)
     document.body.style.overflowY = "hidden"
  }

  const HandleClose = ()=>{
    setIsOpen(false)
    document.body.style.overflowY = "scroll"
  }

  return (
    <div>
      <FavouriteListUi 
       HandleOpen={HandleOpen}
            favList={favList}
      />
      <FavouriteListBox
         isOpen={isOpen} 
         HandleClose={HandleClose}
         favList={favList}
      />
    </div>
  );
});

export default ContainerIndex;
