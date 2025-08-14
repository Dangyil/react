import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ValidationForm from './App.jsx'
import SuccessPage from './succcespage.jsx'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ValidationForm />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);