import { useRoutes,Navigate } from "react-router-dom"
import { BookList } from "./Element"
import React from "react"


const AdminRoute = React.memo(() => {


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
})

export default AdminRoute