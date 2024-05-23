import React from 'react'
import AdminRoute from './routes/AdminRoutes'
import { Mode } from './services/environment'

const App = () => {

 console.log("afsdf")
 const x = 1;
  return (
    <div>
   continuous Integration code lint and type lint {Mode}
        <AdminRoute/>
    </div>
  )
}

export default App
