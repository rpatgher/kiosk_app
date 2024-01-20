import { Inter } from 'next/font/google';
import '../globals.css';

import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Café - Admin',
  description: 'Quisco Cafetería',
}

export default function AdminLayout({ children, pagina }) {
  return (
    <html lang="en">
      <body className={inter.className} id='myapp'>
        <div className="md:flex">
              <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5 py-5">
                  <Image
                      width={300}
                      height={100}
                      src="/assets/img/logo.svg"
                      alt="imagen logotipo"
                      className='mx-auto'
                  />
              </aside>

              <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
                  <div className="p-10">
                      {children}
                  </div>
              </main>
        </div>
        <ToastContainer />
      </body>
    </html>
  );
}