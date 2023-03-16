import { useForm } from '@mantine/form';
import { TextInput, Checkbox, Button, Group, Box ,Text,Image, Radio,PasswordInput, LoadingOverlay, Notification} from '@mantine/core';
import { useState } from 'react';
import admin from '../image/admin.png'
import { adminLogin,studentLogin } from '../services/ProfileServices';
import { showNotification,NotificationsProvider } from '@mantine/notifications';
import { Errornotification, Successnotification } from './Notification';
import  './loginForm.css'

export default function LoginFormComponent() {

 

 
    const [checked,setChecked]=useState('')
    const[visible,setVisible]=useState(false)
  

    const form = useForm({
        initialValues: {
          email: '',
          password:'',
         
        },
        validate: {
          email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
          password:(value) => (/^\S+$/.test(value) ? null:'Invalid password'),
        },
      });
    
      
      async function handleLogin(value){
       
        setVisible(true)
        checked==='admin'?
        await adminLogin(value).then(res=>{
          console.log(res.data)
          
          localStorage.setItem('admin',JSON.stringify(res.data))
          setVisible(false)
          Successnotification(res.data.message)
          window.location.href='/admin'    
          
               
        }).catch(err=>{
          setVisible(false)
          console.log(err)
          Errornotification(err.response.data)
        })
       :
        await studentLogin(value).then(res=>{
          console.log(res.data)
          setVisible(false)
          localStorage.setItem('student',JSON.stringify(res.data))
          Successnotification(res.data.message)
        }).catch(err=>{
          setVisible(false)
          console.log(err)
          Errornotification(err.response.data)
        })
      }
   
  return (
    <>
     <Box sx={{ maxWidth: 300 }} mx="auto">
      
     
    <Text fs="italic" fz={'xl'} fw={500} align="center" autoCapitalize='true'>Login Here</Text>
     <Text  fw="bold" style={{
        color:'brown',
        marginTop:20
     }}>Select Who You Are?</Text><br />
     
      <Radio.Group style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}} value={checked} onChange={(e)=>setChecked(e)}>
      <Radio value="admin" label="admin"   />
      <Radio value="cadet" label="cadet"  />
       </Radio.Group> 
            
      <form style={{
        marginTop: 20
      }} onSubmit={form.onSubmit((values) => handleLogin(values))}>
        
        <TextInput
          style={{
            borderBottom:"2px solid gray"
           }}
          withAsterisk
          variant='standard'
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('email')}
        />
        <PasswordInput
         placeholder="Password"
         label="Password"
         style={{
          borderBottom:"2px solid gray"
         }}
          
        variant='standard'
         withAsterisk
         {...form.getInputProps('password')}
         />

       
        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    <LoadingOverlay visible={visible} overlayBlur={2} />
   
   
    </Box>
    </>
  )
}


 
