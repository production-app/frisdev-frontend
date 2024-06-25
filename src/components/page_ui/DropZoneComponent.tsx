"use client";

import { Group, Switch, Text, rem } from "@mantine/core";
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { IconPhoto, IconUpload, IconX } from "@tabler/icons-react";
import { useState } from "react";

export function DropZoneComponenet(props: Partial<DropzoneProps>) {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <Switch
        checked={checked}
        label="Any means of identification? e.g Passport, Drivers licence"
        labelPosition="left"
        className="my-4"
        onChange={(event) => {
          setChecked(event.currentTarget.checked);
        }}
      />

      {checked ? (
        <Dropzone
          onDrop={(files) => console.log("accepted files", files)}
          onReject={(files) => console.log("rejected files", files)}
          maxSize={5 * 1024 ** 2}
          accept={IMAGE_MIME_TYPE}
          className="border rounded-md border-amber-300"
          {...props}
        >
          <Group
            justify="center"
            gap="xl"
            mih={220}
            style={{ pointerEvents: "none" }}
          >
            <Dropzone.Accept>
              <IconUpload
                style={{
                  width: rem(52),
                  height: rem(52),
                  color: "var(--mantine-color-blue-6)",
                }}
                stroke={1.5}
              />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX
                style={{
                  width: rem(52),
                  height: rem(52),
                  color: "var(--mantine-color-red-6)",
                }}
                stroke={1.5}
              />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <IconPhoto
                style={{
                  width: rem(52),
                  height: rem(52),
                  color: "var(--mantine-color-dimmed)",
                }}
                stroke={1.5}
              />
            </Dropzone.Idle>

            <div className="sm:px-4 mx-px">
              <Text size="xl" inline className="sm:px-4 mx-px">
                Drag images here or click to select files
              </Text>
              <Text
                size="sm"
                c="dimmed"
                inline
                mt={7}
                className="sm:px-4 mx-px"
              >
                Attach as many files as you like, each file should not exceed
                5mb
              </Text>
            </div>
          </Group>
        </Dropzone>
      ) : null}
    </>
  );
}
