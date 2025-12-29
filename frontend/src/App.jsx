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
import AdminUsers from './Pages/admin/AdminUsers';
import AdminNews from './Pages/admin/AdminNews';
import RequireRole from './routes/RequireRole';
import ContactUs from './Pages/ContactUs';
import StatisticsPage from './Pages/StatisticsPage';
import AdminQuery from './Pages/admin/AdminQuery';
function App() {
  return (
  <div className="flex min-h-screen w-full overflow-x-hidden">


      <aside className="hidden sm:flex w-16 bg-[#BBA782] flex-col items-center py-80">
        <Sidebar/>
      </aside>
      <main className="flex-1 bg-gray-50 overflow-x-hidden">
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
          <Route path='/contact' element={<ContactUs/>}/>
          <Route path='/stats' element={<StatisticsPage/>}/>
          <Route path="/admin/users" element={
              <RequireRole role="admin">
                <AdminUsers />
              </RequireRole>
            }
          />
          <Route path="/admin/news" element={
              <RequireRole role="admin">
                <AdminNews />
              </RequireRole>
            }
          />
          <Route path="/admin/query" element={
              <RequireRole role="admin">
                <AdminQuery />
              </RequireRole>
            }
          />
        </Routes>
        <Footer/>
    </main>
    </div>
  )
}

export default App
