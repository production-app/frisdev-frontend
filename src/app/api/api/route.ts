import { NextResponse } from "next/server";
import prisma from "../../../../util/prisma";
import { Session_tb, Department_tb, User_tb } from "@prisma/client";

// export async function GET(request: Request) {
//   const getDepartment = await prisma.department_tb.findMany();

//   return NextResponse.json({ data: getDepartment });
// }

export async function POST(req: Request, res: Response) {
  const data = await req.json();
  //console.log("Data ---> ", data);

  // const getId = await prisma.department_tb.findUnique({
  //   where: {
  //     department: data.department,
  //   },
  // });

  let dept = data.department;

  //console.log(dept);

  const getDeptInfo: any = await prisma.department_tb.findUnique({
    where: {
      department: dept,
    },
  });

  //  console.log(getDeptInfo);

  // await prisma.user_tb.update({
  //   where: {
  //     clerkUserId: data.userId,
  //   },
  //   data: {
  //     departments: getDeptInfo,
  //   },
  // });

  const userDept = await prisma.user_tb.update({
    data: {
      userId: getDeptInfo.id,
      status: true,
    },
    where: {
      clerkUserId: data.userId,
    },
  });

  return new Response("Done !", { status: 200 });
}
