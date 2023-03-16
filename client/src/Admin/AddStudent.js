
import React from 'react'
import { Box ,Grid, SimpleGrid,Group,TextInput,Button,PasswordInput,FileInput, Modal,Stepper,NumberInput} from '@mantine/core'
import NavigationBar from '../Components/NavigationBar'
import { useForm } from '@mantine/form';
import ModalComponent from '../Components/ModalComponent'
import { useState } from 'react'
import MultiStep from 'react-multistep';
import { YearPickerInput } from '@mantine/dates';
import { DateInput } from '@mantine/dates';
import moment from 'moment/moment';

import StepperStudentForm from './StepperStudentForm';






export default function AddStudent() {


  const [open,setOpen]=useState(false)

  // bankDetails:{holdername:"",bankName:"",accNo:"",branch:"",ifscCode :""},

  const form = useForm({
    initialValues: {
      name:"",
      email:"",
      password:"",
      mobileNo:"",
      batch:"",
      dateOfEnroll:"",
      EnrollingOfficer:"",
      regimentNo:"",
      rank:"",
      incharge:"",
      dob:"",
      bg:"",
      vegOrNonveg:"",
      aadharNo:"",
      holdername:"",
      bankName:"",
      accNo:"",
      branch:"",
      ifscCode :"",
      url:""
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  const addFormOne=()=>(
    <> 
    <TextInput
              withAsterisk
              label="Email"
              placeholder="your@email.com"
              {...form.getInputProps('email')}
            />
            
            <PasswordInput
             placeholder="Password"
             label="Password"
            //  description="Password must include at least one letter, number and special character"
             {...form.getInputProps('password')}
             />
    
             
    <TextInput
              label="regimentNo"
              placeholder="Ex:NCC10"
              {...form.getInputProps('regimentNo')}
    />
      
    
    <NumberInput
        hideControls
              label="Mobile Number"
              placeholder="EX:9655639197"
              {...form.getInputProps('mobileNo')}
         />
     
       <YearPickerInput 
     clearable
     label="Enter Batch Year"
     placeholder={new Date().getFullYear()}
     mx="auto"
  {...form.getInputProps('batch')}
         />

         
 <NumberInput
        hideControls
          
          label="aadharNo"
          placeholder="Ex:1234 5678 9087"
          {...form.getInputProps('aadharNo')}
/>
    
    </>
)


const addFormTwo=()=>(
  <>

<DateInput
         valueFormat="YYYY/MM/DD"
         label="Date of Enroll"
         placeholder={moment(new Date()).format('YYYY-MM-DD')}
          {...form.getInputProps('dateOfEnroll')}
     />
 
   <TextInput
          label="Enrolling Officer"
          placeholder=" Enter EnrollingOfficer"
          {...form.getInputProps('EnrollingOfficer')}
     />

     
 <NumberInput
        hideControls
          label="Rank"
          placeholder="Ex:1"
          {...form.getInputProps('rank')}
/>

<TextInput
          label="Incharge"
          placeholder="Enter InCharge"
          {...form.getInputProps('incharge')}
/>

<TextInput
          label="Blood Group"
          placeholder="Ex:A+"
          {...form.getInputProps('dob')}
/>

<TextInput
          label="vegOrNonveg"
          placeholder="Ex:Nonveg"
          {...form.getInputProps('vegOrNonveg')}
/>

  </>
)


const addFormThree=()=>(
  <>
      
          <TextInput
          label="holdername"
          placeholder="Enter Holdername"
          {...form.getInputProps('holdername')}
/>

<TextInput
          label="bankName"
          placeholder="Ex:canara"
          {...form.getInputProps('bankName')}
/>

 <NumberInput
        hideControls
          label="accNo"
          placeholder="Enter AccNo"
          {...form.getInputProps('accNo')}
/>
<TextInput
          label="branch"
          placeholder="Enter branch"
          {...form.getInputProps('branch')}
/>
<TextInput
          label="ifscCode"
          placeholder="Ex:CNRB12345"
          {...form.getInputProps('ifscCode')}
/>
  </>
)

const addFormFour=()=>(
  <>
     <Group>
          <FileInput label="Add Profile Image" placeholder="Upload files" accept="image/png,image/jpeg" />;
      </Group>
  </>
)

  
  return (
   <>
    
 <Box sx={{ maxWidth: 700 }}>
<Group>
<Button onClick={()=>setOpen(true)}>Add Student</Button>
</Group>
  <ModalComponent open={open} close={()=>setOpen(false)} size="lg" props={
              (
                <>
                  <StepperStudentForm step1={
           (
           <>
             {addFormOne()}
   
           </>
          )}
          step2={
           (
             <>
             {addFormTwo()}
             </>
           )
          }
   
          step3={
           (
             <>
             {addFormThree()}
             </>
           )
          }
   
          step4={
           (
             <>
             {addFormFour()}
             </>
           )
          }
    >
      
    </StepperStudentForm>
                
                </>
               
              )
            }>
           
  </ModalComponent>
</Box>

</>
)}




      


  
 
  




 
   
 
