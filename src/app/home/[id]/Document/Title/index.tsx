import updateTitle from "@/actions/updateTitle";

function Title({ title, roomId }: { title: string; roomId: string }) {
  const updateTitleAction = updateTitle.bind(null, roomId);

  return (
    <form action={updateTitleAction}>
      <input type="text" name="title" id="title" defaultValue={title} />
      <button type="submit">Update</button>
    </form>
  );
}
export default Title;
