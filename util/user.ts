import prisma from "./prisma";
import { Session_tb, Department_tb, User_tb, User_Table } from "@prisma/client";

export async function createUser(data: any) {
  try {
    const user = await prisma.user_tb.create({ data });

    // const department = await prisma.department_tb.update({
    //   where: {
    //     id: user.id
    //   },
    //   data: {

    //   }
    // });
    // console.log(data);
    // await prisma.users_frisops_tb.create({ data });
    return "Done";
  } catch (error) {
    console.log(error);
    return { error };
  }
}

export async function createSession(data: Session_tb) {
  try {
    //console.log(data);

    // const userId = await prisma.users_frisops_tb.findUnique({
    //   where: {
    //     clerkUserId: `${data.user_id}`,
    //   },
    // });

    await prisma.session_tb.create({ data });
    return "Done";
  } catch (error) {
    console.log(error);
    return { error };
  }
}
