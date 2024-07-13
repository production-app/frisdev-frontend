import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  let a = prisma.user_Table.findMany();

  return NextResponse.json({ data: a }, { status: 200 });
}
