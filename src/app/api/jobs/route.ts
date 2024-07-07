import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../util/prisma";
import { Session_tb, Job_entry } from "@prisma/client";
import { customAlphabet } from "nanoid";

const alphabet = "0123456789";

const nanoid = customAlphabet(alphabet, 2);

export async function POST(req: NextRequest) {
  const data = await req.json();
  //console.log("Data New ---> ", data);

  function formatDate() {
    var d = new Date(),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("");
  }

  try {
    const result = await prisma.job_entry.create({
      data: {
        controlNumber: `CN${formatDate()}${nanoid()}`,
        customerName: data.nameofcustomer,
        sourceOfDocument: data.soureofdocument,
        typeofDocument: data.jobtypes,
        proxyname: data.proxyname,
      },
    });
    return NextResponse.json(
      {
        data: result,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("error -->", error);
    return NextResponse.json(
      {
        err: error,
      },
      { status: 400 }
    );
  }
}

export async function GET() {
  const jobs = await prisma.job_entry.findMany();

  // console.log("Connection --->", userId);

  return NextResponse.json({ jobs });
}
