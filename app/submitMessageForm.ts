"use server";

import { writeFile } from "fs/promises";
import { revalidatePath } from "next/cache";

export async function submitMessageForm(formData: FormData) {
  console.log(formData.get("content"));

  const content = formData.get("content");
  if (content) {
    await writeFile("message.txt", content.toString());
  }

  revalidatePath("/");
}