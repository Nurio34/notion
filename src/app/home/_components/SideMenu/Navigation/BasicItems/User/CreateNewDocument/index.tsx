import { createNewDocument } from "@/actions/createNewDocument";
import SubmitButton from "./SubmitButton";

function CreateNewDocument() {
  return (
    <form action={createNewDocument}>
      <SubmitButton />
    </form>
  );
}
export default CreateNewDocument;
