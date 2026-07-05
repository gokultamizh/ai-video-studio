import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const image = formData.get("image") as File | null;
    const video = formData.get("video") as File | null;
    const prompt = formData.get("prompt") as string;
    const motionStrength = formData.get("motionStrength") as string;
    const camera = formData.get("camera") as string;
    const creativity = formData.get("creativity") as string;

    console.log("Image:", image?.name);
    console.log("Video:", video?.name);
    console.log("Prompt:", prompt);
    console.log("Motion:", motionStrength);
    console.log("Camera:", camera);
    console.log("Creativity:", creativity);

    return NextResponse.json({
      success: true,
      message: "Files received successfully! 🚀",
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      { status: 500 }
    );
  }
}