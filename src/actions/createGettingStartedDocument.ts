"use server";

import { adminDb } from "@/firebase-admin";
import { currentUser } from "@clerk/nextjs/server";

export async function createGettingStartedDocument() {
  try {
    const user = await currentUser();

    if (!user) throw new Error("User is not authenticated");

    const userEmail = user.primaryEmailAddress!.emailAddress;

    const Documents_Collection_Ref = adminDb.collection("documents");
    const docId = "Getting-Started";

    await Documents_Collection_Ref.doc(docId).set({
      title: "Getting Started",
    });

    await adminDb
      .collection("users")
      .doc(userEmail)
      .collection("rooms")
      .doc(docId)
      .set({
        userId: userEmail,
        role: "owner",
        createdAt: new Date(),
        roomId: docId,
      });
  } catch (error) {
    console.error("Error creating 'Getting Started' document:", error);
  }
}
