import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage'
import NavbarPart from './Component/Navbar'
import Footer from './Component/Footer'
import ProfilePage from './Pages/Profile';
import Sidebar from './Component/Sidebar';
import AuthPage from './Pages/AuthPage';
function App() {
  return (
    <div className="flex min-h-screen w-screen">

      <aside className="hidden sm:flex w-16 bg-[#BBA782] flex-col items-center py-80">
        <Sidebar/>
      </aside>

      <main className="flex-1 bg-gray-50">
        <NavbarPart/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
          <Route path='/auth' element={<AuthPage/>}/>
        </Routes>
        <Footer/>
    </main>
    </div>
  )
}

export default App
