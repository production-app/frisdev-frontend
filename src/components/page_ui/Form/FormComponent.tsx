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
import { useDialog } from "@/zustand/store/store";
import { useAuth } from "@clerk/clerk-react";

type UserType = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  clerkUserId: string;
  imageUrl: string;
  status: boolean;
  role: string;
};

const createTodo = async (newTodoData: any) => {
  const response = await fetch("/api/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTodoData),
  });

  if (!response.ok) {
    throw new Error("Failed to create todo");
  }

  return await response.json();
};

export default function FormComponent(depart: any, data: any) {
  const items = depart.depart.depart || [];

  const { getToken, userId, isLoaded, isSignedIn } = useAuth();

  // console.log(userId);

  const { isOpen, onClose, toggle } = useDialog();

  let enumValue: any = [];

  items.forEach((ele: any) => {
    enumValue.push(ele.department);
  });

  const formSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    passwordConfirm: z.string(),
    department: z.enum(enumValue),
    userId: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: `${depart?.depart?.data?.userId?.firstName}`,
      lastName: `${depart?.depart?.data?.userId?.lastName}`,
      passwordConfirm: "",
      userId: `${userId}`,
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    const response = await fetch("http://localhost:3000/api/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...values, id: userId }),
    });

    toggle();
  };

  // console.log("Form ----", depart?.depart?.data?.userId);

  return (
    <main className="mt-5">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="max-w-md w-full flex flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="First Name" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

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
          <FormField
            control={form.control}
            name="department"
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
                      {items.map((item: any) => (
                        <SelectItem value={item.department} key={item.id}>
                          {item.department.toUpperCase()}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    </main>
  );
}
