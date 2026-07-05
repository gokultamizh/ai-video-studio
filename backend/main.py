from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
import os
import shutil

app = FastAPI(title="AI Video Studio Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_FOLDER = "uploads"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@app.get("/")
def home():
    return {
        "status": "running",
        "message": "AI Video Studio Backend 🚀"
    }


@app.post("/generate")
async def generate(
    image: UploadFile = File(...),
    video: UploadFile = File(...),
    prompt: str = Form(...),
    motionStrength: str = Form(...),
    camera: str = Form(...),
    creativity: str = Form(...)
):

    image_path = os.path.join(
        UPLOAD_FOLDER,
        image.filename
    )

    with open(image_path, "wb") as buffer:
        shutil.copyfileobj(image.file, buffer)

    video_path = os.path.join(
        UPLOAD_FOLDER,
        video.filename
    )

    with open(video_path, "wb") as buffer:
        shutil.copyfileobj(video.file, buffer)

    return {
        "success": True,
        "message": "Files uploaded successfully 🚀",
        "image": image.filename,
        "video": video.filename,
        "prompt": prompt,
        "motionStrength": motionStrength,
        "camera": camera,
        "creativity": creativity
    }