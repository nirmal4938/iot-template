import './App.css'
import { LoginForm } from './component/LoginForm'
import './styles/GlobalComponentStyle.css'
import './styles/LayoutStyle.css'
import { MainLayout } from './Layout/MainLayout'
function App() {
  return (
    <div className='Main-Layout-Container'>
      {/* <LoginForm /> */}
      <MainLayout>Hello World</MainLayout>
    </div>
  )
}

export default App
