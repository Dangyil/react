export default function SuccessPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Form Submitted Successfully!</h1>
      <button onClick={() => window.location.href = "/"}>Go back</button>
    </div>
  );
}
