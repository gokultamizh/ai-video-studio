export interface MediaFile {
    id: string;
    file: File;
    preview: string;
    type: "image" | "video";
  }