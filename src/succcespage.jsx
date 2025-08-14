import './index.css'
export default function SuccessPage() {
  return (
    <div className="success-page">
      <h1>Form Submitted Successfully!</h1>
      <button onClick={() => window.location.href = "/"}>Go back</button>
    </div>
  );
}
