import { Grid ,Col,AppShell,Text, Navbar} from '@mantine/core'
import React from 'react'
import { HashRouter, Route, Routes ,useLocation} from 'react-router-dom';

import NavigationBar from '../Components/NavigationBar'
import AddStudent from './AddStudent';
import AddEvent from './AddEvent';
import AddCamp from './AddCamp';
import { HeaderComponent } from '../Components/HeaderComponent';
import { NavbarCustom } from '../layout/CustomNavbar';
import { drawerOptions } from '../utils/constants';


export default function AdminPage({children}) {
  return (
    <>

<AppShell
      padding="md"
      
      navbar={<NavigationBar options={drawerOptions} />}
       styles={(theme) => ({
        main: {backgroundColor:theme.colors.dark[8] },
       
      })}
      
    >
      {children}
    </AppShell>
      
    </>
  )
}
