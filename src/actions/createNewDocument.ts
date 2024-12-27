"use server";

import { adminDb } from "@/firebase-admin";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function createNewDocument(): Promise<void> {
  try {
    const user = await currentUser();

    const userEmail = user!.primaryEmailAddress!.emailAddress;

    const Documents_Collection_Ref = adminDb.collection("documents");
    const docRef = await Documents_Collection_Ref.add({
      title: "New Document",
    });

    await adminDb
      .collection("users")
      .doc(userEmail)
      .collection("rooms")
      .doc(docRef.id)
      .set({
        userId: userEmail,
        role: "owner",
        createdAt: new Date(),
        roomId: docRef.id,
      });

    revalidatePath("/home");
  } catch (error) {
    console.log(error);
  }
}
