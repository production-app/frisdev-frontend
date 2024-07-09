import { WebhookEvent } from "@clerk/nextjs/server";
import { Session_tb } from "@prisma/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { Webhook } from "svix";
import prisma from "../../../../../util/prisma";

type Params = {
  id: string;
};

export async function PUT(request: Request, context: { params: Params }) {
  const id = context.params.id;
  const data = await request.json();

  const userDept = await prisma.user_tb.update({
    data: {
      role: data.role,
    },
    where: {
      id: +id,
    },
  });

  return NextResponse.json({ data: "Done" });
}
