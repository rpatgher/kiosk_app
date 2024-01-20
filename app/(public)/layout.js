import { Inter } from 'next/font/google';
import '../globals.css';
import { KioskProvider } from '@/context/KioskProvider';
import Sidebar from '@/components/Sidebar';
import Modal from '@/components/Modal';
import Steps from '@/components/Steps';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Café - ',
  description: 'Quisco Cafetería',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} id='myapp'>
        <KioskProvider>
          <div className='md:flex'>
            <aside className='md:w-4/12 xl:1/4 2xl:w-1/5'>
              <Sidebar />
            </aside>
            <main className='md:w-8/12 xl:3/4 2xl:w-4/5 h-screen overflow-y-scroll'>
              <div className="p-10">
                <Steps />
                {children}
              </div>
            </main>
          </div>
          <Modal />
          <ToastContainer />
        </KioskProvider>
      </body>
    </html>
  )
}
