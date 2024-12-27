"use server";

import { adminDb } from "@/firebase-admin";
import { DocumentType } from "@/types/document";

export default async function getDocument(id: string): Promise<DocumentType> {
  const Document_Ref = adminDb.collection("documents").doc(id);
  const querySnapshot = await Document_Ref.get();

  return querySnapshot.data() as DocumentType;
}
