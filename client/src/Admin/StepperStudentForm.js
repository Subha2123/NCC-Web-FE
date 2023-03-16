import { useState } from 'react';
import { Stepper, Button, Group,Text, Box } from '@mantine/core';

export default function StepperStudentForm({step1,step2,step3,step4}) {

  const [active, setActive] = useState(0);
  const [highestStepVisited, setHighestStepVisited] = useState(active);

  const handleStepChange = (nextStep) => {
    const isOutOfBounds = nextStep > 4 || nextStep < 0;

    if (isOutOfBounds) {
      return;
    }

    setActive(nextStep);
    setHighestStepVisited((hSC) => Math.max(hSC, nextStep));
  };


  // Allow the user to freely go back and forth between visited steps.
  const shouldAllowSelectStep = (step) => highestStepVisited >= step && active !== step;

  return (
    <>
      <Stepper active={active} onStepClick={setActive} breakpoint="sm">
        <Stepper.Step
          allowStepSelect={shouldAllowSelectStep(0)}
        >
         <Box>{step1}</Box>
        </Stepper.Step>
        
        <Stepper.Step
          
          allowStepSelect={shouldAllowSelectStep(1)}
        >
         
          <Box>{step2}</Box>
        </Stepper.Step>

        <Stepper.Step
         
          allowStepSelect={shouldAllowSelectStep(2)}
        >
         
        <Box>{step3}</Box>
        </Stepper.Step>

        <Stepper.Step
          
          allowStepSelect={shouldAllowSelectStep(3)}
        >
         
        <Box>{step4}</Box>
        </Stepper.Step>

        
      </Stepper>
      {active<4?(
       <Group position="center" mt="xl">
       <Button variant="default" onClick={() => handleStepChange(active - 1)}>
         Back
       </Button>
       <Button onClick={() => handleStepChange(active + 1)}>{active<3?(<Text>Next step</Text>):(<Text>Submit</Text>)}</Button>
     </Group>
      ):null}
      
    </>
  );
}

