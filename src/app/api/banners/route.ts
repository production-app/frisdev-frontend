import prisma from "@lib/prisma";
import { Banner } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
export async function GET(
  request: Request,
  { params }: { params: { retu: string } }
) {
  try {
    //
    const url = new URL(request.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const bannerType = searchParams.get("rt");

    if (bannerType) {
      const data = await prisma.banner.findMany({
        where: { bannerType: bannerType as Banner["bannerType"] },
      });
      return NextResponse.json(data, { status: 201 });
    } else {
      const data = await prisma.banner.findMany();
      return NextResponse.json(data, { status: 201 });
    }
  } catch (error) {
    console.error("Error fetching Banner:", error);
    return NextResponse.json({ error: "Failed to fetch Banner" });
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const newBanner = await prisma.banner.create({
      data: { ...data },
    });
    console.log(newBanner);
    return NextResponse.json(newBanner);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to create Banner" });
  }
}
