"use server";

import { adminDb } from "@/firebase-admin";
import { DocumentType } from "@/types/document";
import { unstable_cache } from "next/cache";

const getDocument = unstable_cache(
  async (roomId: string): Promise<DocumentType> => {
    try {
      console.log("getDocument");

      const Document_Ref = adminDb.collection("documents").doc(roomId);
      const querySnapshot = await Document_Ref.get();

      if (!querySnapshot.exists) {
        console.error(`Document with roomId ${roomId} does not exist.`);
        return {} as DocumentType;
      }

      return querySnapshot.data() as DocumentType;
    } catch (error) {
      console.error("Error fetching document:", error);
      return {} as DocumentType;
    }
  },
  [`document`],
  { tags: [`document`] }
);
export default getDocument;
