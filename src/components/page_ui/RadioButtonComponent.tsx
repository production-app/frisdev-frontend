"use client";
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
  ActionIcon,
} from "@mantine/core";
import classes from "./styles/RadioButton.module.css";
import { cn } from "@/lib/utils";
import { DropZoneComponenet } from "./DropZoneComponent";
import { NestFormComponent } from "./NestFormComponent";
import { Separator } from "../ui/separator";
import JobForm from "./JobForm/JobForm";
import {
  useForm,
  isNotEmpty,
  isEmail,
  isInRange,
  hasLength,
  matches,
} from "@mantine/form";
import { randomId } from "@mantine/hooks";
import { IconTrash } from "@tabler/icons-react";
import { redirect } from "next/navigation";
import { useModel } from "@/zustand/store/store";

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
  const { Open, Close, OnOpen, OnClose } = useModel();

  useEffect(() => {
    console.log(value);
  }, [value]);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      nameofcustomer: "",
      soureofdocument: "",
      jobtypes: "",
      proxyname: "",
      contact: [{ name: "", phone: "", email: "", key: randomId() }],
    },

    validate: {
      soureofdocument: (value) =>
        value.length < 2 ? "Please select Document Source" : null,
      jobtypes: (value) =>
        value.length < 2 ? "Please select Jobs Type" : null,
      proxyname: (value) => (value.length < 2 ? "Proxy Name need" : null),
    },
  });

  const fields = form.getValues().contact.map((item, index) => (
    <>
      <div className="flex justify-between mt-4">
        {/* <Group key={item.key} mt="xs"> */}
        <TextInput
          placeholder="John Doe"
          withAsterisk
          label="Fullname"
          //style={{ flex: 1 }}
          key={form.key(`contact.${index}.name`)}
          {...form.getInputProps(`contact.${index}.name`)}
        />
        {/* <PhoneInput
          country={"ng"}
          value={""}
          //onChange={}
          key={form.key(`contact.${index}.phone`)}
          {...form.getInputProps(`contact.${index}.phone`)}
        /> */}

        {/* <PhoneInput
          country={"ng"}
          value={""}
          //onChange={}
          key={form.key(`contact.${index}.phone`)}
          {...form.getInputProps(`contact.${index}.phone`)}
        /> */}

        <TextInput
          placeholder="+234802998490"
          withAsterisk
          label="Phone"
          //style={{ flex: 1 }}
          key={form.key(`contact.${index}.phone`)}
          {...form.getInputProps(`contact.${index}.phone`)}
        />

        <TextInput
          placeholder="doe@yahoo.com"
          withAsterisk
          label="Email"
          //style={{ flex: 1 }}
          key={form.key(`contact.${index}.email`)}
          {...form.getInputProps(`contact.${index}.email`)}
        />

        <ActionIcon
          color="red"
          className="mt-6"
          onClick={() => form.removeListItem("contact", index)}
        >
          <IconTrash size="1rem" />
        </ActionIcon>

        {/* </Group> */}
      </div>
    </>
  ));

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

  const formSubmit = async (value: any) => {
    await fetch("http://localhost:3000/api/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...value }),
    });
    OnClose();
  };

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
            <form onSubmit={form.onSubmit((value) => formSubmit(value))}>
              <TextInput
                label="Name of customer"
                placeholder="Abdul Eze"
                required
                key={form.key("nameofcustomer")}
                {...form.getInputProps("nameofcustomer")}
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
                  key={form.key("soureofdocument")}
                  {...form.getInputProps("soureofdocument")}
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
                  key={form.key("jobtypes")}
                  {...form.getInputProps("jobtypes")}
                />
              </SimpleGrid>
              <TextInput
                label="Proxy/Submitted by:"
                placeholder="Abdul Eze"
                required
                className="mb-5"
                key={form.key("proxyname")}
                {...form.getInputProps("proxyname")}
              />

              {fields.length > 0 ? (
                <>
                  <Text c="dimmed" ta="center" className="mt-10 mb-20">
                    The collection will be used for feedback to the customer
                  </Text>
                  {/* <div className="flex justify-between mt-5">
            <Text fw={500} size="sm" style={{ flex: 1 }}>
              Name of contact:
            </Text>
            <Text fw={500} size="sm" pr={90}>
              Phone:
            </Text>
            <Text fw={500} size="sm" pr={90}>
              Email:
            </Text>
          </div> */}
                </>
              ) : (
                <Text c="dimmed" ta="center" className="mt-2">
                  No one here...
                </Text>
              )}

              {fields}

              <Group justify="center" mt="md">
                <Button
                  onClick={(val) => {
                    form.insertListItem("contact", {
                      name: "",
                      phone: "",
                      email: "",
                      key: randomId(),
                    });
                  }}
                >
                  Add
                </Button>
              </Group>

              {/* <NestFormComponent /> */}

              <Separator className="mt-3" />

              {/* <DropZoneComponenet /> */}

              <Button fullWidth mt="xl" type="submit">
                Submit
              </Button>
            </form>
          </Paper>
        </Container>
      ) : value === "2" ? (
        <Card>Form 2</Card>
      ) : null}
    </>
  );
};

export default RadioButtonComponent;
