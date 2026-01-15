export const ALLOWED_MIME_TYPES = [
  "application/zip",
  "application/x-zip-compressed",
  "image/png",
  "image/jpeg",
  "image/webp",
  "image/gif",
  "video/mp4",
  "video/webm",
];

export const ALLOWED_EXTENSIONS = [
  "zip",
  "png",
  "jpg",
  "jpeg",
  "webp",
  "gif",
  "mp4",
  "webm",
];

export const MAX_FILE_SIZE_GAME = 100 * 1024 * 1024; // 100MB
export const MAX_FILE_SIZE_GIF = 10 * 1024 * 1024; // 10MB
export const MAX_FILE_SIZE_THUMBNAIL = 10 * 1024 * 1024; // 10MB

export const GIF_MEME_TYPE = ["image/gif"];
export const GIF_MEME_EXTENSION = "gif";

export const IMAGE_MEME_TYPE = ["image/png", "image/jpeg", "image/webp"];
export const IMAGE_MEME_EXTENSION = ["png", "jpeg", "jpg", "webp"];

export const GAME_MEME_TYPE = ["application/zip", "application/x-zip-compressed"];
export const GAME_MEME_EXTENSION = "zip";

export const GAME_ENGINES = [
  "HTML5",
  "Unity",
  "Godot",
  "UnReal"
]