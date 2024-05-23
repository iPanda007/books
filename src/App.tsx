
import AdminRoute from './routes/AdminRoutes'
import { APP_API, Mode } from './services/environment'


const App = () => {


  return (
    <div>
   continuous Integration code lint and type lint Aung Kyaw Khaing {Mode}  {APP_API}
        <AdminRoute/>
    </div>
  )
}

export default App
