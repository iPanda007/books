import { ChangeEvent } from "react";
import Header from "./Header";
import Input from "../../../components/input";
import Bookcardui from "./Bookcardui";
import Loading from "../../../components/loading";
import { IBookService, IBookList } from "../../../services/api";
import FavouriteContainer from "../../Favourite";
import React from "react";

type LayoutProps = {
  HandleSearch: (vlaue: ChangeEvent<HTMLInputElement>) => void;
  data: IBookService | undefined;
  loading: boolean;
  HandleSelect: (item: IBookList) => void;
  favList: IBookList[];
};

const Layout = React.memo(({
  HandleSearch,
  data,
  loading,
  HandleSelect,
  favList,
}: LayoutProps) => {


  const { total, books } = { ...data };



  return (
    <div>
      <Header />

      <div className="flex items-center justify-between px-1 mb-[190px]">
        <p className="text-xl font-semibold">Total : {total}</p>
        <Input HandleSearch={HandleSearch} />
        <div></div>
      </div>

      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-20 px-10">
          {books !== undefined ? (
            <>
              {books?.map((item: IBookList) => (
                <Bookcardui
                  favList={favList}
                  HandleSelect={() => HandleSelect(item)}
                  {...item}
                  key={item.id}
                />
              ))}
            </>
          ) : (
            <div className="text-center col-span-3 text-lg font-bold">
              <p>Not Found</p>
            </div>
          )}
        </div>
      )}
      <FavouriteContainer favList={favList} />
    </div>
  );
});

export default Layout;
