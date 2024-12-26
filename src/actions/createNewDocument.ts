"use server";

import { adminDb } from "@/firebase-admin";
import { auth, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function createNewDocument() {
  try {
    const user = await currentUser();

    if (!user) return auth.protect();

    const userEmail = user.primaryEmailAddress!.emailAddress;

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
    return { docId: docRef.id };
  } catch (error) {
    console.log(error);
  }
}
