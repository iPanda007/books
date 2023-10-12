import { useRoutes,Navigate } from "react-router-dom"
import { BookList } from "./Element"


const AdminRoute = () => {


  return useRoutes([
      {
            path:"",
            element: <Navigate to="/booklist"/>
      },
      {
            path:"/booklist",
            element: <BookList/>
      }
  ])
}

export default AdminRoute