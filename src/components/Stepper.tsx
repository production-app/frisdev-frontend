"use client";
import { MantineProvider, Stepper } from "@mantine/core";
import { useState } from "react";

const CustomStepper = () => {
  const [active, setActive] = useState(1);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <MantineProvider>
      <Stepper
        active={active}
        onStepClick={setActive}
        allowNextStepsSelect={false}
        iconSize={37}
        color=""
      >
        <Stepper.Step label="Change of name" description="">
          Step 1 content: Create an account
        </Stepper.Step>
        <Stepper.Step label="E Dividend" description="">
          Step 2 content: Verify email
        </Stepper.Step>
        <Stepper.Step label="E Bonus" description="">
          Step 3 content: Get full access
        </Stepper.Step>
      </Stepper>
    </MantineProvider>
  );
};

export default CustomStepper;
