import { useEffect, useState } from "react";
import {
  Radio,
  Group,
  Stack,
  Text,
  Flex,
  Card,
  Paper,
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Button,
  Container,
  Select,
  Space,
  SimpleGrid,
} from "@mantine/core";
import classes from "./styles/RadioButton.module.css";
import { cn } from "@/lib/utils";
import { DropZoneComponenet } from "./DropZoneComponent";
import { NestFormComponent } from "./NestFormComponent";
import { Separator } from "../ui/separator";

type dataType = {
  id: number;
  name: string;
  description: string;
};

const data: dataType[] = [
  {
    id: 1,
    name: "Add Job(s) without scanning/upload",
    description:
      "The job(s) meta-data is added and put in a queue for scanning and uploads",
  },
  {
    id: 2,
    name: "Add Job(s) with scanning/upload",
    description:
      "Both the meta-data entry and the scanning/uploads are done instantly. ",
  },
];

const RadioButtonComponent = () => {
  const [value, setValue] = useState<string | null>(null);

  useEffect(() => {
    console.log(value);
  }, [value]);

  const cards = data.map((item: dataType) => (
    <Radio.Card
      className={classes.root}
      radius="md"
      value={String(item.id)}
      key={item.name}
    >
      <Group wrap="nowrap" align="flex-start">
        <Radio.Indicator />
        <div>
          <Text className={classes.label}>{item.name}</Text>
          <Text className={classes.description}>{item.description}</Text>
        </div>
      </Group>
    </Radio.Card>
  ));

  return (
    <>
      <Radio.Group
        value={value}
        onChange={setValue}
        label="Select one workflow to use."
        description=" "
      >
        <Flex
          direction={{ base: "column", sm: "row" }}
          gap={{ base: "sm", sm: "md" }}
          justify={{ sm: "center" }}
          className="my-3"
        >
          {cards}
        </Flex>
      </Radio.Group>

      {value === "1" ? (
        <Container>
          {" "}
          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <TextInput
              label="Name of customer"
              placeholder="Abdul Eze"
              required
            />

            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <Select
                className="my-3"
                label="Source of Document"
                placeholder="Pick value"
                data={[
                  "Walk-In",
                  "Courier",
                  "Stockbroker",
                  "Email",
                  "Online form",
                  "Branch office",
                  "Other",
                ]}
              />

              <Select
                className="my-3"
                // size="md"
                label="Type of Jobs"
                placeholder="Pick value"
                data={[
                  "eDividend",
                  "Letter of Administrator",
                  "Banker's Confirmation",
                  "eBonus",
                  "Branch office",
                  "Other",
                ]}
              />
            </SimpleGrid>
            <TextInput
              label="Proxy/Submitted by:"
              placeholder="Abdul Eze"
              required
              className="mb-5"
            />

            <NestFormComponent />

            <Separator className="mt-3" />

            <DropZoneComponenet />

            <Button fullWidth mt="xl">
              Submit
            </Button>
          </Paper>
        </Container>
      ) : value === "2" ? (
        <Card>Form 2</Card>
      ) : null}
    </>
  );
};

export default RadioButtonComponent;
