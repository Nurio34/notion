"use server";

import { adminDb } from "@/firebase-admin";
import { revalidatePath } from "next/cache";

export default async function updateTitle(
  roomId: string,
  formData: FormData
): Promise<void> {
  try {
    const title = formData.get("title") as string;
    if (!title) return;

    const Document_Ref = adminDb.collection("documents").doc(roomId);
    await Document_Ref.update({ title });
    revalidatePath("/home");
  } catch (error) {
    console.error("Error updating title:", error);
  }
}
