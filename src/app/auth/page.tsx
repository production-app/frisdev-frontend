import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

let rolesInfo = "";

const AuthUser = () => {
  const fetchUser = async () => {
    const { userId } = auth();

    try {
      let result = await fetch(
        `http://localhost:3000/api/connections/${userId}`
      );
      await result.json().then((res) => {
        rolesInfo = res.userId.role;
      });
    } catch (error) {
      console.log(error);
    }
  };

  fetchUser();

  rolesInfo === "admin"
    ? redirect("/admin/dashboard")
    : redirect("/user/dashboard");

  return (
    <div className="fixed inset-0 bg-wokflow_bg">
      <div className="flex items-center justify-center w-full h-full text-black">
        <span className="font-semibold text-lg">
          <Image
            src={"/logo.png"}
            className="animate-pulse"
            alt="bounvnin"
            width={200}
            height={200}
          />
        </span>
      </div>
    </div>
  );
};

export default AuthUser;
