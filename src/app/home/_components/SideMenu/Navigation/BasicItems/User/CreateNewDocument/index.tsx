import { createNewDocument } from "@/actions/createNewDocument";
import SubmitButton from "./SubmitButton";

export default function CreateNewDocumentForm() {
  return (
    <form action={createNewDocument}>
      <SubmitButton />
    </form>
  );
}
