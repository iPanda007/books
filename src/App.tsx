
import { useEffect } from 'react'
import AdminRoute from './routes/AdminRoutes'
import { APP_API, Mode } from './services/environment'


const App = () => {
 console.log("akk",APP_API,Mode)
  useEffect(()=>{
    fetch(APP_API)
    .then(response => response.json())
    .then(()=> {
       alert('Fetch success')
    })
  },[])
  return (
    <div>
   continuous Integration code lint and type lint Aung Kyaw Khaing {Mode}  Hello world I am fetching API
        <AdminRoute/>
    </div>
  )
}

export default App
