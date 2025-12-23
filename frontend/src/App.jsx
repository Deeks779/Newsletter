import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage'
import NavbarPart from './Component/Navbar'
import Footer from './Component/Footer'
import ProfilePage from './Pages/Profile';
import Sidebar from './Component/Sidebar';
import AuthPage from './Pages/AuthPage';
import AboutUs from './Pages/AboutUs';
import NewsEventsPage from './Pages/NewsEventsPage';
import EmployeeCenter from './Pages/EmployeeCenter';
import ResourceLibrary from './Pages/ResourceLibrary';
import CommunitiesPage from './Pages/CommunitiesPage';
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
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/events' element={<NewsEventsPage/>}/>
          <Route path='/emp-center' element={<EmployeeCenter/>}/>
          <Route path='/library' element={<ResourceLibrary/>}/>
          <Route path='/communities' element={<CommunitiesPage/>}/>
        </Routes>
        <Footer/>
    </main>
    </div>
  )
}

export default App
