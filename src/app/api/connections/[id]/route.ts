import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { createSession } from "../../../../../util/user";
import prisma from "../../../../../util/prisma";
import { Session_tb, User_tb } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

type Params = {
  id: string;
};

export async function GET(request: Request, context: { params: Params }) {
  const id = context.params.id;

  // console.log("Connection --->", )

  const userId = await prisma.user_tb.findUnique({
    where: {
      clerkUserId: `${id}`,
    },
  });

  // console.log("Connection --->", userId);

  return NextResponse.json({ userId });
}

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET_1;

  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Please add CLERK_WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occurred -- no svix headers", {
      status: 400,
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occurred", {
      status: 400,
    });
  }

  const eventType = evt.type;

  if (eventType === "session.created") {
    const { client_id, user_id, status } = evt.data;

    // if (!id || !email_addresses) {
    //   return new Response("Error occurred -- missing data", {
    //     status: 400,
    //   });
    // }

    const conn = {
      client_id,
      user_id,
      status,
    };

    console.log(conn);

    await createSession(conn as Session_tb);
  }

  return new Response("", { status: 200 });
}
