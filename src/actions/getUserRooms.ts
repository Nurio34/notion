"use server";

import { adminDb } from "@/firebase-admin";
import { auth, currentUser } from "@clerk/nextjs/server";

export type RoomType = {
  id: string;
  userId: string;
  role: string;
  createdAt: Date;
  roomId: string;
};

type DataType = {
  userId: string;
  role: string;
  createdAt: Date;
  roomId: string;
};

export async function getUserRooms(): Promise<RoomType[]> {
  try {
    const user = await currentUser();
    if (!user) return auth.protect() as never;

    const userEmail = user.primaryEmailAddress!.emailAddress;

    const Users_Collection_Ref = adminDb.collection("users");
    const Rooms_Collection_Ref =
      Users_Collection_Ref.doc(userEmail).collection("rooms");

    const querySnapshot = await Rooms_Collection_Ref.get();

    const rooms: RoomType[] = [];
    querySnapshot.forEach((doc) => {
      const id = doc.id;
      const data = doc.data() as DataType;
      const room = { id, ...data };
      rooms.push(room);
    });
    console.log(rooms);

    return rooms;
  } catch (error) {
    console.error("Error fetching user rooms:", error);
    return [];
  }
}
