import React from 'react';
//imports

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { NoPage, RootLayout, RSLoading } from './components';
import { navLinks } from './constants';
import { Coaching, Articles, Homework, AboutMe, SinglePost} from './components';


//styles
import "./App.css";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
          {/* {navLinks.map((nav)=> {
            const componentPath = `./components/${nav.id}`;
            const LazyComponent = React.lazy(()=>import(componentPath));

              return (
              <Route key = {nav.id}
              path = {`/${nav.id}`}
              element = {<LazyComponent/>}  
              />
            )
          })} */}
          
          <Route path='/coaching' element={<Coaching />} />
          <Route path='/articles' element={<Articles />} />
          <Route path='/homework' element={<Homework />} />
          <Route path='/aboutme' element={<AboutMe />} />
          <Route path="/articles/:id" element={<SinglePost />} />
          <Route path="*" element={<NoPage />} />
    </Route>
  )
)

const App = () => (
  <React.Suspense fallback={<RSLoading/>}>
    <RouterProvider router={router} />
  </React.Suspense>
  );

export default App