import { NextResponse } from "next/server";
type Params = {
  id: string;
};
export async function GET(request: Request, context: { params: Params }) {
  const id = context.params.id;

  try {
    console.log("logged", id);
    return NextResponse.json({ param: id });
  } catch (error) {
    return NextResponse.json({ error: error });
  }
}
