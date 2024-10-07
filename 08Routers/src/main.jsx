import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx'
// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
// import {Layout,Home, About, Contact, User, Githubs, GithibInfo } from './components/dependency/index';  



// const router =createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//           path:'',
//           element:<Home/> 
//       },
//       {
//         path:'/about',
//         element:<About/>
//       },
//       {
//        path:'/contact',
//        element:<Contact/> 
//       }
//     ]
//   }
// ])

// const router =createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout/>}>
//       <Route path='' element={<Home/>}/>
//       <Route path='/about' element={<About/>}/>
//       <Route path='/contact' element={<Contact/>}/>
//       <Route path='user/:userid' element={ <User/> }/>
//       <Route path='/github' element={ <Githubs/> }
//         loader={GithibInfo}
//       />
      
//     </Route>,

   
//   )
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <App/>
  {/* <RouterProvider router={router}/> */}
  </StrictMode>,

)
