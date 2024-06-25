import { Label } from "../../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";

const NewDocument = () => {
  return (
    <div className="flex flex-col w-full gap-3">
      <div className="flex w-full ">
        <form className="w-[65%]">
          <div className="flex flex-col  gap-5 w-full">
            <div className="flex flex-col gap-3">
              <Label htmlFor="dropzone-file" className="font-bold">
                Select document type
              </Label>
              <Select>
                <SelectTrigger className="border border-dashed rounded-md text-muted-foreground">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Change of name</SelectItem>
                  <SelectItem value="dark">EDividend</SelectItem>
                  <SelectItem value="system">EBonus</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full h-full flex flex-col gap-3">
              <Label htmlFor="dropzone-file" className="font-bold">
                Upload Documents
              </Label>
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
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
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
          </div>
        </form>
        <div className="flex items-center justify-center w-[40%]">
          <ol className=" overflow-hidden space-y-8">
            <li className="relative flex-1 after:content-['']  after:w-0.5 after:h-full  after:bg-sky-900 after:inline-block after:absolute after:-bottom-11 after:left-1/2">
              <div className="flex items-center justify-center gap-8 w-full max-w-sm">
                <div className="flex items-center gap-3.5 bg-indigo-50 p-3.5 rounded-xl relative z-10 border border-indigo-600 w-full">
                  <div className="rounded-lg bg-sky-900 flex items-center justify-center">
                    <span className="text-white p-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M15.9998 7C15.9998 9.20914 14.2089 11 11.9998 11C9.79067 11 7.99981 9.20914 7.99981 7C7.99981 4.79086 9.79067 3 11.9998 3C14.2089 3 15.9998 4.79086 15.9998 7Z"
                          stroke="currentColor"
                          stroke-width="1.6"
                        />
                        <path
                          d="M11.9998 14C9.15153 14 6.65091 15.3024 5.23341 17.2638C4.48341 18.3016 4.10841 18.8204 4.6654 19.9102C5.2224 21 6.1482 21 7.99981 21H15.9998C17.8514 21 18.7772 21 19.3342 19.9102C19.8912 18.8204 19.5162 18.3016 18.7662 17.2638C17.3487 15.3024 14.8481 14 11.9998 14Z"
                          stroke="currentColor"
                          stroke-width="1.6"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className=" flex items-start rounded-md justify-center flex-col ">
                    <h6 className="text-base font-semibold text-black mb-0.5">
                      Change of name
                    </h6>
                    <p className="text-xs font-normal text-gray-500">
                      Upload file for change of name
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li className="relative flex-1 after:content-['']  after:w-0.5 after:h-full  after:bg-gray-200 after:inline-block after:absolute after:-bottom-12 after:left-1/2">
              <div className="flex items-center justify-center gap-8 w-full max-w-sm">
                <div className="flex items-center gap-3.5 bg-gray-50 p-3.5 rounded-xl relative z-10 border border-gray-50 w-full">
                  <div className="rounded-lg bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-600 p-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M8 5.99985H7C5.11438 5.99985 4.17157 5.99985 3.58579 6.58564C3 7.17142 3 8.11423 3 9.99985V16.9998C3 18.8855 3 19.8283 3.58579 20.4141C4.17157 20.9998 5.11438 20.9998 7 20.9998H17C18.8856 20.9998 19.8284 20.9998 20.4142 20.4141C21 19.8283 21 18.8855 21 16.9998V9.99985C21 8.11423 21 7.17142 20.4142 6.58564C19.8284 5.99985 18.8856 5.99985 17 5.99985H16M12 17.9998V17.9284C12 17.53 12 17.3308 11.9624 17.1661C11.8342 16.6043 11.3955 16.1657 10.8338 16.0375C10.669 15.9998 10.4698 15.9998 10.0714 15.9998H8C7.53501 15.9998 7.30252 15.9998 7.11177 16.051C6.59413 16.1897 6.18981 16.594 6.05111 17.1116C6 17.3024 6 17.5349 6 17.9998M15 12.9998H18M15 15.9998H18M10.5 12.4998C10.5 13.3283 9.82843 13.9998 9 13.9998C8.17157 13.9998 7.5 13.3283 7.5 12.4998C7.5 11.6714 8.17157 10.9998 9 10.9998C9.82843 10.9998 10.5 11.6714 10.5 12.4998ZM10.25 5.47472V6.24985C10.25 6.95208 10.25 7.3032 10.4185 7.55542C10.4915 7.66461 10.5852 7.75836 10.6944 7.83132C10.9467 7.99985 11.2978 7.99985 12 7.99985C12.7022 7.99985 13.0533 7.99985 13.3056 7.83132C13.4148 7.75836 13.5085 7.66461 13.5815 7.55542C13.75 7.3032 13.75 6.95208 13.75 6.24985V5.47472C13.75 5.16873 13.75 5.01573 13.7069 4.87378C13.6879 4.8111 13.6628 4.75043 13.6319 4.69267C13.562 4.56185 13.4538 4.45366 13.2374 4.23729C12.7409 3.74073 12.4926 3.49246 12.1951 3.43328C12.0663 3.40766 11.9337 3.40766 11.8049 3.43328C11.5074 3.49246 11.2591 3.74073 10.7626 4.23729C10.5462 4.45366 10.438 4.56185 10.3681 4.69267C10.3372 4.75043 10.3121 4.8111 10.2931 4.87378C10.25 5.01573 10.25 5.16873 10.25 5.47472Z"
                          stroke="currentColor"
                          stroke-width="1.6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className=" flex items-start rounded-md justify-center flex-col">
                    <h6 className="text-base font-semibold text-black mb-0.5">
                      E dividend
                    </h6>
                    <p className="text-xs font-normal text-gray-500">
                      Anything you want for your credentials
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li className="relative flex-1 ">
              <div className="flex items-center justify-center gap-8 w-full max-w-sm">
                <div className="flex items-center gap-3.5 bg-gray-50 p-3.5 rounded-xl relative z-10 border border-gray-50 w-full">
                  <div className="rounded-lg bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-600 p-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M15.9998 7C15.9998 9.20914 14.2089 11 11.9998 11C9.79067 11 7.99981 9.20914 7.99981 7C7.99981 4.79086 9.79067 3 11.9998 3C14.2089 3 15.9998 4.79086 15.9998 7Z"
                          stroke="currentColor"
                          stroke-width="1.6"
                        />
                        <path
                          d="M11.9998 14C9.15153 14 6.65091 15.3024 5.23341 17.2638C4.48341 18.3016 4.10841 18.8204 4.6654 19.9102C5.2224 21 6.1482 21 7.99981 21H15.9998C17.8514 21 18.7772 21 19.3342 19.9102C19.8912 18.8204 19.5162 18.3016 18.7662 17.2638C17.3487 15.3024 14.8481 14 11.9998 14Z"
                          stroke="currentColor"
                          stroke-width="1.6"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className=" flex items-start rounded-md justify-center flex-col ">
                    <h6 className="text-base font-semibold text-black mb-0.5">
                      E Bonus
                    </h6>
                    <p className="text-xs font-normal text-gray-500">
                      Upload files for bonus
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default NewDocument;
