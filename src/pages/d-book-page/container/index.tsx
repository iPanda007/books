import { createSearchParams, useNavigate } from "react-router-dom";
import { ChangeEvent, useState, useEffect,  } from "react";
import Layout from "../presentation/Layout";
import { useBookServices } from "../../../context/BookServices";
import { IBookList } from "../../../services/api";


const Container = () => {
  const { data, loading, favList, setFavList } = useBookServices();

  const { data: book } = { ...data };

  const [value, setValue] = useState("0");

  const query = useNavigate();

  useEffect(() => {
    query({
      search: createSearchParams({
        q: value,
      }).toString(),
    });
  }, [value]);

  const HandleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const HandleSelect = (item: IBookList) => {

    const isSelected = favList.find((value) => value.id === item.id);

    if (isSelected) {
      const filterValue = favList.filter((val) => val.id !== item.id);

      setFavList(filterValue);
    } else {
      setFavList([item, ...favList]);
    }
  };



  return (
    <div>
      <Layout
        favList={favList}
        HandleSelect={HandleSelect}
        loading={loading}
        data={book}
        HandleSearch={HandleSearch}
      />
    </div>
  );
};

export default Container;
