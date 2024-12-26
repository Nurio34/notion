"use client";

import NewDoc from "@/icons/NewDoc";
import Spinner from "@/icons/Spinner";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className=" btn btn-ghost btn-sm outline-blue-400"
      disabled={pending}
    >
      {pending ? <Spinner /> : <NewDoc />}
    </button>
  );
}
export default SubmitButton;
