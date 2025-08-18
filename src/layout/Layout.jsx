import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SideBar from '../components/SideBar'

const Layout = () => {
    return (
        <div className='p-5 md:p-8 bg-slate-950 min-h-screen'>
            <div className='flex flex-col rounded-lg bg-slate-800 shadow-lg min-h-[calc(100vh-5rem)] border border-slate-500'>
                <Header />
                <div className='flex'>
                    <SideBar></SideBar>
                    <main className='flex min-h-[calc(100vh-11.35rem)] overflow-hidden w-full'>
                        <Outlet />
                    </main>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Layout
