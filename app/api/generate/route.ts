import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("Received Request:", body);

    return NextResponse.json({
      success: true,
      message: "AI Generation Started 🚀",
      data: body,
    });

  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      { status: 500 }
    );
  }
}