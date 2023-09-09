import { NextResponse } from "next/server";
import { headers, cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  const headersList = headers();
  const type = headersList.get("Content-Type");

  const cookiesList = cookies();
  const coo2 = cookiesList.get("Cookie_2")?.value;

  //logic delete post
  //redirect("/blog");
  return NextResponse.json({ success: true, id });
}
