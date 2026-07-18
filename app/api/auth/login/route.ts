import { NextResponse } from "next/server";
import { signIn } from "@/auth";
import { loginSchema } from "@/lib/schemas";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = loginSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  try {
    await signIn("credentials", { email: parsed.data.email, password: parsed.data.password, redirect: false });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }
}
