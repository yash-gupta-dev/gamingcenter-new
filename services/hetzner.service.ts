import { PutObjectCommand } from "@aws-sdk/client-s3";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { s3 } from "../config/s3";
import path from "path";
import crypto from "crypto";

export const uploadFileToS3 = async (
  file: Express.Multer.File,
  folder = "uploads"
) => {
  const fileExt = path.extname(file.originalname);
  const fileName = `${crypto.randomUUID()}${fileExt}`;

  const key = `${folder}/${fileName}`;

  await s3.send(
    new PutObjectCommand({
      Bucket: process.env.HETZNER_BUCKET!,
      Key: key,
      Body: file.buffer,
      ContentType: file.mimetype,
      ACL: "public-read", // optional
    })
  );

  return {
    key,
    url: `${process.env.HETZNER_ENDPOINT}/${process.env.HETZNER_BUCKET}/${key}`,
  };
};


export const getDownloadUrl = async (key: string) => {
  const command = new GetObjectCommand({
    Bucket: process.env.HETZNER_BUCKET!,
    Key: key,
  });

  return getSignedUrl(s3, command, { expiresIn: 3600 });
};