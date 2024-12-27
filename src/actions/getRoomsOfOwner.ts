"use server";

import { adminDb } from "@/firebase-admin";
import { Timestamp } from "firebase/firestore";

export type RoomType = {
  id: string;
  userId: string;
  role: string;
  createdAt: string;
  roomId: string;
};

export type DataType = {
  userId: string;
  role: string;
  createdAt: Timestamp;
  roomId: string;
};

export async function getRoomsOfOwner(email: string): Promise<RoomType[]> {
  try {
    const Users_Collection_Ref = adminDb.collection("users");
    const Rooms_Collection_Ref =
      Users_Collection_Ref.doc(email).collection("rooms");

    const querySnapshot = await Rooms_Collection_Ref.where(
      "role",
      "==",
      "owner"
    )
      .orderBy("createdAt", "asc")
      .get();

    const rooms: RoomType[] = [];
    querySnapshot.forEach((doc) => {
      const id = doc.id;
      const data = doc.data() as DataType;
      const createdAt = data.createdAt.toDate().toISOString();
      const room = { id, ...data, createdAt };
      rooms.push(room);
    });

    return rooms;
  } catch (error) {
    console.error("Error fetching user rooms:", error);
    return [];
  }
}
