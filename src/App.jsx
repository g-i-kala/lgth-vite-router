import React from 'react';
import "./App.css";
import styles from './styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {AboutMe, AboutMeDetails, Articles, Brands, Coaching, CoachingDetails, CoachingOption, Footer, Homework, Navbar, Socials, Feedback, ScrollToTopButton, NoPage} from './components';

const App = () => (
    <BrowserRouter>
      <div className='bg-color03 w-full overflow-hidden flex flex-col min-h-screen'>
          <div className='grow'>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
              <div className={`${styles.boxWidth}`}>
              <Navbar/>
              </div>
            </div>
            <div className={`bg-color05 ${styles.paddingX} ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
                <Routes>
                    {/* <Route path='/' element={ <Navbar />} >  */}
                      <Route path='/' element={<Coaching />} />
                      <Route path='/coaching' element={<Coaching />} />
                      <Route path='/homework' element={<Homework />} />
                      <Route path='/aboutme' element={<AboutMe />} />
                      <Route path="*" element={<NoPage />} />
                    {/* </Route>  */}
                </Routes>
                <ScrollToTopButton/>
              </div>
            </div>
          </div>
          <div className={`bg-color05 ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
            <Footer/>
            </div>
          </div>
      
      </div>
    </BrowserRouter>
  );

export default App