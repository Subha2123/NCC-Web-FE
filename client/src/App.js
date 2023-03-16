
import React from 'react';
import { HashRouter, Route, Routes ,useLocation,createBrowserRouter,RouterProvider} from 'react-router-dom';
import { MantineProvider,Text ,Grid,Col, ScrollArea, Header} from '@mantine/core';
import { HeaderComponent } from './Components/HeaderComponent';
import {FooterComponent} from './Components/FooterComponent';

import AdminPage from './Admin/AdminPage';

import NavigationBar from './Components/NavigationBar';
import AddStudent from './Admin/AddStudent';


import AddCamp from './Admin/AddCamp';
import AddEvent from './Admin/AddEvent';
import PageNotFound from './pages/PageNotFound';

import { AppShell } from '@mantine/core';
import CardComponent from './Components/CardComponent';
import { ROUTE_PATH } from './utils/constants';





export default function App(){
  
 
   
  let token=JSON.parse(localStorage.getItem('admin'))

  // if(token?.token) window.location.href='/admin'
 
  const router = createBrowserRouter([
    
    {
      path: ROUTE_PATH.admin,

      element: (
     
       <AdminPage />
     
      
      ),
    },  
    {
      path: ROUTE_PATH.student,
      element: (
        <AdminPage> <AddStudent /></AdminPage>
      ),
     
    },
    
    {
      path: ROUTE_PATH.camp,
      element: (
        <AdminPage>
          <AddCamp />
        </AdminPage>
      
      ),
    
    },
    {
      path: ROUTE_PATH.event,
      element: (
        <AdminPage>
          <AddEvent />
        </AdminPage>
      
      ),
    
    },
    {
      path:'*',
      element: <PageNotFound />,
    },
    
  ])
  
  return(
  <>

  <MantineProvider>
  
    <HeaderComponent />
    <RouterProvider router={router} />


    
     {token?(<AdminPage />):null}


    <FooterComponent />

  
   

  </MantineProvider>

  
 
    </>
  )
  }


  