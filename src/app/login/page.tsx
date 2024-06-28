import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  const date = new Date();
  /**
   *
   * json:{ id , name, avatar, role, banner}
   * user roles: admin, user
   *
   * admin : admin layout
   *
   * {
   * role: "sfsf",
   * layout: <layoutcomponent/>
   * }
   *
   * user: user layout
   *
   * if role = admin > admin layout
   * if role - user > user layout
   *
   *
   * database schema
   * clerk
   * api
   * react query
   * */

  return (
    <div className="relative w-full h-screen">
      <div className="w-full h-full absolute inset-0 bg-sky-900  z-10"></div>
      <div className="absolute inset-0 z-30">
        <div className="w-full h-full flex flex-row-reverse">
          {/** */}
          <div className="w-full  lg:w-1/2  relative  flex items-center justify-center">
            <Link href={"/"} className="top-10 absolute m-auto">
              <Image
                src={"/logo-light.png"}
                alt="first_register_logo"
                width={150}
                height={150}
              />
            </Link>
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute m-auto inset-0 bg-yellow-700 w-[300px] h-[240px] rounded-lg rotate-[20deg] z-10"></div>
              <div className="absolute m-auto inset-0 bg-white min-w-[300px] border-2 border-yellow-700 w-fit h-[240px] rounded-lg z-20">
                <div className="relative w-full h-[200px] flex flex-col items-center">
                  <div
                    className=" bg-white h-full  flex flex-col items-center w-full text-center p-6  rounded-lg "
                    id="login-model"
                  >
                    {/**
                    <Link href={"/"}>
                      <Image
                        src={"/logo.png"}
                        alt="first_register_logo"
                        width={150}
                        height={150}
                      />
                    </Link> */}

                    <Image
                      className="mt-2"
                      src={"/wb.jpeg"}
                      alt="first_register_logo"
                      width={200}
                      height={200}
                    />

                    <p className=" text-sm dark:text-gray-200">
                      Login with Microsoft 365 account
                    </p>

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
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-auto py-3 items-center gap-3 justify-center border-t border-t-gray-500 flex flex-col mb-5  text-white text-sm ">
                <span>
                  © {date.getFullYear()} First Registrars & Investor Services
                  Limited Rights Reserved.
                </span>
                <ul className="flex gap-3 ">
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
                </ul>
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
