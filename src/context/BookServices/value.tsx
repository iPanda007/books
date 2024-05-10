import { useRequest } from "ahooks";
import { useEffect,useState } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import { apiBookService } from "../../services/api";
import { useQuery } from "../../hooks/useQuery";
import { IBookList } from "../../services/api";

export type Value = ReturnType<typeof useProviderValue>;

export const useProviderValue = () => {

  const [favList,setFavList] = useState<IBookList[]>([])

  const query = useQuery();

  const value = query.get("q") || "0";

  const history = useNavigate();

  
  const { data, loading, refresh } = useRequest(() =>
    !value || value === "recent"
      ? apiBookService("recent")
      : apiBookService("search/" + value!),{
        debounceWait: !value || value === "recent" ? 0 : 300
      }
  );

  useEffect(() => {
    if (!value) {
      history({
        search: createSearchParams({
          q: "recent",
        }).toString(),
      });
    }
    refresh()
  }, [value]);

  return {
    favList,
    setFavList,
    data,
    loading,
    refresh,
  };
};
