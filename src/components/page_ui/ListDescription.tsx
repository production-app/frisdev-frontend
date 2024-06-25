import React from "react";
import { useForm } from "@mantine/form";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
  SimpleGrid,
  Select,
} from "@mantine/core";

const switchTab: boolean = false;

type SwitchType = {
  data: boolean;
};

const ListDescription = ({ data }: { data: SwitchType }) => {
  const form = useForm({
    initialValues: {
      email: "ezepeter@gmail.dev",
      name: "ABIOLA SAMUEL",
      password: "",
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  return (
    <div>
      {/* <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          Applicant Information
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          Personal details and application.
        </p>
      </div> */}
      <div className="mt-2 border-t border-gray-100">
        {data.data ? (
          <Paper className="w-[379px] mt-5">
            <form onSubmit={form.onSubmit(() => {})}>
              <Stack>
                <TextInput
                  label="Name on the Document"
                  placeholder="Fullname"
                  value={form.values.name}
                  className="mb-3"
                  onChange={(event) =>
                    form.setFieldValue("name", event.currentTarget.value)
                  }
                  radius="md"
                />

                <TextInput
                  required
                  label="Email"
                  placeholder="Your email"
                  value={form.values.email}
                  className="mb-3"
                  onChange={(event) =>
                    form.setFieldValue("email", event.currentTarget.value)
                  }
                  error={form.errors.email && "Invalid email"}
                  radius="md"
                />

                <SimpleGrid cols={{ base: 1, sm: 2 }} className="mb-3">
                  <Select
                    className="my-3"
                    label="Source of Document"
                    placeholder="Pick value"
                    value={"Walk-In"}
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
                    value="eDividend"
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

                {/* <Checkbox
                  label="I accept terms and conditions"
                  checked={form.values.terms}
                  onChange={(event) =>
                    form.setFieldValue("terms", event.currentTarget.checked)
                  }
                /> */}

                <Button>Update</Button>
              </Stack>
            </form>
          </Paper>
        ) : (
          <>
            <Paper className="w-[380px]">
              <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Customer Name
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Margot Foster
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Application for
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Backend Developer
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    margotfoster@example.com
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Salary expectation
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    $120,000
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    About
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                    incididunt cillum culpa consequat. Excepteur qui ipsum
                    aliquip consequat sint. Sit id mollit nulla mollit nostrud
                    in ea officia proident. Irure nostrud pariatur mollit ad
                    adipisicing reprehenderit deserunt qui eu.
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Attachments
                  </dt>
                  <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0"></dd>
                </div>
              </dl>
            </Paper>
          </>
        )}
      </div>
    </div>
  );
};

export default ListDescription;
