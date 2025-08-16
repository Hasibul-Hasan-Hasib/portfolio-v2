import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = () => {
    return (
        <div className='p-8 bg-slate-950'>
            <div className='flex flex-col rounded-lg bg-slate-800 shadow-lg min-h-[calc(100vh-5rem)] border-1 border-slate-500'>
                <Header />
                <main className='flex-1'>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    )
}

export default Layout
