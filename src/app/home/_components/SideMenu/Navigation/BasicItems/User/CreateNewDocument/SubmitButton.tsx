"use client";

import NewDoc from "@/icons/NewDoc";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className=" btn btn-ghost btn-sm outline-blue-400"
      disabled={pending}
      aria-label="create new document"
    >
      {pending ? <span className="loading loading-spinner"></span> : <NewDoc />}
    </button>
  );
}
export default SubmitButton;
