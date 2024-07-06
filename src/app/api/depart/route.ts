import { NextResponse } from "next/server";
import prisma from "../../../../util/prisma";
import { Session_tb, Department_tb } from "@prisma/client";

export async function GET(request: Request) {
  const getDepartment = await prisma.department_tb.findMany({
    where: {
      id: 4,
    },
    include: {
      user: {
        select: {
          id: true,
          email: true,
          firstName: true,
        },
      },
    },
  });

  return NextResponse.json({ data: getDepartment });
}
