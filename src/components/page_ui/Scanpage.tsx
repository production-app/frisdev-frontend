"use client";
import { Lock } from "lucide-react";
import { useState } from "react";
import DropZone from "../Dropzone/DropZone";
import { Button } from "../ui/button";
import ScanDoc from "./ScanDoc";

const ScanTable = () => {
  const [ready, setReady] = useState(false);

  const passDoc = () => setReady(!ready);
  return (
    <div className="flex flex-col gap-0">
      <div className="relative">
        {ready && (
          <div className="absolute animate-in cursor-not-allowed inset-0 bg-black/20 z-50">
            <div className="w-full h-full  flex items-center justify-center">
              <div className="flex flex-col gap-2 items-center justify-center">
                <span className="w-10 h-10 p-2 bg-sky-900 text-white rounded-full">
                  <Lock />
                </span>
                <p className="text-white font-bold uppercase">
                  Ready For Processing
                </p>
              </div>
            </div>
          </div>
        )}
        {/** DOCUMENT TABLE */}
        <div className="relative w-full h-full max-h-[400px] border">
          <ScanDoc ready={ready} />
        </div>

        {/** HANDLE UPLOADS */}
        <div className="w-full border ">
          <DropZone disabled={ready} />
        </div>
      </div>

      {/** SUBMIT BUTTON */}
      <div className="h-[150px] w-full p-4 flex flex-col items-center border-l border-r border-b">
        <p className="text-sm text-center mb-6 text-muted-foreground">
          Please pick a <strong>document type</strong> and{" "}
          <strong>applicant for each file</strong> <br />
          and then click button below to submit your files!
        </p>
        <Button
          disabled={ready}
          onClick={passDoc}
          className="disabled:cursor-not-allowed rounded-sm w-full text-white bg-sky-900"
        >
          {ready ? "Ready For Processing" : "Submit My Files"}
        </Button>
      </div>
    </div>
  );
};

export default ScanTable;
