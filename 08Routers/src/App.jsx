import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import {Layout,Home, About, Contact, User, Githubs, GithibInfo } from './components/dependency/index';  



function App() {
  const router =createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='user/:userid' element={ <User/> }/>
        <Route path='/github' element={ <Githubs/> }
          loader={GithibInfo}
        />
        
      </Route>,
  
     
    )
  )
  
  return (
   <>
  <RouterProvider router={router}/>
   
   </>
  )
}

export default App
