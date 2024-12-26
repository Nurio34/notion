function UserIcon({ firstLetter }: { firstLetter: string }) {
  return (
    <div
      style={{
        padding: "4px",
        lineHeight: 1,
        borderRadius: "5px",
        backgroundColor: "rgb(145,145,142)",
      }}
    >
      {firstLetter}
    </div>
  );
}
export default UserIcon;
