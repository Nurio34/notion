"use server";

import { adminDb } from "@/firebase-admin";
import { DataType, RoomType } from "./getRoomsOfOwner";

export default async function getRoom(
  email: string,
  id: string
): Promise<RoomType | undefined> {
  try {
    const Room_Collection_Ref = adminDb
      .collection("users")
      .doc(email)
      .collection("rooms")
      .doc(id);

    const querySnapshot = await Room_Collection_Ref.get();
    const data = querySnapshot.data() as DataType;

    if (!data) return undefined;

    const createdAt = data.createdAt.toDate().toISOString();

    return { id, ...data, createdAt };
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
