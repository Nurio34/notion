"use client";

import updateTitle from "@/actions/updateTitle";
import { useEffect, useRef, useState } from "react";

function Title({ title, roomId }: { title: string; roomId: string }) {
  const [titleState, setTitleState] = useState(title);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (title === titleState) return;

    const updateTitleAction = async () => await updateTitle(roomId, titleState);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      updateTitleAction();
    }, 2000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [titleState]);

  return (
    <label htmlFor="title" aria-label="title">
      <textarea
        name="title"
        id="title"
        rows={1}
        className=" bg-transparent resize-none w-full text-4xl outline-none py-1"
        style={{ scrollbarWidth: "none" }}
        placeholder={"New Document"}
        onChange={(e) => {
          e.currentTarget.style.height = "auto";
          e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
          setTitleState(e.currentTarget.value);
        }}
        value={
          titleState === "New Document" || titleState.trim() === ""
            ? ""
            : titleState
        }
      ></textarea>
    </label>
  );
}
export default Title;
