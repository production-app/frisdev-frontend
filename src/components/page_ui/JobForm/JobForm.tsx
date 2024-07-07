"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import {
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
  Select,
} from "@/components/ui/select";
import { SimpleGrid } from "@mantine/core";

const JobForm = () => {
  const formSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    passwordConfirm: z.string(),
    // department: z.enum("IT"),
    jobtype: z.enum(["personal", "Walk"]),
    userId: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: ``,
      lastName: ``,
      //  jobtype: "",
      userId: ``,
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    const response = await fetch("http://localhost:3000/api/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...values }),
    });
  };
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="max-w-full w-full flex flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Name of customer</FormLabel>
                  <FormControl>
                    <Input placeholder="First Name" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <SimpleGrid cols={{ base: 1, sm: 2 }}>
            <FormField
              control={form.control}
              name="jobtype"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Document Source</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a document source" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="personal">Personal</SelectItem>
                        <SelectItem value="company">Company</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a document source" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="personal">Personal</SelectItem>
                <SelectItem value="company">Company</SelectItem>
              </SelectContent>
            </Select>
          </SimpleGrid>

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Last Name" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          {/* <FormField
              control={form.control}
              name="jobtypes"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Department</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a Department" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                      
                                
                                  <SelectItem value="Walk" >Walk-In</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />  */}

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
};

export default JobForm;
