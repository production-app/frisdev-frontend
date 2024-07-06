import "@/styles/globals.css";
import { SignIn } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";

const LoginPage = async () => {
  const date = new Date();

  const role = "admin";

  return (
    <div className="relative w-full h-screen">
      <div className="w-full h-full absolute inset-0 bg-sky-900  z-10"></div>
      <div className="absolute inset-0 z-30">
        <div className="w-full h-full flex flex-row-reverse">
          {/** */}
          <div className="w-full p-4  lg:w-1/2  relative  flex items-left justify-left">
            <Link href={"/"} className="top-10 absolute m-auto">
              <Image
                src={"/logo-light.png"}
                alt="first_register_logo"
                width={150}
                height={150}
              />
            </Link>
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute m-auto inset-0 bg-yellow-700 w-[300px] h-[365px] rounded-lg rotate-[20deg] z-10"></div>
              <div className="absolute m-auto inset-0 bg-white min-w-[300px] border-2 border-yellow-700 w-fit h-[365px] rounded-lg z-20 pb-4">
                <div className="relative w-full h-[200px] flex flex-col items-center">
                  <div
                    className=" bg-white h-auto  flex flex-col items-center w-full text-center p-7  rounded-lg "
                    id="login-model"
                  >
                    <SignIn
                      fallbackRedirectUrl={`${
                        role === "admin" && "/admin/dashboard"
                      }  `}
                    />
                    {/**
                    <Link href={"/"}>
                      <Image
                        src={"/logo.png"}
                        alt="first_register_logo"
                        width={150}
                        height={150}
                      />
                    </Link> */}

                    {/* <Image
                      className="mt-2"
                      src={"/wb.jpeg"}
                      alt="first_register_logo"
                      width={200}
                      height={200}
                    />

                    <p className=" text-sm dark:text-gray-200">
                      Login with Microsoft 365 account
                    </p> */}
                    {/* 
                    <div className="w-full mt-6">
                      <a href="/" className="block">
                        <button className="w-full text-center bg-sky-900 text-white py-2 my-3 border flex items-center justify-center border-slate-200 rounded-sm hover:bg-sky-900 hover:border-yellow-700 hover:text-white hover:shadow transition duration-150">
                          <img
                            src="/ms65.png"
                            className="w-5 h-5 mr-2"
                            alt="Google Icon"
                          />
                          <span className="dark:text-gray-300">
                            Login with Microsoft
                          </span>
                        </button>
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="mt-auto  py-3 items-center gap-3 justify-center border-t border-t-gray-500 flex flex-col mb-5  text-white text-sm ">
                <span>
                  © {date.getFullYear()} First Registrars & Investor Services
                  Limited Rights Reserved.
                </span>
                {/* <ul className="flex gap-3 ">
                  <li className="border border-gray-500 rounded-md p-1">
                    <a
                      target="_blank"
                      href="https://www.facebook.com/firstregistrarsnigeria"
                    >
                      <Facebook />
                    </a>
                  </li>
                  <li className="border border-gray-500 rounded-md p-1">
                    <a
                      target="_blank"
                      href="https://instagram.com/FirstRegistrars"
                    >
                      <Instagram />
                    </a>
                  </li>
                  <li className="border border-gray-500 rounded-md p-1">
                    <a
                      target="_blank"
                      href="https://twitter.com/FirstRegistrars"
                    >
                      <Twitter />
                    </a>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
          <div className="hidden lg:flex flex-col w-1/2 relative h-full bg-white items-center justify-center ">
            <Link href={"/"}>
              <Image
                src={"/illus.jpg"}
                alt="first_register_logo"
                width={600}
                height={600}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

/** <div className="gradient-mask-right bg-sky-900 h-full w-full backdrop-blur-3xl z-10"></div>
      <div className="w-full h-full absolute inset-0 z-30">
        <div className="flex gap-3 w-full p-3">
          <Link href={"/"} className="mr-auto">
            <Image
              src={"/logo.png"}
              alt="first_register_logo"
              width={400}
              height={100}
            />
          </Link>
        </div>
      </div> */
