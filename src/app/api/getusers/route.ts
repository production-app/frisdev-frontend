import { WebhookEvent } from "@clerk/nextjs/server";
import { Session_tb, User_tb } from "@prisma/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const users = await prisma.user_tb.findMany({});

  // console.log("Connection --->", userId);

  return NextResponse.json({ users });
}
