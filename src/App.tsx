
import { useEffect } from 'react'
import AdminRoute from './routes/AdminRoutes'
import { APP_API, Mode } from './services/environment'


const App = () => {

  useEffect(()=>{
    fetch(APP_API)
    .then(response => response.json())
    .then(_json => {
       alert('Fetch success')
    })
  },[])
  return (
    <div>
   continuous Integration code lint and type lint Aung Kyaw Khaing {Mode}  {APP_API}
        <AdminRoute/>
    </div>
  )
}

export default App
