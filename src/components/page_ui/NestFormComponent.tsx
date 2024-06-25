import { useForm } from "@mantine/form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  TextInput,
  Switch,
  Group,
  ActionIcon,
  Box,
  Text,
  Button,
  SimpleGrid,
} from "@mantine/core";
import { randomId } from "@mantine/hooks";
import { IconTrash } from "@tabler/icons-react";
import { Separator } from "../ui/separator";
import { Label } from "../ui/label";

export function NestFormComponent() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      contact: [{ name: "", phone: "", key: randomId() }],
    },
  });

  const fields = form.getValues().contact.map((item, index) => (
    <>
      <SimpleGrid
        cols={{ base: 1, sm: 2 }}
        className="flex justify-between mt-4"
      >
        {/* <Group key={item.key} mt="xs"> */}
        <TextInput
          placeholder="John Doe"
          withAsterisk
          //style={{ flex: 1 }}
          key={form.key(`contact.${index}.name`)}
          {...form.getInputProps(`contact.${index}.name`)}
        />
        <PhoneInput
          country={"ng"}
          value={""}
          //onChange={}
          key={form.key(`contact.${index}.phone`)}
          {...form.getInputProps(`contact.${index}.phone`)}
        />
        <ActionIcon
          color="red"
          onClick={() => form.removeListItem("contact", index)}
        >
          <IconTrash size="1rem" />
        </ActionIcon>
        {/* </Group> */}
      </SimpleGrid>
      <Separator className="mt-2" />
    </>
  ));

  return (
    <>
      {fields.length > 0 ? (
        <>
          <Text c="dimmed" ta="center" className="mt-8">
            The collected will used for feedback to the customer
          </Text>
          <SimpleGrid
            cols={{ base: 1, sm: 2 }}
            className="flex justify-between mt-5"
          >
            <Text fw={500} size="sm" style={{ flex: 1 }}>
              Name of contact:
            </Text>
            <Text fw={500} size="sm" pr={90}>
              Phone:
            </Text>
          </SimpleGrid>
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
            console.log(val);

            form.insertListItem("contact", {
              name: "",
              phone: "",
              key: randomId(),
            });
          }}
        >
          Add
        </Button>
      </Group>
    </>
  );
}
