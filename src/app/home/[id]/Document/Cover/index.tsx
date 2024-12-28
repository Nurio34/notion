function Cover() {
  return (
    <label
      htmlFor="cover"
      className="block min-h-48 cursor-pointer"
      style={{
        backgroundImage: "url('/document/cover.webp')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      title="Change Cover"
    >
      <input type="file" name="cover" id="cover" hidden />
    </label>
  );
}
export default Cover;
