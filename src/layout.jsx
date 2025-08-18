import './layout.css'
export default function LayoutPage() {
  return (
    <div className="layout-page">
      <h1>Form Submitted Successfully!</h1>
      <button onClick={() => window.location.href = "/"}>Go back</button>
    </div>
  );
}
