import React from "react";
import {
  Box,
  Grid,
  SimpleGrid,
  Group,
  TextInput,
  Button,
  PasswordInput,
  FileInput,
  Modal,
  Stepper,
  NumberInput,
} from "@mantine/core";
import ModalComponent from "../Components/ModalComponent";
import { useForm } from "@mantine/form";
import { useState } from "react";
import { DateInput } from "@mantine/dates";
import moment from "moment";
import { ValueComponent } from "../utils/multiUpload";
import { IconUpload } from "@tabler/icons-react";

export default function AddEvent() {
  const [open, setOpen] = useState(false);

  const form = useForm({
    initialValues: {
      eventImages: [],
      event_name: "",
      event_place: "",
      event_date: "",
      total_students: "",
      inAssociationWith: "",
      description: "",
    },
  });

  return (
    <>
      <Box sx={{ maxWidth: 700 }}>
    <Group>
   <Button onClick={()=>setOpen(true)}>Add Event</Button>
    </Group>
        <ModalComponent
          open={open}
          close={() => setOpen(false)}
          size="lg"
          props={
            <Box>
              <TextInput
                withAsterisk
                label="Event Name"
                placeholder="Republic Day"
                {...form.getInputProps("event_name")}
              />

              <TextInput
                placeholder="Sulur"
                label="Event Place"
                //  description="Password must include at least one letter, number and special character"
                {...form.getInputProps("event_place")}
              />

              <DateInput
                valueFormat="YYYY/MM/DD"
                label="Date of Enroll"
                placeholder={moment(new Date()).format("YYYY-MM-DD")}
                {...form.getInputProps("dateOfEnroll")}
              />

              <NumberInput
                hideControls
                label="Total Students"
                placeholder="EX:10"
                {...form.getInputProps("total_students")}
              />

              <TextInput
                label="Association"
                placeholder="EX:RVSCAS"
                {...form.getInputProps("inAssociationWith")}
              />
              <TextInput
                label="Description"
                {...form.getInputProps("description")}
              />
                <FileInput label="Event Images" icon={<IconUpload />} placeholder="Upload files" multiple valueComponent={ValueComponent} />
              <br />
              <Button>Submit</Button>
            </Box>
          }></ModalComponent>
      </Box>
    </>
  );
}
