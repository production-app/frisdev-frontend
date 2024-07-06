"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useDialog } from "@/zustand/store/store";
import { Input } from "@/components/ui/input";
import { TextInput } from "@mantine/core";
import FormComponent from "../Form/FormComponent";

const DialogComponenet: any = (depart: any, data: any) => {
  const { isOpen, onClose } = useDialog();

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

  //console.log("Data Value", depart);

  return (
    <div className="mt-4">
      <Dialog onOpenChange={onClose} open={isOpen} modal defaultOpen={isOpen}>
        <DialogContent
          onInteractOutside={(e) => {
            e.preventDefault();
          }}
        >
          <DialogHeader>
            <DialogTitle>Updates on the Users Profile</DialogTitle>
            <DialogDescription className="mt-4">
              {" "}
              <FormComponent depart={depart} />{" "}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogComponenet;
