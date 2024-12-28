"use server";

import { adminDb } from "@/firebase-admin";
import { revalidateTag } from "next/cache";

export default async function updateTitle(
  roomId: string,
  title: string
): Promise<void> {
  console.log("updateTitle");
  try {
    if (!title) title = "New Document";

    const Document_Ref = adminDb.collection("documents").doc(roomId);
    await Document_Ref.update({ title });
    revalidateTag(`document`);
  } catch (error) {
    console.error("Error updating title:", error);
  }
}
