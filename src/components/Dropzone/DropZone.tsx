"use client";
import useDocumentStore from "@/zustand/store/store";
import clsx from "clsx";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const DropZone = ({ disabled }: { disabled: boolean }) => {
  const addDocument = useDocumentStore((state) => state.updateDocument);

  const onDrop = useCallback(
    (acceptedFiles: any) => {
      acceptedFiles.forEach((file: any) => {
        addDocument({
          id:
            "Doc_" +
            (Math.random() * 1000 + 1).toFixed(5).toString().replace(".", ""),
          name: file.name,
          type: file.type,
          size: file.size,
          path: file.path,
        });
      });
    },
    [addDocument]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  return (
    <form action="">
      <label
        {...getRootProps()}
        htmlFor="dropzone-file"
        className={clsx(
          "flex flex-col items-center justify-center w-full border-1 rounded-br-md rounded-bl-md border-gray-300 border-dashed  cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600",
          isDragActive ? "bg-fr_secondary/40" : ""
        )}
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          {/** ICON */}
          <span className="h-12 w-12 mb-4 rounded-full bg-sky-900 text-white flex items-center justify-center">
            <svg
              className="w-8 h-8 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
          </span>

          {/** TEXT */}
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>

          {/** SUB TEXT */}
          <p className="text-xs text-gray-500 dark:text-gray-400">
            SVG, PNG, JPG or GIF (MAX. 800x400px)
          </p>
        </div>

        {/** PRIMARY INPUT */}
        <input
          disabled={disabled}
          {...getInputProps()}
          id="dropzone-file"
          type="file"
          className="hidden disabled:cursor-not-allowed"
        />
      </label>
    </form>
  );
};

export default DropZone;
