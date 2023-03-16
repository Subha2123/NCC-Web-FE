import React from "react";
import {
  Box,
  NativeSelect,
  TextInput,
  Button,
  FileInput,
  Group

} from "@mantine/core";
import ModalComponent from "../Components/ModalComponent";
import { useForm } from "@mantine/form";
import { useState } from "react";
import { DatePickerInput } from '@mantine/dates';
import { IconUpload } from '@tabler/icons-react';
import { ValueComponent } from "../utils/multiUpload";


export default function AddCamp() {
  const [open, setOpen] = useState(false);

  const form = useForm({
    initialValues: {
      cadet_regimentNo:"",
      cadet_name:"",
      camp_name:"",
      camp_place:"",
      start_date:"",
      end_date:"",
      camp_type:"", 
      camp_img:""
    },
  });

  return (
    <>
    <Box sx={{ maxWidth: 700 }}>
    <Group>
<Button onClick={()=>setOpen(true)}>Add Camp</Button>
</Group>
      <ModalComponent
        open={open}
        close={() => setOpen(false)}
        size="lg"
        props={
    <Box>
      <NativeSelect
      data={['React', 'Vue', 'Angular', 'Svelte']}
      label="Select Cadet Regiment No"
      withAsterisk
    />

    <TextInput
              placeholder="National camp"
              label="Camp Name"
              {...form.getInputProps("camp_name")}
            />
      <TextInput
              placeholder="Chennai"
              label="Camp Place"
              {...form.getInputProps("camp_place")}
     />

<DatePickerInput
     clearable
      valueFormat="YYYY/MM/DD"
      type="range"
      label="Camp date"
      placeholder="from-to"
    />
    <NativeSelect
      data={['National','State']}
      label="Select Camp type"
      withAsterisk
    />
    <FileInput label="Camp Images" icon={<IconUpload />} placeholder="Upload files" multiple valueComponent={ValueComponent} />
    
    <br />
            <Button>Submit</Button>
          </Box>
        }></ModalComponent>
    </Box>
  </>
  )
}
