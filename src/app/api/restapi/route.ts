import { NextResponse } from "next/server";
import prisma from "../../../../util/prisma";
import { Session_tb, Department_tb } from "@prisma/client";

export async function GET(request: Request) {
  const getDepartment = await prisma.department_tb.findMany();

  // console.log(getDepartment);
  return NextResponse.json({ data: getDepartment });
}
