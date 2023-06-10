import { Outlet } from 'react-router-dom';
import styles from '../styles';
import {Navbar, ScrollToTopButton, Footer } from '../components';

const RootLayout = () => {
  return (
    <div className='w-full overflow-hidden flex flex-col min-h-screen'>
          <div className='grow'>
            <div className={`bg-color03 ${styles.paddingX} ${styles.flexCenter}`}>
              <div className={`${styles.boxWidth}`}>
              <Navbar/>
              </div>
            </div>
            
            <main className={`bg-color05 ${styles.paddingX} ${styles.flexStart}`} >
            <div className={`${styles.boxWidth}`}>
                <Outlet />
                <ScrollToTopButton/>
              </div>
            </main>
          
          </div>
          <div className={`bg-color05 ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
            <Footer/>
            </div>
          </div>
      
      </div>
  )
}

export default RootLayout