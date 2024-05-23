
import AdminRoute from './routes/AdminRoutes'
import { Mode } from './services/environment'


const App = () => {


  return (
    <div>
   continuous Integration code lint and type lint Aung Kyaw Khaing {Mode}
        <AdminRoute/>
    </div>
  )
}

export default App
