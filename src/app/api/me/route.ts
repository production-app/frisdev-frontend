import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ data: "" }, { status: 200 });
}

export async function POST() {
  return NextResponse.json({ data: "" }, { status: 200 });
}
